import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import { fetchUserById } from "../store/user/fetchUser";
import { useDispatch } from "react-redux";

export const Congratulations = ({ setToken }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      getData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getData = async () => {
    dispatch(fetchUserById());
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", paddingTop: 100 }}>
        <View>
          <Image source={require("../../assets/images/congratulations.png")} />
        </View>
        <View style={{ paddingTop: 53 }}>
          <Text style={{ fontSize: 28, fontWeight: 500 }}>
            Congratulations!
          </Text>
        </View>
        <View style={{ paddingTop: 12, width: "70%" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#5F5F5F",
              textAlign: "center",
            }}
          >
            Your application is under review, wait to hear back from a manager!
          </Text>
        </View>
      </View>
    </View>
  );
};
