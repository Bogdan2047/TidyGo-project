import functions from "@react-native-firebase/functions";
import { errorGetChats, loadingChats, getChatsData } from "./chatsSlice";
import auth from "@react-native-firebase/auth";

export const createChat = async (recipientId) => {
  try {
    const result = await functions().httpsCallable("createChat")({
      recipientId,
    });
    console.log("Cloud Function `createChat` result:", result.data.chatId);
    return result.data.chatId;
  } catch (error) {
    console.error("Ошибка при вызове Cloud Function `createChat`:", error);
    return null;
  }
};
export const sendMessage = async ({ message, chatId }) => {
  try {
    const sendMessageCallable = functions().httpsCallable("sendMessage");
    const result = await sendMessageCallable({ message, chatId });
    console.log("oooooooeeeee", result.data); // Здесь должен быть ваш ответ
    return result.data; // Возвращаем данные напрямую
  } catch (error) {
    console.error("Ошибка при отправке сообщения:", error);
    throw error; // Выбрасываем ошибку для обработки на клиенте
  }
};

export const getUserChats = async () => {
  try {
    const fetchUserChatsCallable = functions().httpsCallable("fetchUserChats");
    const result = await fetchUserChatsCallable();
    console.log("User chats:", result.data.chats);
    return result.data.chats; // Возвращаем данные напрямую
  } catch (error) {
    console.error("Error fetching user chats:", error);
    return []; // В случае ошибки возвращаем пустой массив
  }
};

export const loadMessages = async (chatId) => {
  const fetchMessagesForChat = functions().httpsCallable(
    "fetchMessagesForChat"
  );
  try {
    if (chatId) {
      const result = await fetchMessagesForChat({ chatId });
      console.log("messages", result.data.messages);
      return result.data.messages;
    }
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
};
