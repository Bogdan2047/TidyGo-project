import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "../../../../components/card/card";
import { useState, useEffect } from "react";
import SvgX from "../../../../svg/x";
import SvgCheckMark from "../../../../svg/ckeckmark";
import SvgMinus from "../../../../svg/minus";

import SvgPlus from "../../../../svg/plus";

export const EndOfTenancyCleaning = ({ setCleanOptionsList }) => {
  const [openCarpet, setOpenCarpet] = useState(true);
  const [cleaningSupplies, setCleaningSupplies] = useState({
    status: true,
    provider: "",
    title: "Cleaning supplies",
  });
  const [cleanStoves, setCleanStoves] = useState({
    status: true,
    count: 1,
    title: "Clean stoves and hoods",
  });
  const [cleaningBedroom, setCleaningBedroom] = useState({
    status: true,
    title: "full deep clean of the bedroom(s)",
  });
  const [cleaningBathroom, setCleaningBathroom] = useState({
    status: true,
    title: "full deep clean of the bathroom",
  });
  const [cleaningKitchen, setCleaningKitchen] = useState({
    status: true,
    title: "full deep clean of the kitchen",
  });
  const [cleaningLivingRoom, setCleaningLivingRoom] = useState({
    status: true,
    title: "full deep clean of the living room",
  });
  const [cleaningEntranceHallway, setCleaningEntranceHallway] = useState({
    status: true,
    title: "full deep clean of the entrance hallway",
  });

  const [carpetCleaningOtions, setCarpetCleaningOptions] = useState({
    Single_Bedroom: false,
    Double_Bedroom: false,
    Lounge: false,
    Dining_room: false,
    Hallway: false,
    Staircase: false,
    Rugs: false,
  });

  useEffect(() => {
    updateCleanOptionsList();
  }, [
    cleaningSupplies,
    cleanStoves,
    carpetCleaningOtions,
    cleaningBedroom,
    cleaningBathroom,
    cleaningKitchen,
    cleaningLivingRoom,
    cleaningEntranceHallway,
  ]);

  const updateCleanOptionsList = () => {
    let updatedOptions = {
      descriptionOptions: {
        cleaningSupplies,
        cleanStoves,
        cleaningBedroom,
        cleaningBathroom,
        cleaningKitchen,
        cleaningLivingRoom,
        cleaningEntranceHallway,
      },
      cleanStoves,
      carpetCleaningOtions,
    };

    setCleanOptionsList(updatedOptions);
  };

  return (
    <View>
      <Card>
        <View style={{ flexDirection: "column" }}>
          {cleaningSupplies.status && (
            <View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() =>
                    setCleaningSupplies((prev) => ({
                      ...prev,
                      status: !prev,
                    }))
                  }
                >
                  <View>
                    <SvgX height={20} width={20} />
                  </View>
                </TouchableOpacity>
                <View style={{ paddingLeft: 12 }}>
                  <Text>Cleaning supplies </Text>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    paddingTop: 12,
                    paddingLeft: 20,
                  }}
                  onPress={() =>
                    setCleaningSupplies((prev) => ({
                      ...prev,
                      provider: "provided by the customer",
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
                          cleaningSupplies.provider ===
                          "provided by the customer"
                            ? "#4C5EFF"
                            : "white",
                        borderRadius: 100,
                      }}
                    ></View>
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text>provided by the customer</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    paddingTop: 12,
                    paddingLeft: 20,
                  }}
                  onPress={() =>
                    setCleaningSupplies((prev) => ({
                      ...prev,
                      provider: "provided by the employee",
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
                          cleaningSupplies.provider ===
                          "provided by the employee"
                            ? "#4C5EFF"
                            : "white",
                        borderRadius: 100,
                      }}
                    ></View>
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text>provided by the employee</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {cleaningBedroom.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setCleaningBedroom((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>full deep clean of the bedroom(s) </Text>
              </View>
            </View>
          )}
          {cleaningBathroom.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setCleaningBathroom((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>full deep clean of the bathroom </Text>
              </View>
            </View>
          )}
          {cleaningKitchen.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setCleaningKitchen((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>full deep clean of the kitchen</Text>
              </View>
            </View>
          )}
          {cleanStoves.status && (
            <View style={{ flexDirection: "column", paddingTop: 12 }}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      setCleanStoves((prev) => ({
                        ...prev,
                        status: !prev.status,
                      }))
                    }
                  >
                    <SvgX height={20} width={20} />
                  </TouchableOpacity>
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <Text>Clean stoves and hoods </Text>
                </View>
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
                        setCleanStoves((prev) => ({
                          ...prev,
                          count: prev.count - 1 ? prev.count - 1 : 1,
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
                    <Text>{cleanStoves.count}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        setCleanStoves((prev) => ({
                          ...prev,
                          count: prev.count + 1,
                        }))
                      }
                    >
                      <SvgPlus />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
          {cleaningLivingRoom.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setCleaningLivingRoom((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>full deep clean of the living room(s) </Text>
              </View>
            </View>
          )}
          {cleaningEntranceHallway.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setCleaningEntranceHallway((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>full deep clean of the entrance/hallway </Text>
              </View>
            </View>
          )}
          <View
            style={{
              flexDirection: "row",
              paddingTop: 12,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setOpenCarpet((prev) => !prev)}>
                <View>
                  <SvgCheckMark
                    color={openCarpet ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"}
                  />
                </View>
              </TouchableOpacity>
              <View style={{ paddingLeft: 12 }}>
                <Text style={{ color: openCarpet ? "black" : "#797979" }}>
                  Carpet сleaning
                </Text>
              </View>
            </View>
            <View>
              <View>
                <Image
                  source={
                    openCarpet
                      ? require("../../../../../assets/images/down2.png")
                      : require("../../../../../assets/images/up2.png")
                  }
                />
              </View>
            </View>
          </View>
          {openCarpet && (
            <View style={{ paddingLeft: 20 }}>
              <View>
                <TouchableOpacity
                  style={{ flexDirection: "row", paddingTop: 12 }}
                  onPress={() =>
                    setCarpetCleaningOptions((prev) => ({
                      ...prev,
                      Single_Bedroom: !prev.Single_Bedroom,
                    }))
                  }
                >
                  <View>
                    <SvgCheckMark
                      color={
                        carpetCleaningOtions.Single_Bedroom
                          ? "#4C5EFF"
                          : "rgba(76, 94, 255, 0.4)"
                      }
                    />
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text
                      style={{
                        color: carpetCleaningOtions.Single_Bedroom
                          ? "black"
                          : "#797979",
                      }}
                    >
                      Single Bedroom
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{ flexDirection: "row", paddingTop: 12 }}
                  onPress={() =>
                    setCarpetCleaningOptions((prev) => ({
                      ...prev,
                      Double_Bedroom: !prev.Double_Bedroom,
                    }))
                  }
                >
                  <View>
                    <SvgCheckMark
                      color={
                        carpetCleaningOtions.Double_Bedroom
                          ? "#4C5EFF"
                          : "rgba(76, 94, 255, 0.4)"
                      }
                    />
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text
                      style={{
                        color: carpetCleaningOtions.Double_Bedroom
                          ? "black"
                          : "#797979",
                      }}
                    >
                      Double Bedroom
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{ flexDirection: "row", paddingTop: 12 }}
                  onPress={() =>
                    setCarpetCleaningOptions((prev) => ({
                      ...prev,
                      Lounge: !prev.Lounge,
                    }))
                  }
                >
                  <View>
                    <SvgCheckMark
                      color={
                        carpetCleaningOtions.Lounge
                          ? "#4C5EFF"
                          : "rgba(76, 94, 255, 0.4)"
                      }
                    />
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text
                      style={{
                        color: carpetCleaningOtions.Lounge
                          ? "black"
                          : "#797979",
                      }}
                    >
                      Lounge
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{ flexDirection: "row", paddingTop: 12 }}
                  onPress={() =>
                    setCarpetCleaningOptions((prev) => ({
                      ...prev,
                      Dining_room: !prev.Dining_room,
                    }))
                  }
                >
                  <View>
                    <SvgCheckMark
                      color={
                        carpetCleaningOtions.Dining_room
                          ? "#4C5EFF"
                          : "rgba(76, 94, 255, 0.4)"
                      }
                    />
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text
                      style={{
                        color: carpetCleaningOtions.Dining_room
                          ? "black"
                          : "#797979",
                      }}
                    >
                      Dining room
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{ flexDirection: "row", paddingTop: 12 }}
                  onPress={() =>
                    setCarpetCleaningOptions((prev) => ({
                      ...prev,
                      Hallway: !prev.Hallway,
                    }))
                  }
                >
                  <View>
                    <SvgCheckMark
                      color={
                        carpetCleaningOtions.Hallway
                          ? "#4C5EFF"
                          : "rgba(76, 94, 255, 0.4)"
                      }
                    />
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text
                      style={{
                        color: carpetCleaningOtions.Hallway
                          ? "black"
                          : "#797979",
                      }}
                    >
                      Hallway
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={{ flexDirection: "row", paddingTop: 12 }}
                  onPress={() =>
                    setCarpetCleaningOptions((prev) => ({
                      ...prev,
                      Staircase: !prev.Staircase,
                    }))
                  }
                >
                  <View>
                    <SvgCheckMark
                      color={
                        carpetCleaningOtions.Staircase
                          ? "#4C5EFF"
                          : "rgba(76, 94, 255, 0.4)"
                      }
                    />
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text
                      style={{
                        color: carpetCleaningOtions.Staircase
                          ? "black"
                          : "#797979",
                      }}
                    >
                      Staircase
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{ flexDirection: "row", paddingTop: 12 }}
                onPress={() =>
                  setCarpetCleaningOptions((prev) => ({
                    ...prev,
                    Rugs: !prev.Rugs,
                  }))
                }
              >
                <View>
                  <SvgCheckMark
                    color={
                      carpetCleaningOtions.Rugs
                        ? "#4C5EFF"
                        : "rgba(76, 94, 255, 0.4)"
                    }
                  />
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <Text
                    style={{
                      color: carpetCleaningOtions.Rugs ? "black" : "#797979",
                    }}
                  >
                    Rugs
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Card>
    </View>
  );
};
