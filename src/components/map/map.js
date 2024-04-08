import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
  Image,
} from "react-native";
import { GOOGLE_MAPS_API_KEY } from "../../../config";
import Geolocation from "@react-native-community/geolocation";
import SvgPoint from "../../svg/poin";

export const Map = (props) => {
  const { setAddressBuilding, myGeopsition, setMyGeopositios } = props;
  const [markerCoords, setMarkerCoords] = useState();
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);

  // const onRegionChange = (region) => {
  //     console.log({ region })
  //   }

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setMarkerCoords(newCoords);
        mapRef.current?.animateToRegion(newCoords, 350);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    if (myGeopsition) {
      getCurrentLocation();
      setMyGeopositios(false);
    }
  }, [myGeopsition]);

  useEffect(() => {
    if (markerCoords) {
      fetchAddress(markerCoords.latitude, markerCoords.longitude);
    }
  }, [markerCoords]);

  const fetchAddress = async (lat, lng) => {
    const address = await getAdressFromCoords(lat, lng);
    if (address !== null) {
      console.log("address", address);
      setAddressBuilding(address);
    }
  };

  const getAdressFromCoords = async (lat, lng) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      if (json.results.length > 0) {
        const addressComponents = json.results[0].address_components;
        let address = "";
        let postalCode = "";
        for (let component of addressComponents) {
          if (component.types.includes("postal_code")) {
            postalCode = component.long_name;
          } else if (!component.types.includes("country")) {
            address += component.long_name + ", ";
          }
        }
        address = address.slice(0, -2);

        return {
          address,
          postalCode,

          location: {
            lat: json.results[0].geometry.location.lat,
            lng: json.results[0].geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        };
      }
      return { address: null, postalCode: null, location: null };
    } catch (error) {
      console.error(error);
      return { address: null, postalCode: null, location: null };
    }
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === "android") {
        hasPermission =
          (await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          )) === PermissionsAndroid.RESULTS.GRANTED;
      }
      setLoading(true);

      Geolocation.getCurrentPosition(
        (position) => {
          setMarkerCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
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
        markerCoords && (
          <MapView
            ref={mapRef}
            style={styles.map}
            provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
            initialRegion={markerCoords}
            showsUserLocation={true}
            customMapStyle={customStyle}
            onPress={(e) =>
              setMarkerCoords({
                ...markerCoords,
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              })
            }
          >
            <Marker coordinate={markerCoords}>
              <SvgPoint />
            </Marker>
          </MapView>
        )
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
  },
});
