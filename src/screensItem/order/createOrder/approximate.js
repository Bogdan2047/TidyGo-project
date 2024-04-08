import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import SvgAproximate from "../../../svg/approximate";
import { useEffect, useState } from "react";

export const Approximate = ({ setCleanArea }) => {
  const [m2, setm2] = useState(0);

  useEffect(() => {
    setCleanArea(m2);
  }, [m2]);
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
                <SvgAproximate />
              </View>
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  Approximate area to be cleaned
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
            paddingVertical: 12,
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
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: "rgba(76, 94, 255, 0.4)",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#EEF0FF",
                }}
              >
                <Text>м²</Text>
              </View>
              <View style={{ width: "85%" }}>
                <TextInput
                  keyboardType="numeric"
                  placeholder="0"
                  value={m2}
                  style={{
                    backgroundColor: "#EEF0FF",
                    height: 40,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "rgba(76, 94, 255, 0.4)",
                    paddingLeft: 12,
                  }}
                  onChangeText={(text) => {
                    setm2(text);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
