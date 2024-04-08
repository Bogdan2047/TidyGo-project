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
import SvgCheckMark from "../../../../svg/ckeckmark";
import SvgX from "../../../../svg/x";
import SvgMinus from "../../../../svg/minus";
import SvgPlus from "../../../../svg/plus";

export const ForApartment = ({ setCleanOptionsList }) => {
  const [supplies, setSupplies] = useState({
    status: true,
    provider: "",
    title: "Cleaning supplies",
  });

  const [glassAndMirror, setGlassAndMirror] = useState({
    status: true,
    title: "Wipe all glass surfaces and mirrors",
  });
  const [stoves, setStoves] = useState({
    status: true,
    count: 1,
    title: "Clean stoves and hoods",
  });
  const [trash, setTrash] = useState(true);
  const [openCarpet, setOpenCarpet] = useState(true);

  const [carpetCleaningOtions, setCarpetCleaningOptions] = useState({
    Single_Bedroom: false,
    Double_Bedroom: false,
    Lounge: false,
    Dining_room: false,
    Hallway: false,
    Staircase: false,
    Rugs: false,
  });
  const [vacuuming, setVacuuming] = useState({
    status: false,
    count: 1,
    provider: "",
  });
  const [sanitizeAndBathtubs, setSanitizeAndBathtubs] = useState(false);
  const [smartOrganization, setSmartOrganuzation] = useState(false);
  const [overCleaning, setOverCleaning] = useState(false);
  const [cleanFridge, setCleanFridge] = useState({
    status: false,
    count: 1,
  });
  const [nonHightWindows, setNonHightWindows] = useState({
    status: true,
    count: 1,
    side: "",
  });

  useEffect(() => {
    updateCleanOptionsList();
  }, [
    supplies,
    glassAndMirror,
    stoves,
    trash,
    openCarpet,
    carpetCleaningOtions,
    vacuuming,
    sanitizeAndBathtubs,
    smartOrganization,
    overCleaning,
    cleanFridge,
    nonHightWindows,
  ]);

  const updateCleanOptionsList = () => {
    const updatedOptions = {
      descriptionOptions: {
        supplies,
        glassAndMirror,
        stoves,
      },
      trash,
      openCarpet,
      carpetCleaningOtions,
      vacuuming,
      sanitizeAndBathtubs,
      smartOrganization,
      overCleaning,
      cleanFridge,
      nonHightWindows,
    };

    setCleanOptionsList(updatedOptions);
  };

  return (
    <View>
      <Card>
        <View style={{ flexDirection: "column" }}>
          {supplies.status && (
            <View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() =>
                    setSupplies((prev) => ({
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
                    setSupplies((prev) => ({
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
                          supplies.provider === "provided by the customer"
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
                    setSupplies((prev) => ({
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
                          supplies.provider === "provided by the employee"
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
          {glassAndMirror.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setGlassAndMirror((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>Wipe all glass surfaces and mirrors </Text>
              </View>
            </View>
          )}
          {stoves.status && (
            <View style={{ flexDirection: "column", paddingTop: 12 }}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      setStoves((prev) => ({
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
                        setStoves((prev) => ({
                          ...prev,
                          count: prev.count > 1 ? prev.count - 1 : 1,
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
                    <Text>{stoves.count}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        setStoves((prev) => ({
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
          <View style={{ paddingTop: 12 }}>
            <TouchableOpacity
              onPress={() => setTrash((prev) => !prev)}
              style={{ flexDirection: "row" }}
            >
              <View>
                <SvgCheckMark
                  color={trash ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"}
                />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text style={{ color: trash ? "black" : "#797979" }}>
                  Take out the trash and dispose of it
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
                      ? require("../../../../../assets/images/up2.png")
                      : require("../../../../../assets/images/down2.png")
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
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 12,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() =>
                    setVacuuming((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <View>
                    <SvgCheckMark
                      color={
                        vacuuming.status ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"
                      }
                    />
                  </View>
                </TouchableOpacity>
                <View style={{ paddingLeft: 12, width: "88%" }}>
                  <Text
                    style={{
                      color: vacuuming.status ? "black" : "#797979",
                    }}
                  >
                    Vacuuming and/or mopping and/or sweeping the floor in all
                    rooms (depending on the type of flooring).
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Image
                    source={
                      vacuuming.status
                        ? require("../../../../../assets/images/up2.png")
                        : require("../../../../../assets/images/down2.png")
                    }
                  />
                </View>
              </View>
            </View>
            {vacuuming.status && (
              <>
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
                            setVacuuming((prev) => ({
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
                        <Text>{vacuuming.count}</Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() =>
                            setVacuuming((prev) => ({
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
                <View>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      paddingTop: 12,
                      paddingLeft: 20,
                    }}
                    onPress={() =>
                      setVacuuming((prev) => ({
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
                            vacuuming.provider === "provided by the customer"
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
                      setVacuuming((prev) => ({
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
                            vacuuming.provider === "provided by the employee"
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
              </>
            )}
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", paddingTop: 12 }}
              onPress={() => setSanitizeAndBathtubs((prev) => !prev)}
            >
              <View>
                <SvgCheckMark
                  color={
                    sanitizeAndBathtubs ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"
                  }
                />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text
                  style={{
                    color: sanitizeAndBathtubs ? "black" : "#797979",
                  }}
                >
                  Clean and sanitize sinks and bathtubs
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", paddingTop: 12 }}
              onPress={() => setSmartOrganuzation((prev) => !prev)}
            >
              <View>
                <SvgCheckMark
                  color={
                    smartOrganization ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"
                  }
                />
              </View>
              <View style={{ paddingLeft: 12, width: "85%" }}>
                <Text
                  style={{
                    color: smartOrganization ? "black" : "#797979",
                  }}
                >
                  Smart organization of visibly scattered and disorganized items
                  (without intrusion into privacy)
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ flexDirection: "row", paddingTop: 12 }}
            onPress={() =>
              setVacuuming((prev) => ({
                ...prev,
                status: !prev.status,
              }))
            }
          >
            <View>
              <SvgCheckMark
                color={vacuuming.status ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"}
              />
            </View>
            <View style={{ paddingLeft: 12, width: "85%" }}>
              <Text
                style={{
                  color: vacuuming.status ? "black" : "#797979",
                }}
              >
                Vacuuming and/or mopping and/or sweeping the floor in all rooms
                (depending on the type of flooring).
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", paddingTop: 12 }}
            onPress={() => setOverCleaning((prev) => !prev)}
          >
            <View>
              <SvgCheckMark
                color={overCleaning ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"}
              />
            </View>
            <View style={{ paddingLeft: 12 }}>
              <Text
                style={{
                  color: overCleaning ? "black" : "#797979",
                }}
              >
                Oven cleaning
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity
              style={{ flexDirection: "row", paddingTop: 12 }}
              onPress={() =>
                setCleanFridge((prev) => ({
                  ...prev,
                  status: !prev.status,
                }))
              }
            >
              <View>
                <SvgCheckMark
                  color={
                    cleanFridge.status ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"
                  }
                />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text
                  style={{
                    color: cleanFridge.status ? "black" : "#797979",
                  }}
                >
                  Single Fridge cleaning
                </Text>
              </View>
            </TouchableOpacity>
            {cleanFridge.status && (
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
                          setCleanFridge((prev) => ({
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
                      <Text>{cleanFridge.count}</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          setCleanFridge((prev) => ({
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
          <View style={{ flexDirection: "column", paddingTop: 12 }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setNonHightWindows((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgCheckMark
                    color={
                      nonHightWindows.status
                        ? "#4C5EFF"
                        : "rgba(76, 94, 255, 0.4)"
                    }
                  />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text
                  style={{
                    // fontSize: 16,
                    color: nonHightWindows.status ? "black" : "#797979",
                  }}
                >
                  Window cleaning for non-high windows
                </Text>
              </View>
            </View>
            {nonHightWindows.status && (
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
                          setNonHightWindows((prev) => ({
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
                      <Text>{nonHightWindows.count}</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          setNonHightWindows((prev) => ({
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

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    paddingTop: 12,
                    paddingLeft: 20,
                  }}
                  onPress={() =>
                    setNonHightWindows((prev) => ({
                      ...prev,
                      side: "on one side",
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
                          nonHightWindows.side === "on one side"
                            ? "#4C5EFF"
                            : "white",
                        borderRadius: 100,
                      }}
                    ></View>
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text style={{ fontSize: 14 }}>on one side</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    paddingTop: 12,
                    paddingLeft: 20,
                  }}
                  onPress={() =>
                    setNonHightWindows((prev) => ({
                      ...prev,
                      side: "on both side",
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
                          nonHightWindows.side === "on both side"
                            ? "#4C5EFF"
                            : "white",
                        borderRadius: 100,
                      }}
                    ></View>
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text style={{ fontSize: 14 }}>on both sides</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Card>
    </View>
  );
};
