import React, { useState, useEffect } from "react";
import Registration from "../components/register";
import { StyleSheet, View, Alert } from "react-native";

export default function RegistrationPage() {
  return (
    <View style={styles.containerView}>
      <Registration />
    </View>
  );
}
const styles = StyleSheet.create({
  containerView: { flex: 1 },
  textContainer: { textAlign: "center" },
});
