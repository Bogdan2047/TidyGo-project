import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { ChatMessage } from "../screensItem/chats/chatMessage";
import { useNavigation } from "@react-navigation/native";
import SvgSend from "../svg/send";
import SvgBack from "../svg/back";
import { useDispatch, useSelector } from "react-redux";
import { createChat, sendMessage } from "../store/chats/fetchChats";

export const ExtraChatWithEmployee = () => {
  const navigation = useNavigation();
  const [chatEmployee, setChatEmployee] = useState(null);
  const [message, setMessage] = useState("");

  const orderData = useSelector((state) => state.createOrders.orderData);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (orderData) {
      let employee = orderData.employee;
      setChatEmployee(employee);
    }
  }, [orderData]);

  const sendMessageHandler = async () => {
    if (message !== "" && chatEmployee) {
      const recipientId = chatEmployee.userId;

      const chatId = await createChat(recipientId);

      if (chatId) {
        dispatch(
          sendMessage({
            message: message,
            // avatar: user.avatar,
            // name: user.firstName + " " + user.lastName,
            chatId: chatId,
          })
        );
        setMessage("");
      }
    }
  };

  return (
    <View style={styles.container}>
      {chatEmployee && (
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
              onPress={() => navigation.navigate("Orders")}
            >
              <SvgBack />
            </TouchableOpacity>
            <View style={{ alignItems: "center" }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  {chatEmployee.userData.firstName}{" "}
                  {chatEmployee.userData.lastName}
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 12, fontWeight: 500 }}>online</Text>
              </View>
            </View>
            <View style={{ width: 40 }}></View>
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{ width: "90%", justifyContent: "center", paddingTop: 10 }}
            >
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 12, fontWeight: 500, color: "#797979" }}
                >
                  Today
                </Text>
              </View>

              <View style={{ paddingTop: 40 }}>
                <ChatMessage
                  message="I'll be with you in 15 minutes, please leave the keys as we discussed."
                  isOwnMessage={true}
                />

                <ChatMessage
                  message="Great, the concierge has the keys, he'll give them to you."
                  isOwnMessage={false}
                />
              </View>
            </View>
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
