import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgPeople from "../../../svg/people";
import SvgSmallLocate from "../../../svg/smallLocate";
import SvgClock from "../../../svg/clock";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const TrackingEmployee = () => {
  const [clickOnButton, setClickOnButton] = useState(0);

  const navigation = useNavigation();

  const orderData = useSelector((state) => state.createOrders.orderData);

  useEffect(() => {
    if (clickOnButton === 1) {
      // navigation.navigate("Orders");
    }
    if (clickOnButton === 2) {
      navigation.navigate("ExtraChat");
    }
  }, [clickOnButton]);

  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ width: "90%" }}>
        <View
          style={{
            flexDirection: "row",

            paddingTop: 12,
          }}
        >
          <View style={{ width: 40 }}>
            <SvgPeople />
          </View>
          <View>
            <View>
              <Text
                style={{
                  color: "#5F5F5F",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                An employee
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, fontWeight: 500 }}>
                {orderData?.employee.userData.firstName}{" "}
                {orderData?.employee.userData.lastName}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",

            paddingTop: 12,
          }}
        >
          <View style={{ width: 40 }}>
            <SvgClock />
          </View>
          <View>
            <View>
              <Text
                style={{
                  color: "#5F5F5F",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Arrival time
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, fontWeight: 500 }}>9 minutes</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",

            paddingTop: 12,
          }}
        >
          <View style={{ width: 40 }}>
            <SvgSmallLocate height={25} width={25} />
          </View>
          <View>
            <View>
              <Text
                style={{
                  color: "#5F5F5F",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Address
              </Text>
            </View>
            <View style={{ width: "95%" }}>
              <Text style={{ fontSize: 14, fontWeight: 500 }}>
                {orderData.addressData.address}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 40,
            }}
          >
            <View style={{ width: "48%" }}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: clickOnButton === 1 ? "#4C5EFF" : "white",
                  borderColor: "#4C5EFF",
                  borderWidth: 1,
                  borderRadius: 20,
                  height: 45,
                }}
                onPress={() => {
                  setClickOnButton(1);
                }}
              >
                <View>
                  <Text
                    style={{
                      color: clickOnButton === 1 ? "white" : "black",
                    }}
                  >
                    Cancel order
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: "48%" }}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: clickOnButton === 2 ? "#4C5EFF" : "white",
                  borderColor: "#4C5EFF",
                  borderWidth: 1,
                  borderRadius: 20,
                  height: 45,
                }}
                onPress={() => {
                  setClickOnButton(2);
                }}
              >
                <View>
                  <Text
                    style={{
                      color: clickOnButton === 2 ? "white" : "black",
                    }}
                  >
                    Write a message
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
