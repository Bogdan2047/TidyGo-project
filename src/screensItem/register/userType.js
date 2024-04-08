import { View, Text, TouchableOpacity, Image } from "react-native";
import SvgCheckMark from "../../svg/ckeckmark";

export const UserType = ({ registerType, setUserType }) => {
  const getdData = (data) => {
    setUserType(data);
  };

  return (
    <View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>
          I want to sign up as:
        </Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity
          onPress={() => {
            getdData("customer");
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <SvgCheckMark
                color={
                  registerType === "customer"
                    ? "#4C5EFF"
                    : "rgba(76, 94, 255, 0.4)"
                }
              />
            </View>
            <View style={{ paddingLeft: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: registerType === "customer" ? "black" : "#5F5F5F",
                }}
              >
                Customer
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={{
              paddingTop: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => {
              getdData("employee");
            }}
          >
            <View>
              <SvgCheckMark
                color={
                  registerType === "employee"
                    ? "#4C5EFF"
                    : "rgba(76, 94, 255, 0.4)"
                }
              />
            </View>
            <View style={{ paddingLeft: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: registerType === "employee" ? "black" : "#5F5F5F",
                }}
              >
                Employee
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
