import { View, Text, TextInput, StyleSheet } from "react-native";
import SvgCheckmarkGrey from "../../svg/checkmarkGrey";
import SvgInfo from "../../svg/labelInfo";

export const ApartmentAddress = ({
  setApartment,
  setBuildingNumber,
  setStreet,
  setCity,
  setPostalCode,
  apartment,
  buildingNumber,
  street,
  city,
  postalCode,
}) => {
  return (
    <View style={{ width: "100%" }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>
          Specify cleaning address.
        </Text>
      </View>
      <View style={{ paddingTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <View style={{ paddingBottom: 6 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Apartment / office
              </Text>
            </View>
            <View style={{ position: "relative" }}>
              <TextInput
                value={apartment}
                placeholder="Number"
                style={{
                  borderWidth: 1,
                  borderColor:
                    apartment.length < 2 && apartment.length > 0
                      ? "#DE6060"
                      : apartment !== ""
                      ? "#71C35D"
                      : "#D3D3D3",
                  borderStyle: "solid",
                  borderRadius: 40,
                  height: 40,
                  fontSize: 14,
                  paddingLeft: 12,
                  paddingRight: 30,
                  width: "100%",
                }}
                onChangeText={(text) => {
                  const formattedText = text.trim().toUpperCase();
                  setApartment(formattedText);
                }}
              />
              <View style={{ position: "absolute", right: 10, top: 11 }}>
                {apartment.length < 2 && apartment.length > 0 ? (
                  <SvgInfo />
                ) : (
                  <SvgCheckmarkGrey
                    color={apartment !== "" ? "#71C35D" : "#797979"}
                  />
                )}
              </View>
            </View>
          </View>
          <View style={{ width: "48%" }}>
            <View style={{ paddingBottom: 6 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Building number
              </Text>
            </View>
            <View style={{ position: "relative" }}>
              <TextInput
                value={buildingNumber}
                placeholder="Number"
                style={{
                  borderWidth: 1,
                  borderColor:
                    buildingNumber.length < 2 && buildingNumber.length > 0
                      ? "#DE6060"
                      : buildingNumber !== ""
                      ? "#71C35D"
                      : "#D3D3D3",
                  borderStyle: "solid",
                  borderRadius: 40,
                  height: 40,
                  fontSize: 14,
                  paddingLeft: 12,
                  paddingRight: 30,
                  width: "100%",
                }}
                onChangeText={(text) => {
                  const formattedText = text.trim().toUpperCase();
                  setBuildingNumber(formattedText);
                }}
              />
              <View style={{ position: "absolute", right: 10, top: 11 }}>
                {buildingNumber.length < 2 && buildingNumber.length > 0 ? (
                  <SvgInfo />
                ) : (
                  <SvgCheckmarkGrey
                    color={buildingNumber !== "" ? "#71C35D" : "#797979"}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <View style={{ paddingBottom: 6 }}>
            <Text style={{ fontSize: 15, fontWeight: 500 }}>Street</Text>
          </View>
          <View style={{ width: "100%" }}>
            <TextInput
              placeholder="Street"
              value={street}
              style={{
                borderWidth: 1,
                borderColor:
                  street.length < 5 && street.length > 0
                    ? "#DE6060"
                    : street !== ""
                    ? "#71C35D"
                    : "#D3D3D3",
                borderStyle: "solid",
                borderRadius: 40,
                height: 40,
                paddingLeft: 12,
                paddingRight: 30,
                fontSize: 14,
              }}
              onChangeText={(text) => {
                // Удаление нежелательных символов, кроме букв и пробелов
                let filteredText = text.replace(
                  /[^a-zA-Zа-яА-ЯєЄіІїЇґҐąĄćĆęĘłŁńŃóÓśŚźŹżŻ ]/g,
                  ""
                );

                filteredText = filteredText
                  .replace(/^\s+/, "")
                  .replace(/^(\S)\s+/, "$1");

                let spacesCount = 0;
                filteredText = filteredText
                  .split("")
                  .filter((char) => {
                    if (char === " ") {
                      if (spacesCount >= 3) return false;
                      spacesCount++;
                    }
                    return true;
                  })
                  .join("");

                if (filteredText.length > 0) {
                  filteredText =
                    filteredText.charAt(0).toUpperCase() +
                    filteredText.slice(1).toLowerCase();
                }

                setStreet(filteredText);
              }}
            />
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "48%" }}>
              <View style={{ paddingBottom: 6 }}>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>City</Text>
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  placeholder="City"
                  value={city}
                  style={{
                    borderWidth: 1,
                    borderColor:
                      city.length < 3 && city.length > 0
                        ? "#DE6060"
                        : city !== ""
                        ? "#71C35D"
                        : "#D3D3D3",
                    borderStyle: "solid",
                    borderRadius: 40,
                    height: 40,
                    fontSize: 14,
                    paddingLeft: 12,
                    paddingRight: 30,
                    width: "100%",
                  }}
                  onChangeText={(text) => {
                    let filteredText = text.replace(
                      /[^a-zA-Zа-яА-ЯєЄіІїЇґҐąĄćĆęĘłŁńŃóÓśŚźŹżŻ]/g,
                      ""
                    );

                    if (filteredText.length > 0) {
                      filteredText =
                        filteredText.charAt(0).toUpperCase() +
                        filteredText.slice(1).toLowerCase();
                    }

                    setCity(filteredText);
                  }}
                />
                <View style={{ position: "absolute", right: 10, top: 11 }}>
                  {city.length < 4 && city.length > 0 ? (
                    <SvgInfo />
                  ) : (
                    <SvgCheckmarkGrey
                      color={city !== "" ? "#71C35D" : "#797979"}
                    />
                  )}
                </View>
              </View>
            </View>
            <View style={{ width: "48%" }}>
              <View style={{ paddingBottom: 6 }}>
                <Text style={{ fontSize: 15, fontWeight: 500 }}>
                  Postal code
                </Text>
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  placeholder="Number"
                  value={postalCode}
                  maxLength={9}
                  style={{
                    borderWidth: 1,
                    borderColor:
                      postalCode.length < 5 && postalCode.length > 0
                        ? "#DE6060"
                        : postalCode !== ""
                        ? "#71C35D"
                        : "#D3D3D3",
                    borderStyle: "solid",
                    borderRadius: 40,
                    height: 40,
                    fontSize: 14,
                    paddingLeft: 12,
                    width: "100%",
                  }}
                  onChangeText={(text) => {
                    let filteredText = text.replace(/[^a-zA-Z0-9]/g, "");
                    let textUpper = filteredText.toUpperCase();
                    let letters = textUpper
                      .replace(/[^a-zA-Z]/g, "")
                      .substring(0, 3);

                    let digits = filteredText.replace(/[^0-9]/g, "");

                    filteredText = letters + digits;

                    setPostalCode(filteredText);
                  }}
                />
                <View style={{ position: "absolute", right: 10, top: 11 }}>
                  {postalCode.length < 5 && postalCode.length > 0 ? (
                    <SvgInfo />
                  ) : (
                    <SvgCheckmarkGrey
                      color={postalCode !== "" ? "#71C35D" : "#797979"}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  writeAddress: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderRadius: 40,
    height: 40,
    fontSize: 14,
    paddingLeft: 12,
    width: "100%",
  },
  writeStreet: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderRadius: 40,
    height: 40,
    paddingLeft: 12,
    fontSize: 14,
  },
});
