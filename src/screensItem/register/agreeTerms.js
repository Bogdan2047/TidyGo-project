import { View, Text, Image, TouchableOpacity } from "react-native";
import SvgCheckMark from "../../svg/ckeckmark";
import { useNavigation } from "@react-navigation/native";

export const AgreeTerms = ({ setTermsAndConditions, registerType }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>
          There's one last step left!
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            paddingTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            setTermsAndConditions(true);
          }}
        >
          <View>
            <SvgCheckMark
              color={
                registerType.termsAndConditions === true
                  ? "#4C5EFF"
                  : "rgba(76, 94, 255, 0.4)"
              }
            />
          </View>
          <View style={{ paddingLeft: 12, width: "95%" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                color:
                  registerType.termsAndConditions === true
                    ? "black"
                    : "#5F5F5F",
              }}
            >
              By creating an account you agree to our terms and conditions.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate("TermsOfUse")}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 300,
              color: "#4C5EFF",
              textDecorationLine: "underline",
            }}
          >
            Terms of Use & Privacy Policy.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
