import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "../../../../components/card/card";
import SvgX from "../../../../svg/x";
import SvgMinus from "../../../../svg/minus";
import SvgPlus from "../../../../svg/plus";

export const ForTrimmingShrubs = ({ setCleanOptionsList }) => {
  const [openHedgeTrimming, setOpenHedgeTrimming] = useState(false);
  const [grassCutting, setGrassCutting] = useState({
    status: true,
    m2: 0,
    title: "Grass cutting",
  });
  const [bushTrimming, setBushTrimming] = useState({
    status: true,
    size: "",
    count: 1,
    title: "Bush trimming",
  });
  const [hedgetTimming, setHedgeTrimming] = useState({
    status: true,
    size: "",
    m: 0,
    title: "Hedge trimming",
  });

  useEffect(() => {
    updateCleanOptionsList();
  }, [hedgetTimming, grassCutting, bushTrimming]);

  const updateCleanOptionsList = () => {
    const updatedOptions = {
      descriptionOptions: {
        hedgetTimming,
        bushTrimming,
        grassCutting,
      },
      hedgetTimming,
      grassCutting,
      bushTrimming,
    };

    setCleanOptionsList(updatedOptions);
  };

  return (
    <View>
      <Card>
        <View style={{ flexDirection: "column" }}>
          {hedgetTimming.status && (
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
                      setHedgeTrimming((prev) => ({
                        ...prev,
                        status: !prev,
                      }))
                    }
                  >
                    <View>
                      <SvgX height={20} width={20} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ paddingLeft: 12, width: "88%" }}
                    onPress={() => setOpenHedgeTrimming((prev) => !prev)}
                  >
                    <Text
                      style={{
                        color: openHedgeTrimming ? "black" : "#797979",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      Hedge trimming
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <View>
                    <Image
                      source={
                        openHedgeTrimming
                          ? require("../../../../../assets/images/up2.png")
                          : require("../../../../../assets/images/down2.png")
                      }
                    />
                  </View>
                </View>
              </View>
              {openHedgeTrimming && (
                <View style={{ flexDirection: "column" }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      paddingTop: 12,
                      paddingLeft: 20,
                    }}
                    onPress={() =>
                      setHedgeTrimming((prev) => ({
                        ...prev,
                        size: "Small (around the waist )",
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
                            hedgetTimming.size === "Small (around the waist )"
                              ? "#4C5EFF"
                              : "white",
                          borderRadius: 100,
                        }}
                      ></View>
                    </View>
                    <View style={{ paddingLeft: 12 }}>
                      <Text style={{ fontSize: 14 }}>
                        Small (around the waist )
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      paddingTop: 12,
                      paddingLeft: 20,
                    }}
                    onPress={() =>
                      setHedgeTrimming((prev) => ({
                        ...prev,
                        size: "Tall (approximate height of a person)",
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
                            hedgetTimming.size ===
                            "Tall (approximate height of a person)"
                              ? "#4C5EFF"
                              : "white",
                          borderRadius: 100,
                        }}
                      ></View>
                    </View>
                    <View style={{ paddingLeft: 12 }}>
                      <Text style={{ fontSize: 14 }}>
                        Tall (approximate height of a person)
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{ paddingTop: 16 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
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
                            placeholder="0"
                            value={hedgetTimming.m}
                            style={{
                              backgroundColor: "#EEF0FF",
                              height: 40,
                              borderRadius: 12,
                              borderWidth: 1,
                              borderColor: "rgba(76, 94, 255, 0.4)",
                              paddingLeft: 12,
                            }}
                            onChangeText={(text) => {
                              setHedgeTrimming((prev) => ({
                                ...prev,
                                m: text,
                              }));
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          )}
          {grassCutting.status && (
            <View>
              <View style={{ flexDirection: "row", paddingTop: 16 }}>
                <TouchableOpacity
                  onPress={() =>
                    setGrassCutting((prev) => ({
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
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>
                    Grass cutting
                  </Text>
                </View>
              </View>
              <View style={{ paddingTop: 16 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
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
                        placeholder="0"
                        value={grassCutting.m2}
                        style={{
                          backgroundColor: "#EEF0FF",
                          height: 40,
                          borderRadius: 12,
                          borderWidth: 1,
                          borderColor: "rgba(76, 94, 255, 0.4)",
                          paddingLeft: 12,
                        }}
                        onChangeText={(text) => {
                          setGrassCutting((prev) => ({
                            ...prev,
                            m2: text,
                          }));
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
          {bushTrimming.status && (
            <View>
              <View style={{ flexDirection: "column", paddingTop: 12 }}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        setBushTrimming((prev) => ({
                          ...prev,
                          status: !prev.status,
                        }))
                      }
                    >
                      <SvgX height={20} width={20} />
                    </TouchableOpacity>
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: 500 }}>
                      Bush trimming
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    paddingTop: 12,
                    paddingLeft: 20,
                  }}
                  onPress={() =>
                    setBushTrimming((prev) => ({
                      ...prev,
                      size: "Small (2’ – 6’ tall)",
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
                          bushTrimming.size === "Small (2’ – 6’ tall)"
                            ? "#4C5EFF"
                            : "white",
                        borderRadius: 100,
                      }}
                    ></View>
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text style={{ fontSize: 14 }}>Small (2’ – 6’ tall)</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    paddingTop: 12,
                    paddingLeft: 20,
                  }}
                  onPress={() =>
                    setBushTrimming((prev) => ({
                      ...prev,
                      size: "Tall (taller than 6')",
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
                          bushTrimming.size === "Tall (taller than 6')"
                            ? "#4C5EFF"
                            : "white",
                        borderRadius: 100,
                      }}
                    ></View>
                  </View>
                  <View style={{ paddingLeft: 12 }}>
                    <Text style={{ fontSize: 14 }}>Tall (taller than 6')</Text>
                  </View>
                </TouchableOpacity>

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
                          setBushTrimming((prev) => ({
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
                      <Text>{bushTrimming.count}</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          setBushTrimming((prev) => ({
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
            </View>
          )}
        </View>
      </Card>
    </View>
  );
};
