import { View, Text, TextInput, StyleSheet } from "react-native";
import SvgInfo from "../../svg/labelInfo";
import SvgCheckmarkGrey from "../../svg/checkmarkGrey";

export const ConfirmNumber = ({ setEnterCode, enterCode }) => {
  return (
    <View style={{ width: "100%" }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>
          Confirm your phone number.
        </Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        <View>
          <View style={{ paddingBottom: 6 }}>
            <Text style={{ fontSize: 15, fontWeight: 500 }}>
              Enter the code
            </Text>
          </View>
          <View style={{ width: "100%", position: "relative" }}>
            <TextInput
              keyboardType="numeric"
              placeholder="XXXXXX"
              value={enterCode}
              style={{
                borderWidth: 1,
                borderColor:
                  enterCode.length < 6 && enterCode.length > 0
                    ? "#DE6060"
                    : enterCode !== ""
                    ? "#71C35D"
                    : "#D3D3D3",
                borderStyle: "solid",
                borderRadius: 40,
                height: 40,
                paddingLeft: 12,
                fontSize: 14,
              }}
              onChangeText={(text) => {
                const filteredText = text.replace(/[^\d]/g, "").substring(0, 6);
                setEnterCode(filteredText);
              }}
            />
            <View style={{ position: "absolute", right: 10, top: 11 }}>
              {enterCode.length < 6 && enterCode.length > 0 ? (
                <SvgInfo />
              ) : (
                <SvgCheckmarkGrey
                  color={enterCode !== "" ? "#71C35D" : "#797979"}
                />
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 12, fontWeight: 300 }}>
          The code has been sent to your number, please review SMS.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  writeConfirmCode: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderRadius: 40,
    height: 40,
    paddingLeft: 12,
    fontSize: 14,
  },
});
