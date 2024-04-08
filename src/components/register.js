import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { UserType } from "../screensItem/register/userType";
import { OrderType } from "../screensItem/register/orderType";
import { UserData } from "../screensItem/register/userData";
import { CompanyInfo } from "../screensItem/register/companyInfo";
import { ApartmentAddress } from "../screensItem/register/apartmentAddress";
import { ConfirmNumber } from "../screensItem/register/confirmNumber";
import { UploadAvatar } from "../screensItem/register/uploadAvatar";
import { AgreeTerms } from "../screensItem/register/agreeTerms";
import { useNavigation } from "@react-navigation/native";
import SvgBack from "../svg/back";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Popup from "./popup/popup";

export default function Registration() {
  const [choiceType, setChoiceType] = useState(0);
  const [changeColorButton, setChangeButtonColor] = useState(false);
  const [userType, setUserType] = useState("");
  const [orderType, setOrderType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyNumber, setCompanyNumber] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [apartment, setApartment] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [enterCode, setEnterCode] = useState("");
  const [avatar, setAvatar] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [googleUID, setGoogleUID] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [isValid, setIsValid] = useState(null);
  const [showPopupErrorSendCode, setShowPopupErrorrSendCode] = useState(false);
  const [showPopupErrorConfirmCode, setShowPopupErrorrConfirmCode] =
    useState(false);

  const [registerType, setRegisterType] = useState({
    userType: "",
    orderType: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    companyName: "",
    companyNumber: "",
    companyWebsite: "",
    apartment: "",
    buildingNumber: "",
    street: "",
    city: "",
    postalCode: "",
    avatar: "",
    termsAndConditions: false,
  });

  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const uid = await AsyncStorage.getItem("googleUid");
        const userGoogleDataString = await AsyncStorage.getItem(
          "userGoogleData"
        );

        const userGoogleData = userGoogleDataString
          ? JSON.parse(userGoogleDataString)
          : null;

        if (uid) {
          setGoogleUID(uid);
          if (token) {
            await removeData("userToken");
          }
        } else if (token) {
          await removeData("googleUid");
          await removeData("userGoogleData");
        }
        if (userGoogleData) {
          const displayName = userGoogleData.displayName;
          const [firstName, lastName] = displayName.split(" ");
          setEmail(userGoogleData.email);
          setFirstName(firstName);
          setLastName(lastName);
          setAvatar(userGoogleData.photoURL);
        }
      } catch (e) {
        console.error("Ошибка при получении данных из AsyncStorage", e);
      }
    };

    getData();
  }, []);

  const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Data successfully removed for key:", key);
    } catch (error) {
      console.error("Error removing data for key", key, error);
    }
  };

  const addUserToFirestore = async () => {
    const user = auth().currentUser;
    let uid = user.uid;

    let dataToSave;

    if (registerType.userType === "employee") {
      dataToSave = {
        userType: registerType.userType,
        firstName: registerType.firstName,
        lastName: registerType.lastName,
        email: registerType.email,
        mobile: registerType.mobile,
        avatar: registerType.avatar,
        termsAndConditions: registerType.termsAndConditions,
      };
    } else {
      dataToSave = registerType;
    }

    try {
      if (googleUID !== null) {
        await firestore()
          .collection("users")
          .doc(googleUID)
          .set(dataToSave, { merge: true });

        await removeData("googleUid");
        await removeData("userToken");
        await removeData("userGoogleData");
        setGoogleUID(null);
      } else {
        await firestore()
          .collection("users")
          .doc(uid)
          .set(dataToSave, { merge: true });

        await removeData("googleUid");
        await removeData("userToken");
        await removeData("userGoogleData");
        setGoogleUID(null);
      }

      console.log("User added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding user to Firestore: ", error);
    }
  };

  async function signInWithPhoneNumber(number) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(number);
      setConfirm(confirmation);
    } catch (error) {
      setShowPopupErrorrSendCode(true);

      console.error("Error during phone number sign-in", error);
    }
  }

  async function confirmCode() {
    if (!confirm) {
      console.error("Error", "Confirmation instance is not available.");
      return;
    }
    try {
      const response = await confirm.confirm(enterCode);
      if (response && response.user) {
        console.log("User logged in to Firestore successfully!");
        setChoiceType(choiceType + 1);
        setChangeButtonColor(true);
      }
    } catch (error) {
      setShowPopupErrorrConfirmCode(true);
      console.error("Error confirming the code", error);
    }
  }

  const NextPage = () => {
    if (choiceType === 0 && userType !== "") {
      if (userType === "employee") {
        setChoiceType(choiceType + 2);
      } else {
        setChoiceType(choiceType + 1);
      }
      setChangeButtonColor(false);
    }
    if (choiceType === 1 && orderType !== "") {
      setChoiceType(choiceType + 1);
      setChangeButtonColor(false);
      setOrderType("");
    }

    if (
      firstName.length > 1 &&
      lastName.length > 1 &&
      mobile.length === 13 &&
      email.length > 8 &&
      isValid
    ) {
      if (confirm === null) signInWithPhoneNumber(mobile);

      if (confirm !== null) {
        if (userType === "employee") {
          setChoiceType(choiceType + 3);
        } else {
          if (registerType.orderType === "individual") {
            setChoiceType(choiceType + 2);
          }
          if (registerType.orderType === "corporate") {
            setChoiceType(choiceType + 1);
          }
        }
        setChangeButtonColor(false);
        setFirstName("");
        setLastName("");
        setMobile("");
        setEmail("");
      }
    }

    if (
      choiceType === 3 &&
      companyName.length > 1 &&
      companyNumber.length === 8 &&
      companyWebsite.length > 8
    ) {
      setChoiceType(choiceType + 1);
      setChangeButtonColor(false);
      setCompanyName("");
      setCompanyNumber("");
      setCompanyWebsite("");
    }
    if (
      choiceType === 4 &&
      apartment.length > 1 &&
      buildingNumber.length > 1 &&
      street.length > 4 &&
      city.length > 2 &&
      postalCode.length > 4
    ) {
      setChoiceType(choiceType + 1);
      setChangeButtonColor(false);
      setApartment("");
      setBuildingNumber("");
      setStreet("");
      setCity("");
      setPostalCode("");
    }
    if (choiceType === 5 && enterCode.length === 6) {
      confirmCode();
    }
    if (choiceType === 6 && avatar !== "") {
      setChangeButtonColor(false);

      setChoiceType(choiceType + 1);
      setAvatar("");
    }
    if (choiceType === 6 && avatar === "") {
      setChoiceType(choiceType + 1);
      setChangeButtonColor(false);
    }
    if (choiceType === 7 && termsAndConditions === true) {
      navigation.navigate("Congrat");
      addUserToFirestore();
    }
  };

  useEffect(() => {
    if (userType !== "") {
      if (userType === "customer") {
        setRegisterType({ ...registerType, userType: "customer" });
        setChangeButtonColor(true);
      }
      if (userType === "employee") {
        setRegisterType({ ...registerType, userType: "employee" });
        setChangeButtonColor(true);
      }
    }
  }, [userType]);

  useEffect(() => {
    if (orderType !== "") {
      if (orderType === "individual") {
        setRegisterType({ ...registerType, orderType: "individual" });
        setChangeButtonColor(true);
      }
      if (orderType === "corporate") {
        setRegisterType({ ...registerType, orderType: "corporate" });
        setChangeButtonColor(true);
      }
    }
  }, [orderType]);

  useEffect(() => {
    if (
      firstName.length > 1 &&
      lastName.length > 1 &&
      mobile.length === 13 &&
      email.length > 8 &&
      isValid
    ) {
      setRegisterType({
        ...registerType,
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
      });
      setChangeButtonColor(true);
    }
    if (mobile.length < 13) {
      setChangeButtonColor(false);
    }
    if (firstName.length < 2) {
      setChangeButtonColor(false);
    }
    if (lastName.length < 2) {
      setChangeButtonColor(false);
    }
    if (email.length < 9) {
      setChangeButtonColor(false);
    }
    if (email.length === 0) {
      setChangeButtonColor(false);

      setIsValid(null);
    }
  }, [firstName, lastName, mobile, email]);

  useEffect(() => {
    if (
      companyName.length > 1 &&
      companyNumber.length === 8 &&
      companyWebsite.length > 8
    ) {
      setChangeButtonColor(true);

      setRegisterType({
        ...registerType,
        companyName: companyName,
        companyNumber: companyNumber,
        companyWebsite: companyWebsite,
      });
    }
    if (companyWebsite.length < 9) {
      setChangeButtonColor(false);
    }
    if (companyName.length < 2) {
      setChangeButtonColor(false);
    }
    if (companyNumber.length !== 8) {
      setChangeButtonColor(false);
    }
  }, [companyName, companyNumber, companyWebsite]);

  useEffect(() => {
    if (
      apartment.length > 1 &&
      buildingNumber.length > 1 &&
      street.length > 4 &&
      city.length > 2 &&
      postalCode.length > 4
    ) {
      setChangeButtonColor(true);
      setRegisterType({
        ...registerType,
        apartment: apartment,
        buildingNumber: buildingNumber,
        street: street,
        city: city,
        postalCode: postalCode,
      });
    }
    if (apartment.length < 1) {
      setChangeButtonColor(false);
    }
    if (buildingNumber.length < 1) {
      setChangeButtonColor(false);
    }
    if (street.length < 4) {
      setChangeButtonColor(false);
    }
    if (city.length < 2) {
      setChangeButtonColor(false);
    }
    if (postalCode.length < 5) {
      setChangeButtonColor(false);
    }
  }, [apartment, buildingNumber, street, city, postalCode]);

  useEffect(() => {
    if (enterCode.length === 6) {
      setChangeButtonColor(true);
    }
    if (enterCode.length !== 6) {
      console.log("setChangeButtonColor called with false");
      setChangeButtonColor(false);
    }
  }, [enterCode]);

  useEffect(() => {
    if (avatar !== "") {
      setRegisterType({
        ...registerType,
        avatar: avatar,
      });
    }
  }, [avatar]);

  useEffect(() => {
    if (termsAndConditions === true) {
      setChangeButtonColor(true);
      setRegisterType({
        ...registerType,
        termsAndConditions: termsAndConditions,
      });
    }
  }, [termsAndConditions]);

  useEffect(() => {
    const keyboardWillShow = () => setKeyboardVisible(true);
    const keyboardWillHide = () => setKeyboardVisible(false);

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

  const backPage = () => {
    if (choiceType > 0) setChoiceType(choiceType - 1);
    if (choiceType === 0) {
      navigation.navigate("Auth");
    }
    if (
      registerType.userType === "customer" &&
      choiceType === 4 &&
      registerType.orderType === "individual"
    ) {
      setChoiceType(choiceType - 2);
    }
    if (registerType.userType === "employee" && choiceType === 5) {
      setChoiceType(choiceType - 3);
    }
    if (registerType.userType === "employee" && choiceType === 2) {
      setChoiceType(choiceType - 2);
    }
    if (registerType.userType === "employee" && choiceType === 6) {
      setChoiceType(choiceType - 4);
    }
    if (registerType.userType === "customer" && choiceType === 6) {
      setChoiceType(choiceType - 2);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", position: "relative" }}>
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
      {showPopupErrorConfirmCode && (
        <TouchableOpacity
          style={styles.fullScreenOverlay}
          onPress={() => setShowPopupErrorrConfirmCode(false)}
        >
          <View style={{ flex: 1 }} activeOpacity={1}>
            <Popup title="Failed to confirm code!" />
          </View>
        </TouchableOpacity>
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
          <TouchableOpacity style={{ width: 40 }} onPress={() => backPage()}>
            <SvgBack />
          </TouchableOpacity>
          <View>
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}
            >
              Creating an account
            </Text>
          </View>
          <View style={{ width: 40 }}></View>
        </View>
        <View style={{ paddingTop: 20 }}>
          {choiceType === 0 ? (
            <UserType
              registerType={registerType.userType}
              setUserType={setUserType}
            />
          ) : choiceType === 1 ? (
            <OrderType
              registerType={registerType.orderType}
              setOrderType={setOrderType}
            />
          ) : choiceType === 2 ? (
            <UserData
              registerType={registerType}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setMobile={setMobile}
              setEmail={setEmail}
              email={email}
              firstName={firstName}
              lastName={lastName}
              mobile={mobile}
              setIsValid={setIsValid}
              isValid={isValid}
            />
          ) : choiceType === 3 ? (
            <CompanyInfo
              setCompanyName={setCompanyName}
              setCompanyNumber={setCompanyNumber}
              setCompanyWebsite={setCompanyWebsite}
              companyName={companyName}
              companyNumber={companyNumber}
              companyWebsite={companyWebsite}
            />
          ) : choiceType === 4 ? (
            <ApartmentAddress
              setApartment={setApartment}
              setBuildingNumber={setBuildingNumber}
              setStreet={setStreet}
              setCity={setCity}
              setPostalCode={setPostalCode}
              apartment={apartment}
              buildingNumber={buildingNumber}
              street={street}
              city={city}
              postalCode={postalCode}
            />
          ) : choiceType === 5 ? (
            <ConfirmNumber setEnterCode={setEnterCode} enterCode={enterCode} />
          ) : choiceType === 6 ? (
            <UploadAvatar
              setAvatar={setAvatar}
              avatar={avatar}
              // setChangeButtonColor={setChangeButtonColor}
            />
          ) : choiceType === 7 ? (
            <AgreeTerms
              setTermsAndConditions={setTermsAndConditions}
              registerType={registerType}
            />
          ) : null}
        </View>
      </View>
      {!keyboardVisible && (
        <View style={styles.blockEntry}>
          <TouchableOpacity
            style={
              changeColorButton
                ? styles.buttonContinueNext
                : styles.buttonContinue
            }
            onPress={() => NextPage()}
          >
            <Text style={{ color: changeColorButton ? "white" : "black" }}>
              Continue
            </Text>
          </TouchableOpacity>
          <View style={{ paddingTop: 21, alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: 500, color: "#5F5F5F" }}>
              Fill in all the details for registration.
            </Text>
          </View>
          <View style={{ alignItems: "center", paddingTop: 24 }}>
            {registerType.userType === "customer" && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "40%",
                }}
              >
                <View
                  style={
                    choiceType === 0 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
                <View
                  style={
                    choiceType === 1 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
                <View
                  style={
                    choiceType === 2 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
                {registerType.orderType === "corporate" && (
                  <View
                    style={
                      choiceType === 3 ? styles.actualBlock : styles.circleBlock
                    }
                  ></View>
                )}
                <View
                  style={
                    choiceType === 4 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
                <View
                  style={
                    choiceType === 5 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
                <View
                  style={
                    choiceType === 6 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
                <View
                  style={
                    choiceType === 7 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
              </View>
            )}
            {registerType.userType === "employee" && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "30%",
                }}
              >
                <View
                  style={
                    choiceType === 0 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
                <View
                  style={
                    choiceType === 2 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>

                <View
                  style={
                    choiceType === 5 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
                <View
                  style={
                    choiceType === 6 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
                <View
                  style={
                    choiceType === 7 ? styles.actualBlock : styles.circleBlock
                  }
                ></View>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  blockEntry: {
    position: "absolute",
    bottom: 10,
    width: "80%",
    zIndex: -1,
  },
  buttonContinue: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4C5EFF",
    borderStyle: "solid",
    borderRadius: 40,
    width: "100%",
    backgroundColor: "white",
  },

  buttonContinueNext: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4C5EFF",
    borderStyle: "solid",
    borderRadius: 40,
    width: "100%",
    backgroundColor: "#4C5EFF",
  },
  actualBlock: {
    width: 16,
    height: 8,
    borderRadius: 100,
    backgroundColor: "#4C5EFF",
  },
  circleBlock: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: "#4C5EFF",
    borderRadius: 100,
    backgroundColor: "rgba(76, 94, 255, 0.4)",
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
