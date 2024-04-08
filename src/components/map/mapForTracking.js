import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Platform, Image, Text } from "react-native";
import { database } from "../../../firebaseConfig";
import { ref, onValue, off } from "firebase/database";
import SvgStar from "../../svg/star";

export const MapForTracking = ({ orderLocation, userLocation }) => {
  const [myLocation, setMyLocation] = useState(null);
  const [employeeLocation, setEmployeeLocation] = useState(null);
  // const dispatch = useDispatch();

  // const trackingEmployee = useSelector(
  //   (state) => state.employeeLocation.trackingEmployee
  // );

  useEffect(() => {
    if (orderLocation) {
      let location = {
        latitude: orderLocation.lat,
        longitude: orderLocation.lng,
        latitudeDelta: orderLocation.latitudeDelta,
        longitudeDelta: orderLocation.longitudeDelta,
      };
      setMyLocation(location);
    }
  }, [orderLocation]);

  useEffect(() => {
    if (!userLocation?.userId) return;

    const locationRef = ref(
      database,
      `employee/geolocations/${userLocation?.userId}`
    );
    console.log(
      `Setting up subscription for: employee/geolocations/${userLocation?.userId}`
    );

    const unsubscribe = onValue(
      locationRef,
      (snapshot) => {
        if (snapshot.exists()) {
          console.log(
            `Data received for ${userLocation?.userId}:`,
            snapshot.val()
          );
          let data = snapshot.val();
          setEmployeeLocation({
            latitude: data.latitude,
            longitude: data.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        } else {
          console.log(`No location data found for ${userLocation?.userId}.`);
        }
      },
      (error) => {
        console.error(error);
      }
    );

    return () => {
      console.log(
        `Unsubscribing from: employee/geolocations/${userLocation?.userId}`
      );
      off(locationRef, "value", unsubscribe);
    };
  }, [userLocation?.userId]);

  const customStyle = [
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      stylers: [
        {
          saturation: -70,
        },
        {
          lightness: 37,
        },
        {
          gamma: 1.15,
        },
      ],
    },
    {
      elementType: "labels",
      stylers: [
        {
          gamma: 0.26,
        },
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      stylers: [
        {
          lightness: 0,
        },
        {
          saturation: 0,
        },
        {
          hue: "#ffffff",
        },
        {
          gamma: 0,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          lightness: 50,
        },
        {
          saturation: 0,
        },
        {
          hue: "#ffffff",
        },
      ],
    },
    {
      featureType: "administrative.province",
      stylers: [
        {
          visibility: "on",
        },
        {
          lightness: -50,
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text",
      stylers: [
        {
          lightness: 20,
        },
      ],
    },
  ];

  function handleNewData(newData) {
    setObjectLocation({
      latitude: newData.latitude,
      longitude: newData.longitude,
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
        initialRegion={myLocation ? myLocation : undefined}
        customMapStyle={customStyle}
      >
        {myLocation && (
          <Marker coordinate={myLocation}>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 34,
                  height: 34,
                  backgroundColor: "rgba(76, 94, 255, 0.2)",
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    backgroundColor: "rgba(76, 94, 255, 0.4)",
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 14,
                      height: 14,
                      backgroundColor: "#4C5EFF",
                      borderRadius: 100,
                    }}
                  ></View>
                </View>
              </View>
            </View>
          </Marker>
        )}

        {employeeLocation && (
          <Marker coordinate={employeeLocation}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 80,
                height: 80,
                position: "relative",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                  height: 50,
                  backgroundColor: "white",
                  borderRadius: 8,
                }}
              >
                <Image
                  source={
                    userLocation?.userData.avatar !== ""
                      ? {
                          uri: userLocation?.userData.avatar,
                        }
                      : require("../../../assets/images/defaultAvatar.png")
                  }
                  style={{ width: 46, height: 46 }}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  height: 16,
                  width: 36,
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 4,
                  backgroundColor: "white",
                  flexDirection: "row",
                  borderRadius: 12,
                  position: "absolute",
                  bottom: 8,
                  zIndex: 10,
                }}
              >
                <View>
                  <SvgStar size="10" />
                </View>

                <View>
                  <Text style={{ fontSize: 10 }}>4,0</Text>
                </View>
              </View>
            </View>
          </Marker>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
