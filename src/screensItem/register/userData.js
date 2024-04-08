import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import SvgEng from "../../svg/eng";
import SvgCheckmarkGrey from "../../svg/checkmarkGrey";
import SvgInfo from "../../svg/labelInfo";
import { useState, useEffect } from "react";
import SvgPol from "../../svg/pol";
import SvgUkr from "../../svg/ukr";

export const UserData = ({
  setFirstName,
  setLastName,
  setMobile,
  setEmail,
  email,
  firstName,
  lastName,
  mobile,
  setIsValid,
  isValid,
}) => {
  const [rawInput, setRawInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [choiceCounrtyCode, setChoiceCountryCode] = useState({
    code: "+44",
  });

  useEffect(() => {
    if (rawInput.length) {
      const digitsOnly = rawInput.replace(/\D/g, "");
      setMobile(choiceCounrtyCode.code + digitsOnly);
    }
  }, [rawInput]);

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,6}))$/;

  const validateEmail = (text) => {
    const isValidEmail = emailRegex.test(text);
    setIsValid(isValidEmail);
    setEmail(text);
  };

  const selectedNumberCode = (code) => {
    setChoiceCountryCode((prev) => ({
      ...prev,
      code: code,
    }));
    setIsOpen(false);
  };

  useEffect(() => {
    if (email.length > 0) {
      validateEmail(email);
    }
  }, []);

  return (
    <View style={{ width: "100%" }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>
          Please complete the fields.
        </Text>
      </View>

      <View style={{ paddingTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <View style={{ paddingBottom: 6 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>First Name</Text>
            </View>
            <View style={{ position: "relative" }}>
              <TextInput
                value={firstName}
                placeholder="Lily"
                style={{
                  borderWidth: 1,
                  borderColor:
                    firstName.length < 2 && firstName.length > 0
                      ? "#DE6060"
                      : firstName !== ""
                      ? "#71C35D"
                      : "#D3D3D3",
                  borderStyle: "solid",
                  borderRadius: 40,
                  height: 40,
                  fontSize: 14,
                  paddingLeft: 12,
                  paddingRight: 30,
                  width: "100%",
                }}
                onChangeText={(text) => {
                  let filteredText = text.replace(
                    /[^a-zA-Zа-яА-ЯєЄіІїЇґҐąĄćĆęĘłŁńŃóÓśŚźŹżŻ]/g,
                    ""
                  );

                  if (filteredText.length > 0) {
                    filteredText =
                      filteredText.charAt(0).toUpperCase() +
                      filteredText.slice(1).toLowerCase();
                  }

                  setFirstName(filteredText);
                }}
              />
              <View style={{ position: "absolute", right: 10, top: 11 }}>
                {firstName.length < 2 && firstName.length > 0 ? (
                  <SvgInfo />
                ) : (
                  <SvgCheckmarkGrey
                    color={firstName !== "" ? "#71C35D" : "#797979"}
                  />
                )}
              </View>
            </View>
          </View>
          <View style={{ width: "48%" }}>
            <View style={{ paddingBottom: 6 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>Last Name</Text>
            </View>
            <View style={{ position: "relative" }}>
              <TextInput
                value={lastName}
                placeholder="Johnson"
                style={{
                  borderWidth: 1,
                  borderColor:
                    lastName.length < 2 && lastName.length > 0
                      ? "#DE6060"
                      : lastName !== ""
                      ? "#71C35D"
                      : "#D3D3D3",
                  borderStyle: "solid",
                  borderRadius: 40,
                  height: 40,
                  fontSize: 14,
                  paddingLeft: 12,
                  paddingRight: 30,
                  width: "100%",
                }}
                onChangeText={(text) => {
                  let filteredText = text.replace(
                    /[^a-zA-Zа-яА-ЯєЄіІїЇґҐąĄćĆęĘłŁńŃóÓśŚźŹżŻ]/g,
                    ""
                  );

                  if (filteredText.length > 0) {
                    filteredText =
                      filteredText.charAt(0).toUpperCase() +
                      filteredText.slice(1).toLowerCase();
                  }

                  setLastName(filteredText);
                }}
              />
              <View style={{ position: "absolute", right: 10, top: 11 }}>
                {lastName.length < 2 && lastName.length > 0 ? (
                  <SvgInfo />
                ) : (
                  <SvgCheckmarkGrey
                    color={lastName !== "" ? "#71C35D" : "#797979"}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
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
                        ? require("../../../assets/images/up2.png")
                        : require("../../../assets/images/down2.png")
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
        </View>
        <View style={{ paddingTop: 20 }}>
          <View style={{ paddingBottom: 6 }}>
            <Text style={{ fontSize: 15, fontWeight: 500 }}>Email Address</Text>
          </View>
          <View style={{ width: "100%", position: "relative" }}>
            <TextInput
              value={email}
              placeholder="Email@email.com"
              style={{
                borderWidth: 1,
                borderColor:
                  email.length > 0
                    ? isValid
                      ? "#71C35D"
                      : "#DE6060"
                    : "#D3D3D3",
                borderStyle: "solid",
                borderRadius: 40,
                height: 40,
                paddingLeft: 15,
                paddingRight: 30,
                fontSize: 14,
              }}
              onChangeText={validateEmail}
            />
            <View style={{ position: "absolute", right: 10, top: 11 }}>
              {isValid === false ? (
                <SvgInfo />
              ) : (
                <SvgCheckmarkGrey
                  color={isValid !== null && isValid ? "#71C35D" : "#797979"}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

  dropdown: {
    position: "absolute",
    top: 45,
    left: 0,
    width: 80,
    height: 110,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    zIndex: 1000,
    padding: 5,
    borderRadius: 16,
  },
  dropdownText: {
    textAlign: "center",
  },
});
