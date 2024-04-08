import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import SvgAddress from "../../../svg/address";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../../store/user/userSlice";

export const AddAddress = ({ setAddressList }) => {
  const [addressData, setAddressData] = useState({
    address: "",
    postCode: "",
  });

  const addressBuild = useSelector((state) => state.user.addressBuild);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (addressData) {
      setAddressList(addressData);
      dispatch(getAddress(null));
    }
  }, [addressData]);

  useEffect(() => {
    if (addressBuild) {
      setAddressList(addressBuild);
    }
  }, [addressBuild]);

  return (
    <View style={{ paddingTop: 24 }}>
      <View>
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
                <SvgAddress />
              </View>
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  Add an address
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 8 }}>
        <View
          style={{
            minHeight: 58,
            borderWidth: 1,
            borderColor: "rgba(76, 94, 255, 0.4)",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            paddingVertical: 12,
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
            <View style={{ flexDirection: "column", width: "100%" }}>
              <View>
                <TextInput
                  placeholder="Enter the address"
                  value={
                    addressBuild !== null
                      ? addressBuild.address
                      : addressData.address
                  }
                  style={{
                    backgroundColor: "#EEF0FF",
                    height: 40,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "rgba(76, 94, 255, 0.4)",
                    paddingLeft: 12,
                    paddingRight: 10,
                  }}
                  onChangeText={(text) => {
                    setAddressData((prev) => ({
                      ...prev,
                      address: text,
                    }));
                  }}
                />
              </View>
              <View style={{ paddingTop: 16 }}>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Post code"
                  value={
                    addressBuild !== null
                      ? addressBuild.postalCode
                      : addressData.postCode
                  }
                  style={{
                    backgroundColor: "#EEF0FF",
                    height: 40,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "rgba(76, 94, 255, 0.4)",
                    paddingLeft: 12,
                  }}
                  onChangeText={(text) => {
                    setAddressData((prev) => ({
                      ...prev,
                      postCode: text,
                    }));
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
              <Text>Pick on map</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
