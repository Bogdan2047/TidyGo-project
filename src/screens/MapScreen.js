import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { Map } from "../components/map/map";
import { useEffect, useState } from "react";
import { getAddress } from "../store/user/userSlice";
import { useDispatch } from "react-redux";
import SvgCheckPoint from "../svg/checkpoint";
import SvgBack from "../svg/back";
import { useNavigation } from "@react-navigation/native";

export const MapScreen = () => {
  const [addressBuilding, setAddressBuilding] = useState(null);
  const [myGeopsition, setMyGeopositios] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const confirmAddress = () => {
    if (addressBuilding !== null) {
      dispatch(getAddress(addressBuilding));
      navigation.navigate("CreatingOrder");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", position: "relative" }}>
      <View
        style={{
          paddingTop: 45,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 26,
          position: "absolute",
          width: "90%",
          top: 20,
          zIndex: 500,
        }}
      >
        <TouchableOpacity
          style={{ width: 40 }}
          onPress={() => navigation.navigate("CreatingOrder")}
        >
          <SvgBack />
        </TouchableOpacity>
        <View>
          <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}>
            Provide your address
          </Text>
        </View>
        <View style={{ width: 40 }}></View>
      </View>
      <View style={{ width: "100%" }}>
        <View style={{ width: "100%", height: 650 }}>
          <Map
            setAddressBuilding={setAddressBuilding}
            myGeopsition={myGeopsition}
            setMyGeopositios={setMyGeopositios}
          />
        </View>
        <View style={{ alignItems: "center", paddingTop: 10 }}>
          <View style={{ width: "90%" }}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "85%" }}>
                  <TextInput
                    placeholder="address"
                    value={
                      addressBuilding !== null ? addressBuilding.address : ""
                    }
                    style={{
                      backgroundColor: "#EEF0FF",
                      height: 40,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: "rgba(76, 94, 255, 0.4)",
                      paddingLeft: 12,
                      paddingRight: 10,
                    }}
                  />
                </View>
                <TouchableOpacity
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
                  onPress={() => setMyGeopositios(true)}
                >
                  <SvgCheckPoint width={24} height={24} color="#4C5EFF" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingTop: 10, paddingBottom: 10 }}>
              <TouchableOpacity
                style={{
                  height: 50,
                  borderWidth: 1,
                  borderColor: "rgba(76, 94, 255, 0.4)",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    addressBuilding !== "" ? "#4C5EFF" : "#EEF0FF",
                }}
                onPress={() => confirmAddress()}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: addressBuilding !== "" ? "white" : "black",
                    }}
                  >
                    Confirm
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
