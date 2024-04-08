import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
} from "react-native";
import { InProgress } from "../screensItem/order/inProgress/inProgress";
import { useNavigation } from "@react-navigation/native";
import { Completed } from "../screensItem/order/completed/completed";
import SvgAdd from "../svg/add";
import { getUserData } from "../store/orders/fetchOrders";

import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import {
  orderForEmployee,
  saveUserLocation,
} from "../store/location/userLocation";
import Geolocation from "@react-native-community/geolocation";

export const MainPage = () => {
  const [switchOrder, setSwitchOrder] = useState(false);

  const navigation = useNavigation();
  const { ordersData, loading, error } = useSelector(
    (state) => state.ordersData
  );
  const user = useSelector((state) => state.user.user);
  const employeeOrder = useSelector(
    (state) => state.orderForEmployee.employeeOrder
  );

  // console.log("employeeOrder", employeeOrder);

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      getData();
      if (user.userType === "employee") {
        getCurrentLocation();
        dispatch(orderForEmployee());
      }
      return () => {};
    }, [])
  );

  const getData = async () => {
    dispatch(getUserData());
  };

  const getCurrentLocation = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Location permission denied");
        return;
      }
    }

    Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("New Location:", latitude, longitude);
        // Здесь отправляем новое местоположение в Firebase
        dispatch(
          saveUserLocation({
            latitude,
            longitude,
            userData: user, // Убедитесь, что user содержит актуальные данные
          })
        );
      },
      (error) => {
        console.error("Location Error:", error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 5,
      } // Можете настроить параметры по вашим нуждам
    );

    // Возвращаем функцию для отписки, чтобы остановить отслеживание, когда это будет необходимо
    // return () => {
    //   Geolocation.clearWatch(watchID);
    // };
  };

  useEffect(() => {
    let isMounted = true; // Добавляем переменную для отслеживания монтирования

    const unsubscribeLocation = () => {
      if (user.userType === "employee" && isMounted) {
        getCurrentLocation().then(() => {
          // Очистка или другие действия
        });
      }
    };

    unsubscribeLocation();

    return () => {
      isMounted = false; // Устанавливаем в false при размонтировании
    };
  }, [user, dispatch]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 26,
        backgroundColor: "#F2F2F2",
        position: "relative",
      }}
    >
      <View style={{ width: "90%", paddingTop: 35 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "white",
            height: 40,
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: "white",
            paddingHorizontal: 2,
          }}
        >
          <TouchableOpacity
            style={{
              width: "48%",
              height: "90%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: switchOrder ? "white" : "#4C5EFF",
              borderRadius: 20,
            }}
            onPress={() => setSwitchOrder(false)}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: switchOrder ? "black" : "white",
              }}
            >
              In progress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "48%",
              height: "90%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: switchOrder ? "#4C5EFF" : "white",
              borderRadius: 20,
            }}
            onPress={() => setSwitchOrder(true)}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: switchOrder ? "white" : "black",
              }}
            >
              Completed
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%" }}>
          {loading ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "50%",
              }}
            >
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <View style={{ paddingTop: 16 }}>
              {ordersData.length > 0 ? (
                switchOrder ? (
                  <Completed ordersData={ordersData} />
                ) : (
                  <InProgress ordersData={ordersData} />
                )
              ) : employeeOrder.length ? (
                switchOrder ? (
                  <Completed ordersData={employeeOrder} />
                ) : (
                  <InProgress ordersData={employeeOrder} />
                )
              ) : (
                <View
                  style={{
                    justifyContent: "center",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <View style={{ width: "70%" }}>
                    <Text style={{ color: "#797979", textAlign: "center" }}>
                      You don't have any completed orders yet, would you like to
                      create one?
                    </Text>
                    {user.userType === "customer" && (
                      <View style={{ paddingTop: 29, paddingLeft: 63 }}>
                        <Image
                          source={require("../../assets/images/arrow.png")}
                        />
                      </View>
                    )}
                  </View>
                </View>
              )}
            </View>
          )}
        </View>
      </View>
      {user.userType === "customer" && (
        <View
          style={{ position: "absolute", bottom: 40, right: 20, zIndex: 5 }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 152,
              height: 51,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
            }}
            onPress={() => navigation.navigate("CreatingOrder")}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#4C5EFF",
                width: 150,
                borderRadius: 40,
                height: 47,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ color: "white", fontSize: 14, fontWeight: 500 }}>
                  New order
                </Text>
              </View>
              <View>
                <SvgAdd />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
