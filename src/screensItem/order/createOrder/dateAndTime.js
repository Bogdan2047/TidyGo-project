import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Card } from "../../../components/card/card";
import CalendarMod from "../../../components/calendar/calendar";
import TimePicker from "../../../components/time/time";
import Svg1 from "../../../svg/1";
import SvgDate from "../../../svg/date";
import SvgCheckMark from "../../../svg/ckeckmark";

export const DateAndTime = ({ setCleanDate }) => {
  const [urgent, setUrgent] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  const [showTime, setShowTime] = useState(false);
  const [getTime, setGetTime] = useState("");

  const [selectedDate, setSelectedDate] = useState("");


  useEffect(() => {
    const date = new Date(getTime);
    const formattedTime = date.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    let dateAndTimeData = {
      date: selectedDate,
      time: formattedTime,
      urgent,
    };
    setCleanDate(dateAndTimeData);
  }, [selectedDate, urgent, getTime]);

  return (
    <View style={{ paddingTop: 24 }}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "column" }}>
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
                  <SvgDate />
                </View>
                <View style={{ paddingLeft: 8 }}>
                  <Text style={{ fontSize: 18, fontWeight: 500 }}>
                    Date and time
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 8 }}>
          <View
            style={{
              minHeight: 58,
              borderWidth: 1,
              borderColor: "rgba(76, 94, 255, 0.4)",
              borderRadius: 16,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              paddingVertical: 12,
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
              <View style={{ flexDirection: "column", width: "100%" }}>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#EEF0FF",
                      height: 40,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: "rgba(76, 94, 255, 0.4)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingHorizontal: 12,
                    }}
                    onPress={() => setOpenCalendar((prev) => !prev)}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#797979",
                        }}
                      >
                        Select Date
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={
                          openCalendar
                            ? require("../../../../assets/images/up2.png")
                            : require("../../../../assets/images/down2.png")
                        }
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                {openCalendar && (
                  <View>
                    <CalendarMod
                      openFor="date"
                      setSelectedDate={setSelectedDate}
                      selectedDate={selectedDate}
                    />
                  </View>
                )}
                <View style={{ paddingTop: 16 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#EEF0FF",
                      height: 40,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: "rgba(76, 94, 255, 0.4)",
                      paddingHorizontal: 12,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    onPress={() => setShowTime((prev) => !prev)}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          color: "#797979",
                        }}
                      >
                        Select time
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={require("../../../../assets/images/down2.png")}
                      />
                    </View>
                  </TouchableOpacity>
                  {showTime && (
                    <View>
                      <Card>
                        <View>
                          <TimePicker
                            setShowTime={setShowTime}
                            showTime={showTime}
                            setGetTime={setGetTime}
                          />
                        </View>
                      </Card>
                    </View>
                  )}
                </View>
                <View style={{ paddingTop: 16 }}>
                  <TouchableOpacity
                    onPress={() => {
                      setUrgent((prev) => !prev);
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View>
                          <SvgCheckMark
                            color={
                              urgent ? "#4C5EFF" : "rgba(76, 94, 255, 0.4)"
                            }
                          />
                        </View>
                        <View style={{ paddingLeft: 12 }}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 500,
                              color: urgent ? "black" : "#5F5F5F",
                            }}
                          >
                            Urgent cleaning
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Svg1 color={urgent ? "#1E2022" : "#D3D3D3"} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
