import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import RatingStars from "../../../components/ratingStars/ratingStars";

export const RateOrder = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ width: "90%" }}>
        <View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              The order is complete!
            </Text>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 500 }}>
              Please rate the quality of the order fulfillment.{" "}
            </Text>
          </View>
        </View>
        <View style={{ paddingLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 12,
            }}
          >
            <View style={{ width: 20 }}>
              <Image
                source={require("../../../../assets/images/lattice.png")}
              />
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
                  Order number 345780
                </Text>
              </View>
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
              <Image source={require("../../../../assets/images/locate.png")} />
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
                  83 Chancery Ln, London
                </Text>
              </View>
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
              <Image source={require("../../../../assets/images/date.png")} />
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
                  14:30 - 16:00
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center", paddingTop: 10 }}>
          <RatingStars totalStars={5} size={40} />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 20,
            }}
          >
            <View style={{ width: "48%" }}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  //   backgroundColor: clickOnButton === 1 ? "#4C5EFF" : "white",
                  borderColor: "#4C5EFF",
                  borderWidth: 1,
                  borderRadius: 20,
                  height: 45,
                }}
                // onPress={() => {
                //   setClickOnButton(1);
                // }}
              >
                <View>
                  <Text
                  // style={{
                  //   color: clickOnButton === 1 ? "white" : "black",
                  // }}
                  >
                    Cancel order
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: "48%" }}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  //   backgroundColor: clickOnButton === 2 ? "#4C5EFF" : "white",
                  borderColor: "#4C5EFF",
                  borderWidth: 1,
                  borderRadius: 20,
                  height: 45,
                }}
                // onPress={() => {
                //   setClickOnButton(2);
                // }}
              >
                <View>
                  <Text
                    style={
                      {
                        //   color: clickOnButton === 2 ? "white" : "black",
                      }
                    }
                  >
                    Write a message
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
