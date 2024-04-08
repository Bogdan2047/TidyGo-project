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

export const OfficeCleaning = ({ setCleanOptionsList }) => {
  const [glassAndMirror, setGlassAndMirror] = useState({
    status: true,
    title: "Wipe all glass surfaces and mirrors",
  });
  const [toilets, setToilets] = useState({
    status: true,
    title: "Clean and sanitize toilets.",
  });

  const [disinfectSinks, setDisinfectSinks] = useState({
    status: true,
    title: "Clean and disinfect sinks and bathtubs",
  });

  const [refrigerator, setRefrigerator] = useState({
    status: true,
    title: "Your the outside of the refrigerator and mitsrovave ram.",
  });

  const [furniture, setFurniture] = useState({
    status: true,
    title: "Remove dust from furniture, tables and table surfaces.",
  });

  const [kitchenTables, setKitchenTables] = useState({
    status: true,
    title: "Clean and sanitize kitchen tables and appliances.",
  });

  const [removeFingerprints, setRemoveFingerprints] = useState({
    status: true,
    title: "Remove fingerprints from door handles and switches.",
  });

  const [garbage, setGarbage] = useState({
    status: true,
    title: "Take out garbage in available garbage cans.",
  });

  const [terracesAndBalconies, setTerracesAndBalconies] = useState(true);
  const [furniturePolishing, setFurniturePolishing] = useState(true);
  const [internalCabinets, setInternalCabinets] = useState(true);
  const [basementsAndStorerooms, setBasementsAndStorerooms] = useState(true);
  const [homeTerritory, setHomeTerritory] = useState(true);

  const [vacuuming, setVacuuming] = useState({
    status: false,
    count: 1,
    provider: "",
  });

  const [cleaningWindows, setCleaningWindows] = useState({
    status: true,
    count: 1,
  });

  const [chemical, setChemical] = useState({
    status: true,
    m2: 0,
  });

  useEffect(() => {
    updateCleanOptionsList();
  }, [
    glassAndMirror,
    vacuuming,
    cleaningWindows,
    toilets,
    furniture,
    furniturePolishing,
    kitchenTables,
    refrigerator,
    removeFingerprints,
    garbage,
    terracesAndBalconies,
    internalCabinets,
    basementsAndStorerooms,
    homeTerritory,
    chemical,
  ]);

  const updateCleanOptionsList = () => {
    const updatedOptions = {
      descriptionOptions: {
        glassAndMirror,
        toilets,
        furniture,
        kitchenTables,
        refrigerator,
        removeFingerprints,
        garbage,
      },

      vacuuming,
      cleaningWindows,
      terracesAndBalconies,
      internalCabinets,
      basementsAndStorerooms,
      homeTerritory,
      chemical,
    };

    setCleanOptionsList(updatedOptions);
  };

  return (
    <View>
      <Card>
        <View style={{ flexDirection: "column", width: "100%" }}>
          {glassAndMirror.status && (
            <View style={{ flexDirection: "row" }}>
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
          {toilets.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setToilets((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>{toilets.title}</Text>
              </View>
            </View>
          )}
          {disinfectSinks.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setDisinfectSinks((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>{disinfectSinks.title}</Text>
              </View>
            </View>
          )}
          {refrigerator.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setRefrigerator((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>{refrigerator.title}</Text>
              </View>
            </View>
          )}
          {furniture.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setFurniture((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>{furniture.title}</Text>
              </View>
            </View>
          )}
          {kitchenTables.status && (
            <View
              style={{ flexDirection: "row", paddingTop: 12, width: "90%" }}
            >
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setKitchenTables((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>{kitchenTables.title}</Text>
              </View>
            </View>
          )}
          {removeFingerprints.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setRemoveFingerprints((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>{removeFingerprints.title}</Text>
              </View>
            </View>
          )}
          {garbage.status && (
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setGarbage((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgX height={20} width={20} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text>{garbage.title}</Text>
              </View>
            </View>
          )}
          <View style={{ paddingTop: 12 }}>
            <TouchableOpacity
              onPress={() => setTerracesAndBalconies((prev) => !prev)}
              style={{ flexDirection: "row" }}
            >
              <View>
                <SvgCheckMark
                  color={
                    terracesAndBalconies ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"
                  }
                />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text
                  style={{ color: terracesAndBalconies ? "black" : "#797979" }}
                >
                  Cleaning of terraces and balconies
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 12 }}>
            <TouchableOpacity
              onPress={() => setFurniturePolishing((prev) => !prev)}
              style={{ flexDirection: "row" }}
            >
              <View>
                <SvgCheckMark
                  color={
                    furniturePolishing ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"
                  }
                />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text
                  style={{ color: furniturePolishing ? "black" : "#797979" }}
                >
                  Furniture polishing
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 12 }}>
            <TouchableOpacity
              onPress={() => setInternalCabinets((prev) => !prev)}
              style={{ flexDirection: "row" }}
            >
              <View>
                <SvgCheckMark
                  color={
                    internalCabinets ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"
                  }
                />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text style={{ color: internalCabinets ? "black" : "#797979" }}>
                  Cleaning of internal cabinets and drawers
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 12 }}>
            <TouchableOpacity
              onPress={() => setBasementsAndStorerooms((prev) => !prev)}
              style={{ flexDirection: "row" }}
            >
              <View>
                <SvgCheckMark
                  color={
                    basementsAndStorerooms
                      ? "#4C5EFF"
                      : "rgba(76, 94, 255, 0.4)"
                  }
                />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text
                  style={{
                    color: basementsAndStorerooms ? "black" : "#797979",
                  }}
                >
                  Cleaning basements and storerooms
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 12 }}>
            <TouchableOpacity
              onPress={() => setHomeTerritory((prev) => !prev)}
              style={{ flexDirection: "row" }}
            >
              <View>
                <SvgCheckMark
                  color={homeTerritory ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"}
                />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text style={{ color: homeTerritory ? "black" : "#797979" }}>
                  Cleaning of the home territory
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: 12 }}>
            <TouchableOpacity
              onPress={() =>
                setChemical((prev) => ({
                  ...prev,
                  status: !prev.status,
                }))
              }
              style={{ flexDirection: "row" }}
            >
              <View>
                <SvgCheckMark
                  color={chemical.status ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"}
                />
              </View>
              <View style={{ paddingLeft: 12 }}>
                <Text style={{ color: chemical.status ? "black" : "#797979" }}>
                  Chemical cleaning of carpets
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {chemical.status && (
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
                      keyboardType="numeric"
                      value={chemical.m2}
                      style={{
                        backgroundColor: "#EEF0FF",
                        height: 40,
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: "rgba(76, 94, 255, 0.4)",
                        paddingLeft: 12,
                      }}
                      onChangeText={(text) => {
                        setChemical((prev) => ({
                          ...prev,
                          m2: text,
                        }));
                      }}
                    />
                  </View>
                </View>
              </View>
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

          <View style={{ flexDirection: "column", paddingTop: 12 }}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <TouchableOpacity
                  onPress={() =>
                    setCleaningWindows((prev) => ({
                      ...prev,
                      status: !prev.status,
                    }))
                  }
                >
                  <SvgCheckMark
                    color={
                      cleaningWindows.status
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
                    color: cleaningWindows.status ? "black" : "#797979",
                  }}
                >
                  Window cleaning (inside only)
                </Text>
              </View>
            </View>
            {cleaningWindows.status && (
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
                        setCleaningWindows((prev) => ({
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
                    <Text>{cleaningWindows.count}</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        setCleaningWindows((prev) => ({
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
            )}
          </View>
        </View>
      </Card>
    </View>
  );
};
