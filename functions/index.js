const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.checkUserByPhoneNumber = functions.https.onCall(
  async (data, context) => {
    const phoneNumber = data.phoneNumber;
    const usersRef = admin.firestore().collection("users");
    const snapshot = await usersRef
      .where("phoneNumber", "==", phoneNumber)
      .get();

    if (snapshot.empty) {
      return { exists: false };
    } else {
      let userId = null;
      snapshot.forEach((doc) => {
        userId = doc.id;
      });
      return { exists: true, userId: userId };
    }
  }
);

exports.saveUserLocation = functions.https.onCall((data, context) => {
  console.log("Функция вызвана с данными:", data);
  // Проверяем аутентификацию пользователя
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "The user is not authenticated."
    );
  }

  const userId = context.auth.uid;
  const { latitude, longitude, userData } = data;

  // Сохраняем местоположение пользователя
  return admin
    .database()
    .ref(`employee/geolocations/${userId}`)
    .set({
      latitude,
      longitude,
      userData,
      timestamp: admin.database.ServerValue.TIMESTAMP,
    })
    .then(() => {
      console.log("Местоположение сохранено для пользователя:", userId);
      return { success: true };
    })
    .catch((error) => {
      throw new functions.https.HttpsError(
        "internal",
        "Не удалось сохранить местоположение.",
        error
      );
    });
});

exports.findUsersNearby = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "The user must be authenticated to make this request."
    );
  }

  const userId = context.auth.uid;
  const latitude = parseFloat(data.latitude);
  const longitude = parseFloat(data.longitude);
  const radiusInKm = parseFloat(data.radiusInKm);

  if (isNaN(latitude) || isNaN(longitude) || isNaN(radiusInKm)) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Latitude, longitude, and radius must be valid numbers."
    );
  }

  const usersRef = admin.database().ref("employee/geolocations");
  const snapshot = await usersRef.once("value");

  let nearestUsers = [];

  console.log(`Пользователь запросил поиск в радиусе ${radiusInKm} км`);

  snapshot.forEach((childSnapshot) => {
    const userKey = childSnapshot.key;
    const userLocation = childSnapshot.val();
    const distanceInKm = calculateDistance(
      latitude,
      longitude,
      userLocation.latitude,
      userLocation.longitude
    );

    console.log(`Проверяем пользователя с ID: ${userKey}`);

    if (distanceInKm <= radiusInKm && userKey !== userId) {
      nearestUsers.push({ userId: userKey, ...userLocation, distanceInKm });
    }
  });

  console.log(`Найдено ближайших пользователей: ${nearestUsers.length}`);

  return nearestUsers;
});

// Функция для расчета расстояния между двумя точками по координатам
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // радиус Земли в километрах
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    0.5 -
    Math.cos(dLat) / 2 +
    (Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      (1 - Math.cos(dLon))) /
      2;

  return R * 2 * Math.asin(Math.sqrt(a));
}

// Функция для отправки данных customer к выбранному employee
exports.sendCustomerDataToEmployee = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "The user must be authenticated to make this request."
      );
    }

    // Убедитесь, что customer передал все необходимые данные
    if (!data.employeeId || !data.customerData) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing employeeId or customerData."
      );
    }

    // Здесь мы сохраняем данные customer для employee в Realtime Database
    const employeeRef = admin
      .database()
      .ref(`ordersForEmployees/${data.employeeId}/customerData`);
    await employeeRef.set(data.customerData);

    return { result: "Customer data sent to employee." };
  }
);

exports.getOrderData = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "You must be authenticated to call this function."
    );
  }

  const userId = context.auth.uid;
  const ordersRef = admin
    .database()
    .ref(`ordersForEmployees/${userId}/customerData`);

  try {
    const snapshot = await ordersRef.once("value");
    if (!snapshot.exists()) {
      throw new functions.https.HttpsError(
        "not-found",
        "Order data not found for the current user."
      );
    }
    const orderData = snapshot.val();
    if (!orderData) {
      throw new functions.https.HttpsError(
        "not-found",
        "Order data not found for the current user."
      );
    }
    return orderData;
  } catch (error) {
    throw new functions.https.HttpsError(
      "unknown",
      "Failed to fetch order data",
      error
    );
  }
});

exports.getEmployeeLocationById = functions.https.onCall(
  async (data, context) => {
    // Проверяем аутентификацию пользователя
    if (!context.auth) {
      throw new functions.https.HttpsError(
        "unauthenticated",
        "The user must be authenticated to make this request."
      );
    }

    // Предполагаем, что у администратора уже установлены правильные claims
    if (!context.auth.token.admin) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "Only administrators can access employee location data."
      );
    }

    // ID сотрудника, чьё местоположение мы хотим найти
    const { employeeId } = data;

    if (!employeeId) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "The employee ID is required."
      );
    }

    const employeeRef = admin
      .database()
      .ref(`employee/geolocations/${employeeId}`);
    const snapshot = await employeeRef.once("value");

    if (snapshot.exists()) {
      const locationData = snapshot.val();
      return { userId: employeeId, ...locationData };
    } else {
      throw new functions.https.HttpsError(
        "not-found",
        `Location data for employee ID ${employeeId} not found.`
      );
    }
  }
);

exports.createChat = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "The user must be authenticated."
    );
  }

  const userId = context.auth.uid;
  const { recipientId } = data;

  if (!recipientId) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The 'recipientId' is required."
    );
  }

  const chatId = [userId, recipientId].sort().join("_");

  const chatRef = admin.database().ref(`/chats/${chatId}`);
  const chatExistsSnapshot = await chatRef.once("value");

  if (chatExistsSnapshot.exists()) {
    console.log("Chat already exists:", chatId);
    return { chatId };
  }

  // Fetching user info
  const [userSnapshot, recipientSnapshot] = await Promise.all([
    admin.auth().getUser(userId),
    admin.auth().getUser(recipientId),
  ]);

  const chatData = {
    participants: {
      [userId]: {
        name: userSnapshot.displayName || "Anonymous",
        avatar: userSnapshot.photoURL || "",
      },
      [recipientId]: {
        name: recipientSnapshot.displayName || "Anonymous",
        avatar: recipientSnapshot.photoURL || "",
      },
    },
  };

  await chatRef.set(chatData);

  // Обновление узлов /userChats для каждого пользователя
  const userChatsUpdates = {};
  userChatsUpdates[`/userChats/${userId}/${chatId}`] = true;
  userChatsUpdates[`/userChats/${recipientId}/${chatId}`] = true;

  await admin.database().ref().update(userChatsUpdates);

  console.log("New chat created with ID:", chatId);

  // Возврат ID созданного чата
  return { chatId };
});

exports.sendMessage = functions.https.onCall(async (data, context) => {
  // Убедитесь, что в data есть сообщение
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "The user is not authenticated."
    );
  }

  const { chatId, message } = data;
  if (!chatId || !message) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Missing 'chatId' or 'message'."
    );
  }

  const messageData = {
    text: message,
    senderId: context.auth.uid,
    timestamp: admin.database.ServerValue.TIMESTAMP,
  };

  // Добавление сообщения в базу данных

  const messageRef = admin.database().ref(`/chats/${chatId}/messages`).push();
  try {
    await messageRef.set(messageData);
    return { result: "Message sent successfully" };
  } catch (error) {
    throw new functions.https.HttpsError("unknown", error.message, error);
  }
});

exports.fetchUserChats = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "The user must be authenticated."
    );
  }

  const userId = context.auth.uid;
  const userChatsRef = admin.database().ref(`/userChats/${userId}`);
  const snapshot = await userChatsRef.once("value");
  const userChats = snapshot.val() || {};

  console.log("User ID:", userId);
  console.log("User chats keys:", Object.keys(userChats));
  const chatsData = await Promise.all(
    Object.keys(userChats).map(async (chatId) => {
      console.log(`Fetching data for chatId: ${chatId}`);
      try {
        const chatSnapshot = await admin
          .database()
          .ref(`/chats/${chatId}`)
          .once("value");
        const chatData = chatSnapshot.val();
        console.log(`Data for chatId ${chatId}:`, chatData);

        if (!chatData || !chatData.participants) {
          console.log(`No data or participants for chatId ${chatId}`);
          return null; // Возвращаем null для чатов без данных
        }

        const partnerInfo = Object.keys(chatData.participants)
          .filter((partnerId) => partnerId !== userId)
          .map((partnerId) => chatData.participants[partnerId])[0];

        return partnerInfo
          ? {
              chatId,
              partnerInfo,
            }
          : null;
      } catch (error) {
        console.error(`Error fetching chat data for chatId ${chatId}:`, error);
        return null; // Возвращаем null в случае ошибки
      }
    })
  );

  console.log("Fetched user chats with partners:", chatsData);

  return { chats: chatsData };
});

exports.fetchMessagesForChat = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "The user must be authenticated."
    );
  }

  const { chatId } = data;
  if (!chatId) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The 'chatId' is required."
    );
  }

  const messagesSnapshot = await admin
    .database()
    .ref(`/chats/${chatId}/messages`)
    .once("value");
  const messages = messagesSnapshot.val()
    ? Object.values(messagesSnapshot.val())
    : [];

  return { messages };
});
