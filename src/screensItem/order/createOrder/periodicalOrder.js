import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import { Card } from "../../../components/card/card";
import SvgPeriod from "../../../svg/period";
import SvgCheckMark from "../../../svg/ckeckmark";
import CalendarMod from "../../../components/calendar/calendar";

export const PeriodicalOrder = ({ setDaysWeekList }) => {
  const [openSelectDay, setOpenSelectDay] = useState(false);
  const [openSelectSchedule, setOpenSelectSchedule] = useState(false);

  const [selectedDates, setSelectedDates] = useState({});

  const [dayWeek, setDayWeek] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });

  useEffect(() => {
    if (selectedDates) {
      const selectedDateKeys = Object.keys(selectedDates);
      let periodClean = {
        days: dayWeek,
        numberWeek: selectedDateKeys,
      };
    setDaysWeekList(periodClean);

    }
  }, [dayWeek, selectedDates]);

  const toggleDay = (day) => {
    setDayWeek((prevDays) => ({
      ...prevDays,
      [day]: !prevDays[day],
    }));
  };

  return (
    <View style={{ paddingTop: 24 }}>
      <View>
        <View
          style={{
            height: 58,
            borderWidth: 1,
            borderColor: "rgba(76, 94, 255, 0.4)",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
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
                <SvgPeriod />
              </View>
              <View style={{ paddingLeft: 8 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  Periodical order
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ paddingTop: 8 }}>
        <TouchableOpacity
          style={{
            minHeight: 58,
            borderWidth: 1,
            borderColor: "rgba(76, 94, 255, 0.4)",
            borderRadius: 16,
            alignItems: "center",
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 12,
          }}
          onPress={() => setOpenSelectDay((prev) => !prev)}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ paddingLeft: 12 }}>
              <Text>Select days</Text>
            </View>
          </View>
          <View>
            <View>
              <Image
                source={
                  openSelectDay
                    ? require("../../../../assets/images/up2.png")
                    : require("../../../../assets/images/down2.png")
                }
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {openSelectDay && (
        <View>
          <Card>
            <View>
              {Object.entries(dayWeek).map(([day, isEnabled]) => (
                <TouchableOpacity
                  style={{ paddingTop: day === "Sunday" ? 0 : 16 }}
                  key={day}
                  onPress={() => toggleDay(day)}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <SvgCheckMark
                        color={isEnabled ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"}
                      />
                    </View>
                    <View style={{ paddingLeft: 12 }}>
                      <Text style={{ color: isEnabled ? "black" : "#797979" }}>
                        {day}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </Card>
        </View>
      )}

      <View style={{ paddingTop: 8 }}>
        <TouchableOpacity
          style={{
            minHeight: 58,
            borderWidth: 1,
            borderColor: "rgba(76, 94, 255, 0.4)",
            borderRadius: 16,
            alignItems: "center",
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 12,
          }}
          onPress={() => setOpenSelectSchedule((prev) => !prev)}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ paddingLeft: 12 }}>
              <Text>Set schedule</Text>
            </View>
          </View>
          <View>
            <View>
              <Image
                source={
                  openSelectSchedule
                    ? require("../../../../assets/images/up2.png")
                    : require("../../../../assets/images/down2.png")
                }
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        {openSelectSchedule && (
          <View>
            <Card>
              <CalendarMod
                openFor="periodical"
                setSelectedDates={setSelectedDates}
                selectedDates={selectedDates}
              />
            </Card>
          </View>
        )}
      </View>
    </View>
  );
};
