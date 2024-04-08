import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "../../../components/card/card";
import SvgCheckMark from "../../../svg/ckeckmark";
import SvgPeople from "../../../svg/people";
import SvgStar from "../../../svg/star";

export const SelectEmployee = ({
  setSelectedEmployee,
  nearEmployee,
  selectedEmployee,
}) => {
  const chosenEmployeeHandler = (data) => {
    setSelectedEmployee(data);
  };

  return (
    <View style={{ alignItems: "center" }}>
      {nearEmployee && (
        <View style={{ width: "90%" }}>
          <View>
            <Card>
              <View
                style={{
                  height: 74,
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <View>
                      <Image
                        source={
                          nearEmployee.userData.avatar !== ""
                            ? {
                                uri: nearEmployee.userData.avatar,
                              }
                            : require("../../../../assets/images/defaultAvatar.png")
                        }
                        style={{ height: 70, width: 70 }}
                      />
                    </View>
                    <View style={{ flexDirection: "column", paddingLeft: 8 }}>
                      <View>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>
                          {nearEmployee.userData.firstName}{" "}
                          {nearEmployee.userData.lastName}
                        </Text>
                      </View>
                      <View style={{ paddingTop: 7 }}>
                        <Text style={{ fontSize: 12, fontWeight: 300 }}>
                          0 completed orders
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row", paddingTop: 7 }}>
                        <View>
                          <SvgStar />
                        </View>
                        <View>
                          <SvgStar />
                        </View>
                        <View>
                          <SvgStar />
                        </View>
                        <View>
                          <SvgStar />
                        </View>
                        <View>
                          <SvgStar />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => chosenEmployeeHandler(nearEmployee.userId)}
                    >
                      <SvgCheckMark
                        color={
                          selectedEmployee === nearEmployee.userId
                            ? "#4C5EFF"
                            : "rgba(76, 94, 255, 0.4)"
                        }
                        size={28}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>
      )}
    </View>
  );
};
