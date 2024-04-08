import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SvgEdit from "../svg/edit";
import SvgBack from "../svg/back";
import SvgAdd from "../svg/add";
import SvgEng from "../svg/eng";

export const MyInfo = ({ user }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#F2F2F2" }}>
      <View style={{ width: "90%", paddingTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 23,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ width: 40 }}
            onPress={() => navigation.navigate("Account")}
          >
            <SvgBack />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 24, fontWeight: 500 }}>
              My information
            </Text>
          </View>
          <View style={{ width: 40 }}>
            <SvgEdit />
          </View>
        </View>
        <View>
          <View style={{ alignItems: "center", position: "relative" }}>
            <View>
              <Image
                source={
                  user.avatar !== ""
                    ? {
                        uri: user.avatar,
                      }
                    : require("../../assets/images/defaultAvatar.png")
                }
                style={{ width: 150, height: 150, borderRadius: 100 }}
              />
            </View>
            <View>
              <SvgAdd style={{ position: "absolute", bottom: 0, left: 40 }} />
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 40 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "48%" }}>
              <View style={{ paddingBottom: 6 }}>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>
                  First Name
                </Text>
              </View>
              <View>
                <TextInput
                  placeholder={user.firstName}
                  style={styles.writeNames}
                  onChangeText={(text) => {
                    setFirstName(text);
                  }}
                />
              </View>
            </View>
            <View style={{ width: "48%" }}>
              <View style={{ paddingBottom: 6 }}>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>Last Name</Text>
              </View>
              <View>
                <TextInput
                  placeholder={user.lastName}
                  style={styles.writeNames}
                  onChangeText={(text) => {
                    setLastName(text);
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <View style={{ paddingBottom: 6 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Phone number
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "30%" }}>
                <View style={styles.choiceCountry}>
                  <View>
                    <SvgEng />
                  </View>
                  <View>
                    <Text>+ 44</Text>
                  </View>
                  <View>
                    <Image source={require("../../assets/images/down.png")} />
                  </View>
                </View>
              </View>
              <View style={{ width: "65%" }}>
                <TextInput
                  placeholder={user.mobile}
                  style={styles.writeNumber}
                  onChangeText={(text) => {
                    setMobile(text);
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <View style={{ paddingBottom: 6 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Email Address
              </Text>
            </View>
            <View style={{ width: "100%" }}>
              <TextInput
                placeholder={user.email}
                style={styles.writeEmail}
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  writeNames: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderRadius: 40,
    height: 40,
    fontSize: 14,
    paddingLeft: 12,
    width: "100%",
    backgroundColor: "white",
  },
  choiceCountry: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderRadius: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  writeNumber: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderRadius: 40,
    height: 40,
    paddingLeft: 41,
    fontSize: 14,
    backgroundColor: "white",
  },
  writeEmail: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderRadius: 40,
    height: 40,
    paddingLeft: 15,
    fontSize: 14,
    backgroundColor: "white",
  },
});
