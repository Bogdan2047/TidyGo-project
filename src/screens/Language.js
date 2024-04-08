import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import SvgBack from "../svg/back";
import SvgEng from "../svg/eng";
import SvgPol from "../svg/pol";
import SvgUkr from "../svg/ukr";
import SvgCheckMark from "../svg/ckeckmark";

export const Language = () => {
  const [choiceLang, setChoiceLang] = useState(0);
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
              <Text style={{ fontSize: 24, fontWeight: 500 }}>Language</Text>
            </View>
          </View>
          <View style={{ width: 40 }}></View>
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
              onPress={() => setChoiceLang(1)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <SvgEng />
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>English</Text>
                </View>
              </View>
              <View>
                <SvgCheckMark
                  color={
                    choiceLang === 1 ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"
                  }
                />
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
              onPress={() => setChoiceLang(2)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <SvgPol />
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>Polish</Text>
                </View>
              </View>
              <View>
                <SvgCheckMark
                  color={
                    choiceLang === 2 ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
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
            onPress={() => setChoiceLang(3)}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <SvgUkr />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>Ukrainian</Text>
              </View>
            </View>
            <View>
              <SvgCheckMark
                color={choiceLang === 3 ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
