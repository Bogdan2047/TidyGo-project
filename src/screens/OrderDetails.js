import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgBack from "../svg/back";
import SvgSmallLattice from "../svg/smallLattice";
import SvgSmallLocate from "../svg/smallLocate";
import SvgSmallDate from "../svg/smallDate";
import SvgSmallPerson from "../svg/smallPerson";
import SvgSmallApartment from "../svg/smallApartment";
import SvgSmallM2 from "../svg/smallm2";
import SvgSmallOptions from "../svg/smallOptions";
import SvgSmallDescription from "../svg/smallDescription";
import { useSelector } from "react-redux";
import { MapForOrderDetails } from "../components/map/mapForOrderDetails";

export const OrderDetails = ({ route }) => {
  const { id } = route.params;
  const [clickOnButton, setClickOnButton] = useState(0);
  const [order, setOrder] = useState(null);

  const navigation = useNavigation();
  const ordersData = useSelector((state) => state.ordersData.ordersData);

  const user = useSelector((state) => state.user.user);
  const employeeOrder = useSelector(
    (state) => state.orderForEmployee.employeeOrder
  );

  useEffect(() => {
    if (ordersData.length > 0 && user.userType === "customer") {
      ordersData.map((item) => {
        if (item.id === id) {
          setOrder(item);
        }
      });
    }

    if (employeeOrder.length > 0 && user.userType === "employee") {
      employeeOrder.map((item) => {
        if (item.id === id) {
          setOrder(item);
        }
      });
    }
  }, [id, user]);

  console.log("order", order);

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <ScrollView style={{ width: "100%" }}>
        <View style={{ alignItems: "center" }}>
          {order !== null && (
            <View style={{ width: "90%" }}>
              <View
                style={{
                  paddingTop: 45,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{ width: 40 }}
                  onPress={() => navigation.navigate("Orders")}
                >
                  <SvgBack />
                </TouchableOpacity>
                <View>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Order details
                  </Text>
                </View>
                <View style={{ width: 40 }}></View>
              </View>
              <View>
                <View style={{ paddingTop: 60 }}>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>
                      General information
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: 20,
                    }}
                  >
                    <View style={{ width: 20 }}>
                      <SvgSmallLattice height={17} width={16} />
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#5F5F5F",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        Order number {order.id}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: 12,
                    }}
                  >
                    <View style={{ width: 20 }}>
                      <SvgSmallLocate height={17} width={16} />
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#5F5F5F",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        {order.addressData.address}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: 12,
                    }}
                  >
                    <View style={{ width: 20 }}>
                      <SvgSmallDate />
                    </View>
                    <View>
                      <Text
                        style={{
                          color: "#5F5F5F",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                      >
                        {order.dateAndTime.date.date} /{" "}
                        {order.dateAndTime.date.time}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ paddingTop: 40, height: 320 }}>
                  <ScrollView contentContainerStyle={{ width: "100%" }}>
                    <View>
                      <Text style={{ fontSize: 20, fontWeight: 500 }}>
                        Order Description
                      </Text>
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          paddingTop: 12,
                        }}
                      >
                        <View style={{ width: 20 }}>
                          <SvgSmallPerson height={17} width={16} />
                        </View>
                        <View>
                          <Text
                            style={{
                              color: "#5F5F5F",
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            {order.employee.userData.firstName}
                            {order.employee.userData.lastName}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          paddingTop: 12,
                        }}
                      >
                        <View style={{ width: 20 }}>
                          <SvgSmallApartment />
                        </View>
                        <View>
                          <Text
                            style={{
                              color: "#5F5F5F",
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            {order.typeCleaning.typeBuild}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          paddingTop: 12,
                        }}
                      >
                        <View style={{ width: 20 }}>
                          <SvgSmallM2 />
                        </View>
                        <View>
                          <Text
                            style={{
                              color: "#5F5F5F",
                              fontSize: 14,
                              fontWeight: 500,
                            }}
                          >
                            {order.m2} м²
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",

                          paddingTop: 12,
                        }}
                      >
                        <View style={{ width: 20 }}>
                          <SvgSmallOptions />
                        </View>
                        <View>
                          <View>
                            <Text
                              style={{
                                color: "#5F5F5F",
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            >
                              Cleaning options
                            </Text>
                          </View>
                          <View>
                            {Object.keys(
                              order.cleningOptions.descriptionOptions
                            ).map((key) => (
                              <Text style={{ fontSize: 12, fontWeight: 500 }}>
                                -{" "}
                                {
                                  order.cleningOptions.descriptionOptions[key]
                                    .title
                                }
                              </Text>
                            ))}
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          paddingTop: 12,
                        }}
                      >
                        <View style={{ width: 20 }}>
                          <SvgSmallDescription />
                        </View>
                        <View>
                          <View>
                            <Text
                              style={{
                                color: "#5F5F5F",
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            >
                              Order description
                            </Text>
                          </View>
                          <View style={{ paddingRight: 15 }}>
                            <Text>{order.orderDescription}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
                {user.userType === "employee" && (
                  <View>
                    <View>
                      <Text style={{ fontSize: 20, fontWeight: 500 }}>
                        Location on the map
                      </Text>
                    </View>
                    <View style={{ width: "100%", height: 160 }}>
                      <MapForOrderDetails
                        orderLocation={order.addressData.location}
                      />
                    </View>
                  </View>
                )}
                <View style={{ paddingTop: 40, flexDirection: "row" }}>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>
                      Order price:{" "}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>$0 </Text>
                  </View>
                </View>
                <View style={{ paddingTop: 40, paddingBottom: 10 }}>
                  {user.userType === "customer" && (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ width: "48%" }}>
                        <TouchableOpacity
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor:
                              clickOnButton === 1 ? "#4C5EFF" : "white",
                            borderColor: "#4C5EFF",
                            borderWidth: 1,
                            borderRadius: 20,
                            height: 45,
                          }}
                          onPress={() => {
                            setClickOnButton(1);
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                color: clickOnButton === 1 ? "white" : "black",
                              }}
                            >
                              Reriaodical order
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={{ width: "48%" }}>
                        <TouchableOpacity
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor:
                              clickOnButton === 2 ? "#4C5EFF" : "white",
                            borderColor: "#4C5EFF",
                            borderWidth: 1,
                            borderRadius: 20,
                            height: 45,
                          }}
                          onPress={() => {
                            setClickOnButton(2);
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                color: clickOnButton === 2 ? "white" : "black",
                              }}
                            >
                              Repeat the order
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                  {user.userType === "employee" && (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ width: "48%" }}>
                        <TouchableOpacity
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "white",
                            borderColor: "#4C5EFF",
                            borderWidth: 1,
                            borderRadius: 20,
                            height: 45,
                          }}
                          onPress={() => {
                            setClickOnButton(1);
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                color: "black",
                              }}
                            >
                              Refuse
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={{ width: "48%" }}>
                        <TouchableOpacity
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#4C5EFF",
                            borderColor: "#4C5EFF",
                            borderWidth: 1,
                            borderRadius: 20,
                            height: 45,
                          }}
                          onPress={() => {
                            setClickOnButton(2);
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                color: "white",
                              }}
                            >
                              Confirm
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
