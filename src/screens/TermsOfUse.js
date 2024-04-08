import { View, Text, TouchableOpacity } from "react-native";
import SvgBack from "../svg/back";
import { useNavigation } from "@react-navigation/native";

export const TermsOfUse = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ width: "90%" }}>
        <View
          style={{
            paddingTop: 45,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 26,
          }}
        >
          <TouchableOpacity
            style={{ width: 40 }}
            onPress={() => navigation.navigate("Register")}
          >
            <SvgBack />
          </TouchableOpacity>
          <View>
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}
            >
              Terms of use
            </Text>
          </View>
          <View style={{ width: 40 }}></View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View>
            <Text>Terms of use</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
