import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { TrackingEmployee } from "../screensItem/order/createOrder/trackingEmployee";
import { useNavigation } from "@react-navigation/native";
import SvgBack from "../svg/back";
import { MapForTracking } from "../components/map/mapForTracking";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";

export const TrackingOnMap = () => {
  const orderData = useSelector((state) => state.createOrders.orderData);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ height: 600, width: "100%" }}>
        {orderData && (
          <MapForTracking
            orderLocation={orderData.addressData.location}
            userLocation={orderData.employee}
          />
        )}
      </View>
      <LinearGradient
        colors={[
          "rgba(255,255,255,0)", // Полностью прозрачный
          "rgba(255,255,255,0.8)", // Почти непрозрачный
          "rgba(255,255,255,0.9)", // Непрозрачный
        ]}
        style={styles.gradient}
      />
      <View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
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
                onPress={() => navigation.navigate("Orders")}
              >
                <SvgBack />
              </TouchableOpacity>
              <View>
                <Text
                  style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}
                >
                  Order fulfilment...
                </Text>
              </View>
              <View style={{ width: 40 }}></View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 40, width: "100%" }}>
        <TrackingEmployee />
        {/* <RateOrder /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
  },
  backgroundImage: {
    flex: 1,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "50%",
  },
});
