import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { ChatMessage } from "../screensItem/chats/chatMessage";
import { useNavigation } from "@react-navigation/native";
import SvgSend from "../svg/send";
import SvgBack from "../svg/back";
import { useDispatch, useSelector } from "react-redux";
import {
  getChats,
  getUserChats,
  loadMessages,
  sendMessage,
} from "../store/chats/fetchChats";
import auth from "@react-native-firebase/auth";

export const ChatScreen = ({ route }) => {
  const [message, setMessage] = useState("");
  const [chatMessage, setChatMessage] = useState();

  const [chatIds, setChatIds] = useState([]);
  const [person, setPerson] = useState();

  const { id } = route.params;

  const navigation = useNavigation();

  // const chats = useSelector((state) => state.chats.chats);
  const user = useSelector((state) => state.user.user);

  const userId = auth().currentUser.uid;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChats = async () => {
      const ids = await getUserChats();
      ids.map((item) => {
        if (item.chatId === id) {
          setChatIds(item.chatId);
          setPerson(item);
        }
      });
    };

    fetchChats();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      if (chatIds) {
        const messages = await loadMessages(chatIds);
        setChatMessage(messages);
        console.log("Fetched messages for chat:", messages);
      }
    };

    fetchMessages();
  }, [chatIds]);

  console.log("chatIds", chatIds);

  const sendMessageHandler = async () => {
    if (message.trim() !== "") {
      try {
        const sendResult = await sendMessage({
          message: message,
          chatId: id,
        });

        // Проверяем, что сообщение отправлено успешно
        if (sendResult.result === "Message sent successfully") {
          // Создаем новый объект сообщения
          const newMessage = {
            text: message,
            senderId: userId, // ID текущего пользователя
          };
          // Обновляем массив сообщений
          setChatMessage([...chatMessage, newMessage]);
        }
        setMessage(""); // Очищаем поле ввода
      } catch (error) {
        console.error("Ошибка при отправке сообщения:", error);
        // Здесь может быть логика обработки ошибки
      }
    }
  };

  const scrollViewRef = useRef(); // Добавляем ссылку на ScrollView

  // useEffects и другие функции...

  useEffect(() => {
    // Если chatMessage изменился, скроллим к последнему сообщению
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [chatMessage]);

  return (
    <View style={styles.container}>
      {person && (
        <>
          <View
            style={{
              alignItems: "center",
              paddingTop: 40,
              height: 100,
              width: "100%",
              backgroundColor: "white",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{ paddingLeft: 20, width: 40 }}
              onPress={() => navigation.navigate("Chats")}
            >
              <SvgBack />
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  {person.partnerInfo?.name}
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 12, fontWeight: 500 }}>online</Text>
              </View>
            </View>
            <View style={{ width: 40 }}></View>
          </View>
          <View style={{ alignItems: "center" }}>
            {chatMessage && userId ? (
              <View
                style={{
                  width: "90%",
                  justifyContent: "center",
                  paddingTop: 10,
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#797979",
                    }}
                  >
                    Today
                  </Text>
                </View>

                <View style={{ paddingTop: 40 }}>
                  {chatMessage.map((message) => {
                    if (message.senderId === userId) {
                      return (
                        <ChatMessage
                          message={message.text}
                          isOwnMessage={true}
                        />
                      );
                    }
                    if (message.senderId !== userId) {
                      return (
                        <ChatMessage
                          message={message.text}
                          isOwnMessage={false}
                        />
                      );
                    }
                  })}
                </View>
              </View>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={message}
              placeholder="Type a message..."
              onChangeText={(text) => {
                setMessage(text);
              }}
            />
            <TouchableOpacity
              style={styles.sendButton}
              onPress={() => sendMessageHandler()}
            >
              <SvgSend />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2", // Change this to your chat background color
    position: "relative",
    width: "100%",
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    maxWidth: "75%",
  },
  ownMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#E1FFC7", // Your own message background color
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0", // Other's message background color
  },
  ownMessageText: {
    color: "#000", // Your own message text color
  },
  otherMessageText: {
    color: "#000", // Other's message text color
  },
  inputContainer: {
    width: "100%",
    height: 71,
    paddingHorizontal: 12,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  input: {
    flex: 1,
    height: 39,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: "#F2F2F2",
  },
  sendButton: {
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff", // Send button text color
  },
});
