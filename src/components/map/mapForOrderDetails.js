import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from "react-native";

import Geolocation from "@react-native-community/geolocation";
import SvgWhitePoint from "../../svg/whitePoint";

export const MapForOrderDetails = ({ orderLocation }) => {
  const [myLocation, setMyLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);

  useEffect(() => {
    if (orderLocation) {
      let order = {
        latitude: orderLocation.lat,
        longitude: orderLocation.lng,
        latitudeDelta: orderLocation.latitudeDelta,
        longitudeDelta: orderLocation.longitudeDelta,
      };
      setUserLocation(order);
    }
  }, [orderLocation]);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Location permission denied");
          return;
        }
      }
      setLoading(true);
      Geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          };
          setMyLocation(location);

          setLoading(false);
        },
        (error) => {
          console.log(error);
          setLoading(false);
        },
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
      );
    };

    requestLocationPermission();
  }, []);

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
      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loadingIndicator}
          />
        </View>
      ) : (
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
          initialRegion={myLocation ? myLocation : undefined}
          showsUserLocation={true}
          customMapStyle={customStyle}
        >
          {userLocation !== null && (
            <Marker coordinate={userLocation}>
              <SvgWhitePoint />
            </Marker>
          )}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    borderRadius: 12,
  },
});
