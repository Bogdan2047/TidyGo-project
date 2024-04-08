import React, { useState, useEffect } from "react";
import { Calendar } from "react-native-calendars";
import { View } from "react-native";

const CalendarMod = (props) => {
  const {
    openFor,
    setSelectedDate,
    selectedDate,
    selectedDates,
    setSelectedDates,
  } = props;

  const onDaySelect = (day) => {
    const newSelectedDate = day.dateString;

    if (openFor === "date") {
      setSelectedDate(newSelectedDate);
      if (setSelectedDates) {
        setSelectedDates({
          [newSelectedDate]: { selected: true, selectedColor: "#00adf5" },
        });
      }
    } else {
      const newMarkings = { ...selectedDates };
      if (newMarkings[newSelectedDate]) {
        delete newMarkings[newSelectedDate];
      } else {
        newMarkings[newSelectedDate] = {
          selected: true,
          selectedColor: "#00adf5",
        };
      }
      setSelectedDates(newMarkings);
    }
  };

  // useEffect(() => {
  //   if (setCalendarDate) {
  //   }
  //   if (setNumberWeek) {
  //     const dates = Object.keys(selectedDates);
  //   }
  // }, [selectedDate, selectedDates]);

  // Подготавливаем markedDates для календаря
  const markedDates =
    openFor === "date"
      ? {
          [selectedDate]: { selected: true, selectedColor: "#00adf5" },
        }
      : selectedDates;

  return (
    <View>
      <Calendar
        current={Date()}
        onDayPress={onDaySelect}
        hideExtraDays={true}
        showWeekNumbers={true}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "blue",
          indicatorColor: "blue",
        }}
      />
    </View>
  );
};

export default CalendarMod;
