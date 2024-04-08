import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ChatMessage = ({ message, isOwnMessage }) => {
  const messageStyle = isOwnMessage ? styles.ownMessage : styles.otherMessage;
  const messageTextStyle = isOwnMessage
    ? styles.ownMessageText
    : styles.otherMessageText;

  return (
    <View>
      <View
        style={[
          isOwnMessage ? styles.messageOwnStyle : styles.messageOtheStyle,
          messageStyle,
        ]}
      >
        <View>
          <Text style={messageTextStyle}>{message}</Text>
        </View>
      </View>
      <View
        style={
          isOwnMessage
            ? { alignSelf: "flex-end", paddingBottom: 20 }
            : { alignSelf: "flex-start", paddingBottom: 20 }
        }
      >
        <Text style={{ fontSize: 12, fontWeight: 500, color: "#797979" }}>
          12:23 AM
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  messageOtheStyle: {
    padding: 10,
    marginVertical: 5,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    maxWidth: "75%",
  },
  messageOwnStyle: {
    padding: 10,
    marginVertical: 5,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 40,
    maxWidth: "75%",
  },
  ownMessage: {
    alignSelf: "flex-end",
    backgroundColor: "white",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "white",
  },
  ownMessageText: {
    color: "#1E2022",
    fontSize: 12,
    // fontWeight: 300,
  },
  otherMessageText: {
    color: "#1E2022",
    fontSize: 12,
    // fontWeight: 300,
  },
});
