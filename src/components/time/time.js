import { useState } from "react";
import { Button, View, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const TimePicker = ({ setGetTime }) => {
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShow(Platform.OS === "ios");
    setTime(currentTime);

    setGetTime(currentTime.toISOString());
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={() => showMode("time")}
        title="Choice Time"
        color="#4C5EFF"
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={mode}
          is24Hour={false}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
          style={styles.timePicker}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timePicker: {
    width: 320,
    height: 180,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TimePicker;
