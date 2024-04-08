import { Text, TextInput, View, Image } from "react-native";
import { People } from "../screensItem/chats/people";

import SvgSearch from "../svg/search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserChats, loadMessages } from "../store/chats/fetchChats";

export const Chats = () => {
  const [chatIds, setChatIds] = useState([]);

  const chats = useSelector((state) => state.chats.chats);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChats = async () => {
      const ids = await getUserChats();
      setChatIds(ids);
    };

    fetchChats();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 35,
        backgroundColor: "#F2F2F2",
      }}
    >
      <View style={{ width: "90%", paddingTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "white",
            height: 40,
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: "white",
            paddingHorizontal: 2,
          }}
        >
          <View style={{ paddingLeft: 12, width: "10%" }}>
            <SvgSearch />
          </View>
          <View style={{ width: "85%" }}>
            <TextInput placeholder="Search" />
          </View>
        </View>
        {chatIds &&
          chatIds.map((item, i) => (
            <View style={{ paddingTop: 20 }} key={item.timestamp}>
              <People item={item} key={item.chatId} />
            </View>
          ))}
        {/* <View style={{ paddingTop: 20 }}>
          <People />
        </View> */}
      </View>
    </View>
  );
};
