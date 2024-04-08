import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgBack from "../svg/back";

export const SupportCenter = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ width: "90%" }}>
        <View
          style={{
            alignItems: "center",
            paddingTop: 45,
            height: 80,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{ width: 40 }}
            onPress={() => navigation.navigate("Account")}
          >
            <SvgBack />
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <View>
              <Text style={{ fontSize: 24, fontWeight: 500 }}>
                Support Center
              </Text>
            </View>
          </View>
          <View style={{ width: 40 }}></View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <View>
            <Text style={{ color: "#5F5F5F", fontSize: 14, fontWeight: 500 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ color: "#5F5F5F", fontSize: 14, fontWeight: 500 }}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ color: "#5F5F5F", fontSize: 14, fontWeight: 500 }}>
              +380 33 333 3333
            </Text>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={{ color: "#5F5F5F", fontSize: 14, fontWeight: 500 }}>
              Email@email.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
