import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { SelectEmployee } from "../screensItem/order/createOrder/selectEmployee";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SvgBack from "../svg/back";

import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../store/orders/createOrderSlice";
import {
  findUsersNearby,
  sendOrderInfoForEmployee,
} from "../store/location/userLocation";
import Geolocation from "@react-native-community/geolocation";
import SvgPeople from "../svg/people";

export const Employee = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const { employee, loading } = useSelector((state) => state.employee);
  const orderData = useSelector((state) => state.createOrders.orderData);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    if (selectedEmployee !== null) {
      const findEmployee = employee.find(
        (item) => item.userId === selectedEmployee
      );
      if (findEmployee) {
        dispatch(getEmployee(findEmployee));
      }
    }
  }, [selectedEmployee]);

  const onPaymentHandler = () => {
    if (selectedEmployee !== null && orderData !== null) {
      dispatch(
        sendOrderInfoForEmployee({
          employeeId: selectedEmployee,
          customerData: orderData,
        })
      );
      navigation.navigate("CheckOrder");
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(
          "position",
          position.coords.latitude,
          position.coords.longitude
        );
        dispatch(
          findUsersNearby({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            radiusInKm: 15,
          })
        );
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={{ flex: 1, position: "relative", alignItems: "center" }}>
      {loading && (
        <View style={{ position: "absolute", top: "50%", zIndex: 100 }}>
          <View
            style={{
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      )}
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
                onPress={() => navigation.navigate("CreatingOrder")}
              >
                <SvgBack />
              </TouchableOpacity>
              <View>
                <Text
                  style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}
                >
                  Creating an order
                </Text>
              </View>
              <View style={{ width: 40 }}></View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
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
                      <SvgPeople />
                    </View>
                    <View style={{ paddingLeft: 8 }}>
                      <Text style={{ fontSize: 18, fontWeight: 500 }}>
                        Select an employee
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          {employee !== null &&
            employee.map((item) => (
              <SelectEmployee
                key={item.userId}
                setSelectedEmployee={setSelectedEmployee}
                selectedEmployee={selectedEmployee}
                nearEmployee={item}
              />
            ))}
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 40, width: "90%" }}>
        <TouchableOpacity
          style={{
            height: 50,
            borderWidth: 1,
            borderColor: "rgba(76, 94, 255, 0.4)",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: selectedEmployee !== null ? "#4C5EFF" : "#EEF0FF",
            width: "100%",
          }}
          onPress={() => onPaymentHandler()}
        >
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: selectedEmployee !== null ? "white" : "black",
              }}
            >
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
