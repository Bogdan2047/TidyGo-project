import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Popup = ({ title }) => {
  return (
    <View style={{ justifyContent: "center" }}>
      <View style={styles.popup}>
        <Text style={styles.popupText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popup: {
    width: 170,
    height: 130,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    borderColor: "#4C5EFF",
    transform: [{ translateY: 300 }], 
  },
  popupText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Popup;
