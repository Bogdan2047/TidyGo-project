import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import ClientIds from "../config/ClientIds";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";

import { useDispatch } from "react-redux";
import { fetchUserById } from "../store/user/fetchUser";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { notAuthUserGoogle } from "../store/user/userSlice";

export default function AuthScreen() {
  const [errors, setError] = useState(null);
  const { notAuthGoogle, error, loading } = useSelector((state) => state.user);

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("userGoogleData");
      await AsyncStorage.removeItem("googleUid");
      console.log("Google user data and UID successfully removed");
    } catch (error) {
      console.error("Error removing Google user data and UID", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      removeData();
      return () => {};
    }, [])
  );

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const signIn = async () => {
    await GoogleSignin.configure(ClientIds);
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const userCredential = await auth().signInWithCredential(
        googleCredential
      );

      const googleUserId = userCredential.user.uid || null;

      dispatch(fetchUserById({ googleUserId: googleUserId }));

      storeData(userCredential.user);

      setError(null);
      await GoogleSignin.signOut();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (notAuthGoogle) {
      setError(notAuthGoogle);
    }
  }, [notAuthGoogle]);

  useEffect(() => {
    if (errors !== null) {
      setError(null);
      dispatch(notAuthUserGoogle(false));
      navigation.navigate("Register");
    }
  }, [errors]);

  const storeData = async (value) => {
    const uid = value.uid;
    try {
      await AsyncStorage.setItem("googleUid", uid);
      await AsyncStorage.setItem("userGoogleData", JSON.stringify(value));

      console.log("googleUid added to AsyncStorage successfully!");
    } catch (e) {
      console.error("Error adding googleUid", e);
    }
  };

  return (
    <View style={styles.container}>
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
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Image source={require("../../assets/images/app_clear.png")}></Image>
      </View>
      <View style={styles.LoginScreenBlockOneText}>
        <Text style={{ fontSize: 28, fontWeight: 500 }}>
          Welcome to the TidyGo!
        </Text>
        <View style={{ width: "80%", paddingTop: 12 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              textAlign: "center",
              color: "#5F5F5F",
            }}
          >
            The app is a personal assistant in creating cleanliness and comfort!
          </Text>
        </View>
      </View>
      <View style={{ width: "100%", alignItems: "center", paddingTop: 40 }}>
        <View style={{ width: "80%" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#4C5EFF",

              height: 50,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: 500 }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", paddingTop: 20 }}>
          <TouchableOpacity
            style={styles.btnCreateAccount}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ fontSize: 16, fontWeight: 500 }}>
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingTop: 40 }}>
        <Text style={{ fontSize: 14, color: "#5F5F5F" }}>or continue with</Text>
      </View>
      <View style={{ paddingTop: 24 }}>
        <View style={styles.socialBar}>
          <TouchableOpacity style={styles.socialIcon} onPress={() => signIn()}>
            <Image
              source={require("../../assets/images/image_google.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  appClearImg: {
    height: 100,
    width: 100,
  },
  LoginScreenBlockOneText: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnCreateAccount: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4C5EFF",
    borderStyle: "solid",
    borderRadius: 40,
  },
  socialBar: {
    height: 40,
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center",
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginLeft: 15,
    marginRight: 15,
  },
  socialIconImage: {
    width: 40,
    height: 40,
  },
});
