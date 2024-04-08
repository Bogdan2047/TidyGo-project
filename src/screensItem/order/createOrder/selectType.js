import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Card } from "../../../components/card/card";
import SvgApartment from "../../../svg/apartment";
import SvgHome from "../../../svg/home";
import SvgMinus from "../../../svg/minus";
import SvgPlus from "../../../svg/plus";

export const SelectType = ({
  setTypeCleaningBuild,
  setTypeBuild,
  typeBuld,
  setTypeRooms,
}) => {
  const [openAccordionType, setOpenAccordionType] = useState(false);
  const [openAccordionFlat, setOpenAccordionFlat] = useState(false);
  const [choiceType, setChoiceType] = useState(0);
  const [areaCleaningOffice, setAreaCleaningOffice] = useState(0);

  const [countRooms, setcountRooms] = useState(0);

  const [numberOfRooms, setNumberOfRooms] = useState({
    type: "",
  });

  const [countBathRoomAndBedRoom, setCountBathRoomAndBedRoom] = useState({
    bedRoom: 0,
    bathRoom: 0,
  });

  const choiceTypeHandler = (type) => {
    if (type === "Apartment cleaning") {
      setChoiceType(1);
      setTypeBuild("Apartment cleaning");
      setTypeCleaningBuild(type);
    }
    if (type === "Office cleaning") {
      setChoiceType(2);
      setTypeBuild("Office cleaning");
      setTypeCleaningBuild(type);
    }
    if (type === "House cleaning") {
      setChoiceType(3);
      setTypeBuild("House cleaning");
      setTypeCleaningBuild(type);
    }
    if (type === "Trimming shrubs") {
      setChoiceType(4);
      setTypeBuild("Trimming shrubs");
      setTypeCleaningBuild(type);
    }
    if (type === "End of Tenancy Cleaning") {
      setChoiceType(5);
      setTypeBuild("End of Tenancy Cleaning");
      setTypeCleaningBuild(type);
    }
    if (type === "After Builders Cleaning") {
      setChoiceType(6);
      setTypeBuild("After Builders Cleaning");
      setTypeCleaningBuild(type);
    }
  };

  const TypeRoomApartmentHandler = (type) => {
    if (type === "Studio flat") {
      setcountRooms(1);
      setTypeRooms("Studio flat");
    }
    if (type === "One Bedroom Property") {
      setcountRooms(2);
      setTypeRooms("One Bedroom Property");
    }
    if (type === "Two Bedroom Property") {
      setcountRooms(3);
      setTypeRooms("Two Bedroom Property");
    }
    if (type === "Three Bedroom Property") {
      setcountRooms(4);
      setTypeRooms("Three Bedroom Property");
    }
    if (type === "Four Bedroom Property") {
      setcountRooms(5);
      setTypeRooms("Four Bedroom Property");
    }
    if (type === "Five Bedroom Property") {
      setcountRooms(6);
      setTypeRooms("Five Bedroom Property");
    }
  };

  useEffect(() => {}, [typeBuld]);

  useEffect(() => {
    if (choiceType === 6) {
      let typeNumberOfRooms = {
        numberOfRooms,
        countBathRoomAndBedRoom:
          numberOfRooms.type === "Bedrooms and bathrooms"
            ? countBathRoomAndBedRoom
            : false,
      };

      setTypeRooms(typeNumberOfRooms);
    }
  }, [numberOfRooms, countBathRoomAndBedRoom]);

  useEffect(() => {
    let officeArea = {
      m2: areaCleaningOffice,
    };

    setTypeRooms(officeArea);
  }, [areaCleaningOffice]);

  return (
    <View style={{ paddingTop: 10 }}>
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
          onPress={() => setOpenAccordionType((prev) => !prev)}
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
                <SvgApartment />
              </View>
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  Select the type of cleaning:
                </Text>
              </View>
            </View>
            <View>
              <Image
                source={
                  openAccordionType
                    ? require("../../../../assets/images/up2.png")
                    : require("../../../../assets/images/down2.png")
                }
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {openAccordionType && (
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: "100%",
              paddingTop: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                width: "48%",
                height: 58,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 16,
                backgroundColor: choiceType === 1 ? "#4C5EFF" : "white",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => choiceTypeHandler("Apartment cleaning")}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: choiceType === 1 ? "white" : "#5F5F5F",
                  textAlign: "center",
                }}
              >
                Apartment cleaning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "48%",
                height: 58,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 16,
                backgroundColor: choiceType === 2 ? "#4C5EFF" : "white",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => choiceTypeHandler("Office cleaning")}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: choiceType === 2 ? "white" : "#5F5F5F",
                  textAlign: "center",
                }}
              >
                Office cleaning
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              paddingTop: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                width: "48%",
                height: 58,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 16,
                backgroundColor: choiceType === 3 ? "#4C5EFF" : "white",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => choiceTypeHandler("House cleaning")}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: choiceType === 3 ? "white" : "#5F5F5F",
                  textAlign: "center",
                }}
              >
                House cleaning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "48%",
                height: 58,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 16,
                backgroundColor: choiceType === 4 ? "#4C5EFF" : "white",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => choiceTypeHandler("Trimming shrubs")}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: choiceType === 4 ? "white" : "#5F5F5F",
                  textAlign: "center",
                }}
              >
                Trimming shrubs
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              paddingTop: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                width: "48%",
                height: 58,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 16,
                backgroundColor: choiceType === 5 ? "#4C5EFF" : "white",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => choiceTypeHandler("End of Tenancy Cleaning")}
            >
              <View style={{ width: "80%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: choiceType === 5 ? "white" : "#5F5F5F",
                    textAlign: "center",
                  }}
                >
                  End of Tenancy Cleaning
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "48%",
                height: 58,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 16,
                backgroundColor: choiceType === 6 ? "#4C5EFF" : "white",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => choiceTypeHandler("After Builders Cleaning")}
            >
              <View style={{ width: "80%" }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: choiceType === 6 ? "white" : "#5F5F5F",
                    textAlign: "center",
                  }}
                >
                  After Builders Cleaning
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {typeBuld === "Apartment cleaning" && (
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
              onPress={() => setOpenAccordionFlat((prev) => !prev)}
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
                    <SvgHome />
                  </View>
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                      Select the type of apartment:
                    </Text>
                  </View>
                </View>
                <View>
                  <Image
                    source={
                      openAccordionFlat
                        ? require("../../../../assets/images/up2.png")
                        : require("../../../../assets/images/down2.png")
                    }
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {openAccordionFlat && (
            <View>
              <View
                style={{
                  width: "100%",
                  paddingTop: 8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 1 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Studio flat");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 1 ? "white" : "#5F5F5F",

                        textAlign: "center",
                      }}
                    >
                      Studio flat
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 2 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("One Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 2 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      One Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "100%",
                  paddingTop: 8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 3 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Two Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 3 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      Two Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 4 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Three Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 4 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      Three Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}

      {typeBuld === "House cleaning" && (
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
              onPress={() => setOpenAccordionFlat((prev) => !prev)}
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
                    <SvgHome />
                  </View>
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                      Select the type of apartment:
                    </Text>
                  </View>
                </View>
                <View>
                  <Image
                    source={
                      openAccordionFlat
                        ? require("../../../../assets/images/up2.png")
                        : require("../../../../assets/images/down2.png")
                    }
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {openAccordionFlat && (
            <View>
              <View
                style={{
                  width: "100%",
                  paddingTop: 8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 1 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Studio flat");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 1 ? "white" : "#5F5F5F",

                        textAlign: "center",
                      }}
                    >
                      Studio flat
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 2 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("One Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 2 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      One Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "100%",
                  paddingTop: 8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 3 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Two Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 3 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      Two Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 4 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Three Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 4 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      Three Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}

      {typeBuld === "Office cleaning" && (
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
              onPress={() => setOpenAccordionFlat((prev) => !prev)}
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
                    <SvgHome />
                  </View>
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                      Enter the cleaning area
                    </Text>
                  </View>
                </View>
                <View>
                  <Image
                    source={
                      openAccordionFlat
                        ? require("../../../../assets/images/up2.png")
                        : require("../../../../assets/images/down2.png")
                    }
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {openAccordionFlat && (
            <View style={{ paddingTop: 16 }}>
              <View
                style={{
                  backgroundColor: "white",
                  padding: 12,
                  borderRadius: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: "rgba(76, 94, 255, 0.4)",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#EEF0FF",
                    }}
                  >
                    <Text>м²</Text>
                  </View>
                  <View style={{ width: "85%" }}>
                    <TextInput
                      keyboardType="numeric"
                      placeholder="0"
                      value={areaCleaningOffice}
                      style={{
                        backgroundColor: "#EEF0FF",
                        height: 40,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: "rgba(76, 94, 255, 0.4)",
                        paddingLeft: 12,
                      }}
                      onChangeText={(text) => {
                        setAreaCleaningOffice(text);
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      )}

      {typeBuld === "End of Tenancy Cleaning" && (
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
              onPress={() => setOpenAccordionFlat((prev) => !prev)}
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
                    <SvgHome />
                  </View>
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                      Select the type of apartment:
                    </Text>
                  </View>
                </View>
                <View>
                  <Image
                    source={
                      openAccordionFlat
                        ? require("../../../../assets/images/up2.png")
                        : require("../../../../assets/images/down2.png")
                    }
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {openAccordionFlat && (
            <View>
              <View
                style={{
                  width: "100%",
                  paddingTop: 8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 1 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Studio flat");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 1 ? "white" : "#5F5F5F",

                        textAlign: "center",
                      }}
                    >
                      Studio flat
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 2 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("One Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 2 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      One Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "100%",
                  paddingTop: 8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 3 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Two Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 3 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      Two Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 4 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Tree Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 4 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      Three Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "100%",
                  paddingTop: 8,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 5 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Four Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 5 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      Four Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "48%",
                    height: 58,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 16,
                    backgroundColor: countRooms === 6 ? "#4C5EFF" : "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    TypeRoomApartmentHandler("Five Bedroom Property");
                  }}
                >
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: countRooms === 6 ? "white" : "#5F5F5F",
                        textAlign: "center",
                      }}
                    >
                      Five Bedroom Property
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}
      {typeBuld === "After Builders Cleaning" && (
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
              onPress={() => setOpenAccordionFlat((prev) => !prev)}
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
                    <SvgHome />
                  </View>
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                      Enter the number of rooms
                    </Text>
                  </View>
                </View>
                <View>
                  <Image
                    source={
                      openAccordionFlat
                        ? require("../../../../assets/images/up2.png")
                        : require("../../../../assets/images/down2.png")
                    }
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {openAccordionFlat && (
            <View>
              <Card>
                <View style={{ flexDirection: "column" }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                    }}
                    onPress={() =>
                      setNumberOfRooms((prev) => ({
                        ...prev,
                        type: "Studio flat",
                      }))
                    }
                  >
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderColor: "#4C5EFF",
                        borderWidth: 2,
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor:
                            numberOfRooms.type === "Studio flat"
                              ? "#4C5EFF"
                              : "white",
                          borderRadius: 100,
                        }}
                      ></View>
                    </View>
                    <View style={{ paddingLeft: 12 }}>
                      <Text>Studio flat</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      paddingTop: 12,
                    }}
                    onPress={() =>
                      setNumberOfRooms((prev) => ({
                        ...prev,
                        type: "Bedrooms and bathrooms",
                      }))
                    }
                  >
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderColor: "#4C5EFF",
                        borderWidth: 2,
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor:
                            numberOfRooms.type === "Bedrooms and bathrooms"
                              ? "#4C5EFF"
                              : "white",
                          borderRadius: 100,
                        }}
                      ></View>
                    </View>
                    <View style={{ paddingLeft: 12 }}>
                      <Text>Bedrooms and bathrooms </Text>
                    </View>
                  </TouchableOpacity>
                  {numberOfRooms.type === "Bedrooms and bathrooms" && (
                    <View>
                      <View style={{ flexDirection: "column", paddingTop: 12 }}>
                        <View>
                          <Text>Bedrooms </Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              paddingTop: 8,
                              width: "40%",
                            }}
                          >
                            <View>
                              <TouchableOpacity
                                onPress={() =>
                                  setCountBathRoomAndBedRoom((prev) => ({
                                    ...prev,
                                    bedRoom:
                                      prev.bedRoom - 1 ? prev.bedRoom - 1 : 1,
                                  }))
                                }
                              >
                                <SvgMinus />
                              </TouchableOpacity>
                            </View>
                            <View
                              style={{
                                width: 40,
                                height: 40,
                                borderColor: "#4C5EFF",
                                borderWidth: 1,
                                borderRadius: 12,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Text>{countBathRoomAndBedRoom.bedRoom}</Text>
                            </View>
                            <View>
                              <TouchableOpacity
                                onPress={() =>
                                  setCountBathRoomAndBedRoom((prev) => ({
                                    ...prev,
                                    bedRoom: prev.bedRoom + 1,
                                  }))
                                }
                              >
                                <SvgPlus />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={{ flexDirection: "column", paddingTop: 12 }}>
                        <View>
                          <Text>Bathrooms</Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              paddingTop: 8,
                              width: "40%",
                            }}
                          >
                            <View>
                              <TouchableOpacity
                                onPress={() =>
                                  setCountBathRoomAndBedRoom((prev) => ({
                                    ...prev,
                                    bathRoom:
                                      prev.bathRoom - 1 ? prev.bathRoom - 1 : 1,
                                  }))
                                }
                              >
                                <SvgMinus />
                              </TouchableOpacity>
                            </View>
                            <View
                              style={{
                                width: 40,
                                height: 40,
                                borderColor: "#4C5EFF",
                                borderWidth: 1,
                                borderRadius: 12,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Text>{countBathRoomAndBedRoom.bathRoom}</Text>
                            </View>
                            <View>
                              <TouchableOpacity
                                onPress={() =>
                                  setCountBathRoomAndBedRoom((prev) => ({
                                    ...prev,
                                    bathRoom: prev.bathRoom + 1,
                                  }))
                                }
                              >
                                <SvgPlus />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              </Card>
            </View>
          )}
        </View>
      )}
    </View>
  );
};
