import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import SvgAdd from "../../svg/add";
import * as ImagePicker from "expo-image-picker";
import storage from "@react-native-firebase/storage";

export const UploadAvatar = ({ setAvatar, avatar }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (imageUri) => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const uniqueId = Date.now();
    const storageRef = storage().ref(`avatars/${uniqueId}.jpg`);

    try {
      await storageRef.put(blob);
      const url = await storageRef.getDownloadURL();
      console.log("Uploaded Image URL: ", url);
      setAvatar(url);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <View
      style={{
        height: "85%",
        justifyContent: "center",
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={{ alignItems: "center", position: "relative" }}>
          <View>
            <Image
              source={
                avatar
                  ? {
                      uri: avatar,
                    }
                  : require("../../../assets/images/defaultAvatar.png")
              }
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          </View>
          <TouchableOpacity onPress={pickImage}>
            <SvgAdd style={{ position: "absolute", bottom: 0, left: 40 }} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 40,
            alignItems: "center",
          }}
        >
          <View style={{ width: "65%" }}>
            <Text
              style={{ textAlign: "center", fontSize: 12, fontWeight: 300 }}
            >
              You can add your profile picture, or you can skip it and do it
              later.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
