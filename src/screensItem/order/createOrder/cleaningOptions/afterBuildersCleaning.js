import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "../../../../components/card/card";
import { useState, useEffect } from "react";
import SvgX from "../../../../svg/x";
import SvgCheckMark from "../../../../svg/ckeckmark";
import SvgMinus from "../../../../svg/minus";
import SvgPlus from "../../../../svg/plus";

export const AfterBuildersCleaning = ({ setCleanOptionsList }) => {
  const [cleaningBalcony, setCleaningBalcony] = useState(false);
  const [cleaningGarage, setCleaningGarage] = useState(false);
  const [externalWindow, setExternalWindow] = useState({
    status: false,
    count: 1,
  });

  const [cleaningSupplies, setCleaningSupplies] = useState({
    status: true,
    provider: "",
    title: "Cleaning supplies",
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

  useEffect(() => {
    updateCleanOptionsList();
  }, [
    cleaningSupplies,
    cleaningBedroom,
    cleaningBathroom,
    cleaningKitchen,
    cleaningLivingRoom,
    cleaningEntranceHallway,
    cleaningBalcony,
    cleaningGarage,
    externalWindow,
  ]);

  const updateCleanOptionsList = () => {
    let updatedOptions = {
      descriptionOptions: {
        cleaningSupplies,
        cleaningBedroom,
        cleaningBathroom,
        cleaningKitchen,
        cleaningLivingRoom,
        cleaningEntranceHallway,
      },
      cleaningBalcony,
      cleaningGarage,
      externalWindow,
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
                      status: !prev.status,
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
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", paddingTop: 12 }}
              onPress={() => setCleaningBalcony((prev) => !prev)}
            >
              <View>
                <SvgCheckMark
                  color={cleaningBalcony ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"}
                />
              </View>
              <View style={{ paddingLeft: 12, width: "85%" }}>
                <Text
                  style={{
                    color: cleaningBalcony ? "black" : "#797979",
                  }}
                >
                  Cleaning the balcony
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", paddingTop: 12 }}
              onPress={() => setCleaningGarage((prev) => !prev)}
            >
              <View>
                <SvgCheckMark
                  color={cleaningGarage ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"}
                />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text
                  style={{
                    color: cleaningGarage ? "black" : "#797979",
                  }}
                >
                  Cleaning the garage
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                style={{ flexDirection: "row", paddingTop: 12 }}
                onPress={() =>
                  setExternalWindow((prev) => ({
                    ...prev,
                    status: !prev.status,
                  }))
                }
              >
                <View>
                  <SvgCheckMark
                    color={
                      externalWindow.status
                        ? "#4C5EFF"
                        : "rgba(76, 94, 255, 0.4)"
                    }
                  />
                </View>
                <View style={{ paddingLeft: 12 }}>
                  <Text
                    style={{
                      color: externalWindow.status ? "black" : "#797979",
                    }}
                  >
                    External window cleaning
                  </Text>
                </View>
              </TouchableOpacity>
              {externalWindow.status && (
                <View>
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
                            setExternalWindow((prev) => ({
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
                        <Text>{externalWindow.count}</Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() =>
                            setExternalWindow((prev) => ({
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
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};
