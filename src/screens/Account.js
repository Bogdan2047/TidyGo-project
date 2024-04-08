import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgProfile from "../svg/profile";
import SvgLang from "../svg/lang";
import SvgTemp from "../svg/temp";
import SvgPrivacy from "../svg/privacy";
import SvgLeft from "../svg/left";

export const Account = ({ user }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ width: "90%", paddingTop: 35 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <View>
            <Image
              source={
                user.avatar !== ""
                  ? {
                      uri: user.avatar,
                    }
                  : require("../../assets/images/defaultAvatar.png")
              }
              style={{ width: 70, height: 70, borderRadius: 100 }}
            />
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>
              {user.firstName} {user.lastName}
            </Text>
          </View>
        </View>
        <View>
          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 60,
                borderRadius: 16,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 12,
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("MyInfo")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <SvgProfile />
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    My information
                  </Text>
                </View>
              </View>
              <View>
                <SvgLeft />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 60,
                borderRadius: 16,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 12,
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Language")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <SvgLang />
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    Language
                  </Text>
                </View>
              </View>
              <View>
                <SvgLeft />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 20 }}>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 60,
                borderRadius: 16,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 12,
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("SupportCenter")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <SvgProfile />
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    Support Center
                  </Text>
                </View>
              </View>
              <View>
                <SvgLeft />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View
              style={{
                width: "100%",
                height: 60,
                borderRadius: 16,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 12,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <SvgTemp />
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    Terms of Use
                  </Text>
                </View>
              </View>
              <View>
                <SvgLeft />
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View
              style={{
                width: "100%",
                height: 60,
                borderRadius: 16,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 12,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <SvgPrivacy />
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    Privacy Policy
                  </Text>
                </View>
              </View>
              <View>
                <SvgLeft />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
