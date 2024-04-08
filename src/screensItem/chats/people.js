import { View, Image, Text, TouchableOpacity } from "react-native";
import { Card } from "../../components/card/card";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadMessages } from "../../store/chats/fetchChats";

export const People = ({ item }) => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      if (item) {
        const messages = await loadMessages(item.chatId);
        setMessages(messages);
        console.log("Fetched messages for chat:", messages);
      }
    };

    fetchMessages();
  }, [item]);

  return (
    <View
      style={{
        minHeight: 58,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 16,
        justifyContent: "center",
        backgroundColor: "white",
        padding: 12,
      }}
    >
      <View
        style={{
          height: 74,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate("ChatScreen", { id: item.chatId })}
        >
          <View
            style={{
              flexDirection: "row",
              width: "60%",
            }}
          >
            <View>
              <Image
                source={
                  item.partnerInfo.avatar !== ""
                    ? {
                        uri: item.partnerInfo.avatar,
                      }
                    : require("../../../assets/images/defaultAvatar.png")
                }
                style={{ width: 70, height: 70 }}
              />
            </View>
            <View style={{ flexDirection: "column", paddingLeft: 8 }}>
              <View>
                <Text style={{ fontSize: 14, fontWeight: 500 }}>
                  {item.partnerInfo.name}
                </Text>
              </View>
              <View style={{ paddingTop: 5 }}>
                <Text style={{ fontSize: 12, fontWeight: 300 }}>
                  {messages && messages[messages.length - 1].text}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View>
              <Text style={{ fontSize: 10 }}>12:23 AM</Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 100,
                backgroundColor: "#4C5EFF",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>1</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
