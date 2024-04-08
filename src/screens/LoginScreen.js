import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgEng from "../svg/eng";
import SvgBack from "../svg/back";
import auth from "@react-native-firebase/auth";

import { fetchUserById } from "../store/user/fetchUser";
import { useDispatch, useSelector } from "react-redux";
import SvgUkr from "../svg/ukr";
import SvgPol from "../svg/pol";
import SvgInfo from "../svg/labelInfo";
import SvgCheckmarkGrey from "../svg/checkmarkGrey";
import Popup from "../components/popup/popup";
import { notAuthUserLogin } from "../store/user/userSlice";

export default function LoginScreen() {
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [switchButtonColor, setSwitchButtonColor] = useState(false);

  const [switchButton, setSwitchButton] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(true);
  const [confirm, setConfirm] = useState(null);

  const [rawInput, setRawInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [choiceCounrtyCode, setChoiceCountryCode] = useState({
    code: "+44",
  });
  const [isEditable, setIsEditable] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupError, setShowPopupError] = useState(false);
  const [showPopupErrorSendCode, setShowPopupErrorrSendCode] = useState(false);
  const [res, setRes] = useState(null);

  const { notAuthLogin, error, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (notAuthLogin) {
      setRes(notAuthLogin);
    }
  }, [notAuthLogin]);

  useEffect(() => {
    if (res) {
      dispatch(notAuthUserLogin(false));
      setRes(null);
      setShowPopup(true);
    }
  }, [res]);

  useEffect(() => {
    if (rawInput.length) {
      const digitsOnly = rawInput.replace(/\D/g, "");
      setNumber(choiceCounrtyCode.code + digitsOnly);
    }
  }, [rawInput]);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    if (code.length === 6) {
      setSwitchButtonColor(true);
    }
    if (code.length !== 6) {
      setSwitchButtonColor(false);
    }
  }, [code]);

  useEffect(() => {
    if (number.length > 12) {
      setSwitchButtonColor(true);
    }
    if (number.length === 0) {
      setSwitchButtonColor(false);
    }
  }, [number]);

  async function signInWithPhoneNumber() {
    if (number.length > 12) {
      setIsEditable((prev) => !prev);
      setSwitchButton(true);
      try {
        const confirmation = await auth().signInWithPhoneNumber(number);

        setNumber("");

        setConfirm(confirmation);
      } catch (error) {
        console.error(error);
        console.warn("Ошибка", "Не удалось отправить код");
        setShowPopupErrorrSendCode(true);
      }
    }
  }

  async function confirmCode() {
    if (code.length === 6) {
      if (!confirm) {
        console.error(
          "Ошибка",
          "Сначала необходимо отправить код подтверждения."
        );
        return;
      }
      try {
        const response = await confirm.confirm(code);
        if (response && response.user) {
          dispatch(fetchUserById());
        } else {
          console.warn("Невозможно подтвердить код.");
          setShowPopupError(true);
        }
      } catch (error) {
        console.error("Ошибка при подтверждении кода", error);
        setShowPopupError(true);
      }
    }
  }

  const selectedNumberCode = (code) => {
    setChoiceCountryCode((prev) => ({
      ...prev,
      code: code,
    }));
    setIsOpen(false);
  };

  useEffect(() => {
    const keyboardWillShow = () => setKeyboardVisible(false);
    const keyboardWillHide = () => setKeyboardVisible(true);

    const showSubscription = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      keyboardWillShow
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      keyboardWillHide
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={{ position: "absolute", top: "50%" }}>
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
            onPress={() => navigation.navigate("Auth")}
          >
            <SvgBack />
          </TouchableOpacity>
          <View>
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}
            >
              Login
            </Text>
          </View>
          <View style={{ width: 40 }}></View>
        </View>
      </View>
      {showPopup && (
        <TouchableOpacity
          style={styles.fullScreenOverlay}
          onPress={() => setShowPopup(false)}
        >
          <View style={{ flex: 1 }} activeOpacity={1}>
            <Popup title="User not found !" />
          </View>
        </TouchableOpacity>
      )}
      {showPopupError && (
        <TouchableOpacity
          style={styles.fullScreenOverlay}
          onPress={() => setShowPopupError(false)}
        >
          <View style={{ flex: 1 }} activeOpacity={1}>
            <Popup title="Code confirmation error!" />
          </View>
        </TouchableOpacity>
      )}
      {showPopupErrorSendCode && (
        <TouchableOpacity
          style={styles.fullScreenOverlay}
          onPress={() => setShowPopupErrorrSendCode(false)}
        >
          <View style={{ flex: 1 }} activeOpacity={1}>
            <Popup title="Failed to send code!" />
          </View>
        </TouchableOpacity>
      )}

      <View style={{ paddingTop: 20, width: "90%" }}>
        <View style={{ paddingBottom: 6 }}>
          <Text style={{ fontSize: 15, fontWeight: 500 }}>Phone number</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "30%" }}>
            <TouchableOpacity
              style={styles.choiceCountry}
              onPress={() => setIsOpen(!isOpen)}
            >
              <View>
                {choiceCounrtyCode.code === "+44" && <SvgEng />}
                {choiceCounrtyCode.code === "+48" && <SvgPol />}
                {choiceCounrtyCode.code === "+38" && <SvgUkr />}
              </View>
              <View>
                <Text>{choiceCounrtyCode.code}</Text>
              </View>
              <View>
                <Image
                  source={
                    isOpen
                      ? require("../../assets/images/up2.png")
                      : require("../../assets/images/down2.png")
                  }
                />
              </View>
            </TouchableOpacity>
          </View>
          {isOpen && (
            <View style={styles.dropdown}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  paddingVertical: 5,
                  alignItems: "center",
                }}
                onPress={() => selectedNumberCode("+44")}
              >
                <View>
                  <SvgEng />
                </View>
                <View style={{ paddingLeft: 10 }}>
                  <Text style={styles.dropdownText}>+44</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  paddingVertical: 5,
                  alignItems: "center",
                }}
                onPress={() => selectedNumberCode("+48")}
              >
                <View>
                  <SvgPol />
                </View>
                <View style={{ paddingLeft: 10 }}>
                  <Text style={styles.dropdownText}>+48</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  paddingVertical: 5,
                  alignItems: "center",
                }}
                onPress={() => selectedNumberCode("+38")}
              >
                <View>
                  <SvgUkr />
                </View>
                <View style={{ paddingLeft: 10 }}>
                  <Text style={styles.dropdownText}>+38</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          <View style={{ width: "65%" }}>
            <TextInput
              keyboardType="numeric"
              placeholder="XXX - XXX - XXXX"
              style={{
                borderWidth: 1,
                borderColor:
                  rawInput.length < 16 && rawInput.length > 0
                    ? "#DE6060"
                    : rawInput.length === 16
                    ? "#71C35D"
                    : "#D3D3D3",
                borderStyle: "solid",
                borderRadius: 40,
                height: 40,
                paddingLeft: 41,
                fontSize: 14,
              }}
              value={rawInput}
              maxLength={16}
              onChangeText={(text) => {
                let cleaned = ("" + text).replace(/\D/g, "");

                let match = cleaned.match(/^(\d{1,3})(\d{1,3})?(\d{1,4})?$/);

                let formattedNumber = match
                  ? `${match[1]}${match[2] ? " - " + match[2] : ""}${
                      match[3] ? " - " + match[3] : ""
                    }`
                  : "";

                setRawInput(formattedNumber);
              }}
            />
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: 500 }}>Enter the code</Text>
          <View style={{ paddingTop: 6, position: "relative" }}>
            <TextInput
              keyboardType="numeric"
              placeholder="XXXXXX"
              value={code}
              style={{
                borderWidth: 1,
                borderColor:
                  code.length < 6 && code.length > 0
                    ? "#DE6060"
                    : code !== ""
                    ? "#71C35D"
                    : "#D3D3D3",
                borderStyle: "solid",
                borderRadius: 40,
                height: 40,
                paddingLeft: 12,
                fontSize: 14,
              }}
              editable={isEditable}
              onChangeText={(text) => {
                const filteredText = text.replace(/[^\d]/g, "").substring(0, 6);
                setCode(filteredText);
              }}
            />
            <View style={{ position: "absolute", right: 10, top: 17 }}>
              {code.length < 6 && code.length > 0 ? (
                <SvgInfo />
              ) : (
                <SvgCheckmarkGrey color={code !== "" ? "#71C35D" : "#797979"} />
              )}
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ fontSize: 12, fontWeight: 300 }}>
            The code has been sent to your number, please review SMS.
          </Text>
        </View>
      </View>
      {keyboardVisible && (
        <View style={styles.blockEntry}>
          {switchButton && confirm !== null ? (
            <TouchableOpacity
              style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#4C5EFF",
                borderStyle: "solid",
                borderRadius: 40,
                width: "100%",
                backgroundColor: switchButtonColor ? "#4C5EFF" : "white",
              }}
              onPress={() => confirmCode()}
            >
              <Text style={{ color: switchButtonColor ? "white" : "black" }}>
                login
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#4C5EFF",
                borderStyle: "solid",
                borderRadius: 40,
                width: "100%",
                backgroundColor: switchButtonColor ? "#4C5EFF" : "white",
              }}
              onPress={() => signInWithPhoneNumber()}
            >
              <Text style={{ color: switchButtonColor ? "white" : "black" }}>
                Send code
              </Text>
            </TouchableOpacity>
          )}

          <View style={{ paddingTop: 21, alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: 500, color: "#5F5F5F" }}>
              Enter your account to begin.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  choiceCountry: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderRadius: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },

  blockEntry: {
    position: "absolute",
    bottom: 40,
    width: "80%",
  },

  dropdown: {
    position: "absolute",
    top: 45,
    left: 0,
    width: 80,
    height: 110,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    zIndex: 500,
    padding: 5,
    borderRadius: 16,
  },

  fullScreenOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
});
