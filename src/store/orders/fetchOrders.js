import { app } from "../../../firebaseConfig";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
} from "firebase/firestore";
import auth from "@react-native-firebase/auth";
import {
  getOrdersData,
  getOrdersDataError,
  loadingOrdersData,
} from "./dataOrders";
import { cleanOrder } from "./createOrderSlice";

export const saveUserData =
  ({ orderData }) =>
  (dispatch) => {
    const user = auth().currentUser;
    if (!user) return; // Проверяем, авторизован ли пользователь

    const firestore = getFirestore(app);
    const userId = user.uid; // Получаем UID пользователя

    // Создаем ссылку на документ пользователя в коллекции "users"
    const userDocRef = doc(firestore, "users", userId);

    // Создаем ссылку на подколлекцию "orders" в документе пользователя
    const userDataCollectionRef = collection(userDocRef, "orders");

    addDoc(userDataCollectionRef, orderData)
      .then((docRef) => {
        console.log(`Данные сохранены в подколлекцию с ID: ${docRef.id}`);
        dispatch(cleanOrder(null));
      })
      .catch((error) => {
        console.error("Ошибка при сохранении данных пользователя:", error);
      });
  };

export const getUserData = () => (dispatch) => {
  const user = auth().currentUser;
  if (!user) return; // Проверяем, авторизован ли пользователь

  dispatch(loadingOrdersData());

  const firestore = getFirestore(app);
  const userId = user.uid; // Получаем UID пользователя

  // Создаем ссылку на документ пользователя и подколлекцию "orders"
  const userDocRef = doc(firestore, "users", userId);
  const userDataCollectionRef = collection(userDocRef, "orders");

  getDocs(userDataCollectionRef)
    .then((querySnapshot) => {
      const allOrders = [];
      querySnapshot.forEach((doc) => {
        allOrders.push(doc.data());
      });

      dispatch(getOrdersData(allOrders));
    })
    .catch((error) => {
      console.error("Ошибка при получении данных пользователя:", error);
      dispatch(getOrdersDataError({ error: error.message }));
    });
};
