import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SvgX from "../../../svg/x";
import SvgInfo from "../../../svg/info";
import SvgSmallLattice from "../../../svg/smallLattice";
import SvgSmallLocate from "../../../svg/smallLocate";
import SvgSmallDate from "../../../svg/smallDate";
import SvgCheckMark from "../../../svg/ckeckmark";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const InProgressItem = ({ item }) => {
  const [viewButton, setViewButton] = useState(false);
  const [clickOnButton, setClickOnButton] = useState(0);

  const user = useSelector((state) => state.user.user);

  const navigation = useNavigation();

  const orderDetailsHandler = (id) => {
    setClickOnButton(2);
    setTimeout(() => {
      navigation.navigate("OrderDetails", { id });
      setClickOnButton(0);
    }, 100);
  };

  return (
    <View style={{ paddingTop: 16 }}>
      <View
        style={{
          minHeight: 151,
          backgroundColor: "white",
          width: "100%",
          borderRadius: 16,
          paddingHorizontal: 12,
          paddingVertical: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>
              {item.typeCleaning?.typeBuild}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setViewButton((prev) => !prev);
              }}
            >
              {viewButton ? (
                <SvgX height={29} width={29} />
              ) : (
                <SvgInfo height={28} width={30} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 16,
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
              Order number {item.id}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 16,
          }}
        >
          <View style={{ width: 20 }}>
            <SvgSmallLocate height={17} width={16} />
          </View>
          <View style={{ width: "85%" }}>
            <Text
              style={{
                color: "#5F5F5F",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {item.addressData?.address}
            </Text>
          </View>
        </View>
        {item.dateAndTime?.date && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 16,
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
                {item.dateAndTime.date.date} / {item.dateAndTime.date.time}
              </Text>
            </View>
          </View>
        )}
        {viewButton &&
          (user.userType === "employee" ? (
            <View
              style={{
                paddingTop: 12,
              }}
            >
              <View style={{ width: "100%" }}>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: clickOnButton === 2 ? "#4C5EFF" : "white",
                    borderColor: "#4C5EFF",
                    borderWidth: 1,
                    borderRadius: 20,
                    height: 32,
                  }}
                  onPress={() => {
                    orderDetailsHandler(item.id);
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: clickOnButton === 2 ? "white" : "black",
                      }}
                    >
                      View details
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 12,
              }}
            >
              <View style={{ width: "48%" }}>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: clickOnButton === 1 ? "#4C5EFF" : "white",
                    borderColor: "#4C5EFF",
                    borderWidth: 1,
                    borderRadius: 20,
                    height: 32,
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
                      View on map
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: "48%" }}>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: clickOnButton === 2 ? "#4C5EFF" : "white",
                    borderColor: "#4C5EFF",
                    borderWidth: 1,
                    borderRadius: 20,
                    height: 32,
                  }}
                  onPress={() => {
                    orderDetailsHandler(item.id);
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: clickOnButton === 2 ? "white" : "black",
                      }}
                    >
                      View details
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </View>
      {item.dateAndTime.date.urgent && (
        <View style={{ paddingTop: 16 }}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <SvgCheckMark color={"#4C5EFF"} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>
                Urgent cleaning
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
