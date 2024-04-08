import { View, Text, TextInput } from "react-native";
import SvgDescription from "../../../svg/description";
import { useState, useEffect } from "react";

export const DescriptionOrder = ({ setDescriptionText }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setDescriptionText(text);
  }, [text]);
  return (
    <View style={{ paddingTop: 24 }}>
      <View>
        <View
          style={{
            height: 58,
            borderWidth: 1,
            borderColor: "rgba(76, 94, 255, 0.4)",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <SvgDescription />
              </View>
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  Order description
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingTop: 8 }}>
        <View
          style={{
            minHeight: 58,
            borderWidth: 1,
            borderColor: "rgba(76, 94, 255, 0.4)",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 12,
          }}
        >
          <View style={{ width: "100%" }}>
            <TextInput
              placeholder="Enter description"
              value={text}
              multiline={true}
              style={{
                backgroundColor: "#EEF0FF",
                height: 90,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: "rgba(76, 94, 255, 0.4)",
                paddingLeft: 12,
                paddingTop: 10,
                textAlignVertical: "top",
              }}
              onChangeText={(text) => {
                setText(text);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
