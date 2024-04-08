import { View, Text, TouchableOpacity } from "react-native";
import { Card } from "../../../components/card/card";
import SvgDescription from "../../../svg/description";
import SvgSmallLattice from "../../../svg/smallLattice";
import SvgApartment from "../../../svg/apartment";
import SvgOptions from "../../../svg/options";
import SvgSmallPerson from "../../../svg/smallPerson";
import SvgDate from "../../../svg/date";
import SvgSmallLocate from "../../../svg/smallLocate";
import SvgWallet from "../../../svg/wallet";

import { useDispatch, useSelector } from "react-redux";
import SvgGoogle from "../../../svg/google";
import SvgApple from "../../../svg/apple";
import { paymentOrder } from "../../../store/orders/createOrderSlice";

export const SelectPayment = ({ setOrderPaid, orderPaid }) => {
  const orderData = useSelector((state) => state.createOrders.orderData);

  const dispatch = useDispatch();

  const choiceOfpayment = (num) => {
    setOrderPaid(num);
    if (num) {
      dispatch(paymentOrder(true));
    }
  };

  return (
    <View style={{ alignItems: "center" }}>
      {orderData !== null && (
        <View style={{ width: "90%" }}>
          <View style={{ paddingTop: 20 }}>
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
                    <SvgDescription />
                  </View>
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                      Your order
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Card>
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",

                    paddingTop: 12,
                  }}
                >
                  <View style={{ width: 40 }}>
                    <SvgSmallLattice height={25} width={25} />
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
                        Order number
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 12, fontWeight: 500 }}>
                        345780
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",

                    paddingTop: 12,
                  }}
                >
                  <View style={{ width: 40 }}>
                    <SvgApartment />
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
                        Type of cleaning
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 12, fontWeight: 500 }}>
                        {orderData?.typeCleaning?.typeBuild}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: 12,
                  }}
                >
                  <View style={{ width: 40 }}>
                    <SvgOptions />
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
                    <View style={{ width: "95%" }}>
                      {Object.keys(
                        orderData.cleningOptions.descriptionOptions
                      ).map((key) => (
                        <Text style={{ fontSize: 12, fontWeight: 500 }}>
                          -{" "}
                          {
                            orderData.cleningOptions.descriptionOptions[key]
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
                  <View style={{ width: 40 }}>
                    <SvgSmallPerson height={25} width={25} />
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
                        An employee
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 12, fontWeight: 500 }}>
                        {orderData?.employee.userData.firstName}{" "}
                        {orderData?.employee.userData.lastName}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",

                    paddingTop: 12,
                  }}
                >
                  <View style={{ width: 40 }}>
                    <SvgDate />
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
                        Date and time
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontSize: 12, fontWeight: 500 }}>
                        {orderData?.dateAndTime.date.date} /
                        {orderData?.dateAndTime.date.time}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",

                    paddingTop: 12,
                  }}
                >
                  <View style={{ width: 40 }}>
                    <SvgSmallLocate height={25} width={25} />
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
                        Address
                      </Text>
                    </View>
                    <View style={{ width: "95%" }}>
                      <Text style={{ fontSize: 12, fontWeight: 500 }}>
                        {orderData?.addressData.address},{" "}
                        {orderData?.addressData.postCode}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>
          <View style={{ paddingTop: 20 }}>
            <View
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
                    <SvgWallet />
                  </View>
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                      Select a payment method
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                width: "30%",
                height: 58,
                backgroundColor: orderPaid === 1 ? "#4C5EFF" : "white",
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => choiceOfpayment(1)}
            >
              <View>
                <SvgApple color={orderPaid === 1 ? "white" : "black"} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "30%",
                height: 58,
                backgroundColor: orderPaid === 2 ? "#4C5EFF" : "white",
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => choiceOfpayment(2)}
            >
              <View>
                <SvgGoogle orderPaid={orderPaid} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "30%",
                height: 58,
                backgroundColor: orderPaid === 3 ? "#4C5EFF" : "white",
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => choiceOfpayment(3)}
            >
              <View>
                <Text style={{ color: orderPaid === 3 ? "white" : "black" }}>
                  Pay by card
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
