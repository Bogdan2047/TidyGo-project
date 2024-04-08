import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from "react-native";
import { useState } from "react";
import { SelectPayment } from "../screensItem/order/createOrder/selectPayment";
import { useNavigation } from "@react-navigation/native";
import SvgBack from "../svg/back";

import { useDispatch, useSelector } from "react-redux";

import { saveUserData } from "../store/orders/fetchOrders";

export const CheckOrder = () => {
  const [orderPaid, setOrderPaid] = useState(0);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const orderData = useSelector((state) => state.createOrders.orderData);

  const sendOrederData = () => {
    if (orderData.payment === true && orderPaid > 0) {
      getData();
      navigation.navigate("TrackingOnMap");
    }
  };

  const getData = async () => {
    dispatch(saveUserData({ orderData }));
  };

  const backHandler = () => {
    navigation.navigate("Employee");
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ width: "100%" }}>
        <View style={{ alignItems: "center" }}>
          <View style={{ width: "90%" }}>
            <View
              style={{
                paddingTop: 45,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 26,
              }}
            >
              <TouchableOpacity
                style={{ width: 40 }}
                onPress={() => backHandler()}
              >
                <SvgBack />
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  Creating an order
                </Text>
              </View>
              <View style={{ width: 40 }}></View>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={{ width: "100%" }}>
        <View>
          <SelectPayment setOrderPaid={setOrderPaid} orderPaid={orderPaid} />
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingTop: 26, paddingBottom: 10, width: "90%" }}>
            <TouchableOpacity
              style={{
                height: 50,
                borderWidth: 1,
                borderColor: "rgba(76, 94, 255, 0.4)",
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: orderPaid > 0 ? "#4C5EFF" : "#EEF0FF",
                width: "100%",
              }}
              onPress={() => sendOrederData()}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: orderPaid > 0 ? "white" : "black",
                  }}
                >
                  Continue
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
