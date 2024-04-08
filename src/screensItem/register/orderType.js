import { View, Text, TouchableOpacity, Image } from "react-native";
import SvgCheckMark from "../../svg/ckeckmark";

export const OrderType = ({ registerType, setOrderType }) => {
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
            setOrderType("individual");
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <SvgCheckMark
                color={
                  registerType === "individual"
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
                  color: registerType === "individual" ? "black" : "#5F5F5F",
                }}
              >
                Individual
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
              setOrderType("corporate");
            }}
          >
            <View>
              <SvgCheckMark
                color={
                  registerType === "corporate"
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
                  color: registerType === "corporate" ? "black" : "#5F5F5F",
                }}
              >
                Corporate
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
