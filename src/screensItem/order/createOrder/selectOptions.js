import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Dimensions,
  Alert,
  TextInput,
  Image,
  ActivityIndicator,
  Platform,
  Linking,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ForApartment } from "./cleaningOptions/forApartment";
import { useState } from "react";
import { ForTrimmingShrubs } from "./cleaningOptions/forTrimmingShrubs";
import { EndOfTenancyCleaning } from "./cleaningOptions/endOfTenancyCleaning";
import { AfterBuildersCleaning } from "./cleaningOptions/afterBuildersCleaning";
import SvgOptions from "../../../svg/options";
import { HouseCleaning } from "./cleaningOptions/houseCleaning";
import { OfficeCleaning } from "./cleaningOptions/officeCleaning";

export const SelectOptions = ({ typeCleaning, setCleanOptionsList }) => {
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <View style={{ paddingTop: 24 }}>
      <View>
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
          onPress={() => setOpenOptions((prev) => !prev)}
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
                <SvgOptions />
              </View>
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  Select cleaning options
                </Text>
              </View>
            </View>
            <View>
              <Image
                source={
                  openOptions
                    ? require("../../../../assets/images/up2.png")
                    : require("../../../../assets/images/down2.png")
                }
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        {openOptions && (
          <View>
            {typeCleaning === "Apartment cleaning" && (
              <View>
                <ForApartment setCleanOptionsList={setCleanOptionsList} />
              </View>
            )}
            {typeCleaning === "Trimming shrubs" && (
              <View>
                <ForTrimmingShrubs setCleanOptionsList={setCleanOptionsList} />
              </View>
            )}
            {typeCleaning === "End of Tenancy Cleaning" && (
              <View>
                <EndOfTenancyCleaning
                  setCleanOptionsList={setCleanOptionsList}
                />
              </View>
            )}
            {typeCleaning === "After Builders Cleaning" && (
              <View>
                <AfterBuildersCleaning
                  setCleanOptionsList={setCleanOptionsList}
                />
              </View>
            )}
            {typeCleaning === "House cleaning" && (
              <View>
                <HouseCleaning setCleanOptionsList={setCleanOptionsList} />
              </View>
            )}
            {typeCleaning === "Office cleaning" && (
              <View>
                <OfficeCleaning setCleanOptionsList={setCleanOptionsList} />
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};
