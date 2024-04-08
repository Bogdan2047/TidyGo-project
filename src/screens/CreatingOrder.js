import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SelectType } from "../screensItem/order/createOrder/selectType";
import { SelectOptions } from "../screensItem/order/createOrder/selectOptions";
import { AddAddress } from "../screensItem/order/createOrder/addAddress";
import { Approximate } from "../screensItem/order/createOrder/approximate";
import { DateAndTime } from "../screensItem/order/createOrder/dateAndTime";
import { PeriodicalOrder } from "../screensItem/order/createOrder/periodicalOrder";
import { DescriptionOrder } from "../screensItem/order/createOrder/descriptionOrder";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SvgBack from "../svg/back";

import { useDispatch, useSelector } from "react-redux";
import { createOrders } from "../store/orders/createOrderSlice";

export const CreatingOrder = () => {
  const [dataCreatedOrder, setDataCreatedOrder] = useState({
    id: 0,
    typeCleaning: {
      typeBuild: null,
      countRooom: null,
    },
    cleningOptions: null,
    addressData: null,
    m2: 0,
    dateAndTime: {
      date: "",
      time: "",
    },
    periodicalOrder: null,
    orderDescription: "",
    employee: null,
    payment: false,
    completed: false,
  });

  const [typeCleaning, setTypeCleaning] = useState();
  const navigation = useNavigation();

  const [typeBuld, setTypeBuild] = useState("");
  const [typeRooms, setTypeRooms] = useState("");

  const [cleanOptionsList, setCleanOptionsList] = useState(null);
  const [addAddressList, setAddressList] = useState(null);
  const [cleanArea, setCleanArea] = useState(0);
  const [cleanDate, setCleanDate] = useState("");
  const [daysWeekList, setDaysWeekList] = useState(null);
  const [descriptionText, setDescriptionText] = useState("");
  const [switchButtonColor, setSwitchButtonColor] = useState(false);

  const randomNumber = Math.floor(100000 + Math.random() * 900000);

  const dispatch = useDispatch();

  useEffect(() => {
    setDataCreatedOrder((prevState) => ({
      ...prevState,
      id: randomNumber,
    }));
  }, []);

  useEffect(() => {
    setDataCreatedOrder((prevState) => ({
      ...prevState,
      typeCleaning: {
        ...prevState.typeCleaning,
        typeBuild: typeBuld,
      },
    }));
  }, [typeBuld]);

  useEffect(() => {
    setDataCreatedOrder((prevState) => ({
      ...prevState,
      typeCleaning: {
        ...prevState.typeCleaning,
        countRooom: typeRooms,
      },
    }));
  }, [typeRooms]);

  useEffect(() => {
    setDataCreatedOrder((prevState) => ({
      ...prevState,
      cleningOptions: cleanOptionsList,
    }));
  }, [cleanOptionsList]);

  useEffect(() => {
    setDataCreatedOrder((prevState) => ({
      ...prevState,
      addressData: addAddressList,
    }));
  }, [addAddressList]);

  useEffect(() => {
    setDataCreatedOrder((prevState) => ({
      ...prevState,
      m2: cleanArea,
    }));
  }, [cleanArea]);

  useEffect(() => {
    setDataCreatedOrder((prevState) => ({
      ...prevState,
      dateAndTime: {
        ...prevState.dateAndTime,
        date: cleanDate,
      },
    }));
  }, [cleanDate]);

  useEffect(() => {
    setDataCreatedOrder((prevState) => ({
      ...prevState,
      periodicalOrder: daysWeekList,
    }));
  }, [daysWeekList]);

  useEffect(() => {
    setDataCreatedOrder((prevState) => ({
      ...prevState,
      orderDescription: descriptionText,
    }));
  }, [descriptionText]);

  const sendDataInStore = () => {
    if (
      dataCreatedOrder.id !== 0 &&
      dataCreatedOrder.typeCleaning.typeBuild !== null &&
      dataCreatedOrder.typeCleaning.countRooom !== null &&
      dataCreatedOrder.cleningOptions !== null &&
      dataCreatedOrder.addressData !== null &&
      dataCreatedOrder.m2 !== 0 &&
      dataCreatedOrder.dateAndTime.date.date !== "" &&
      dataCreatedOrder.dateAndTime.date.time !== "" &&
      dataCreatedOrder.orderDescription !== ""
    ) {
      dispatch(createOrders(dataCreatedOrder));
      navigation.navigate("Employee");
    }
  };

  useEffect(() => {
    if (
      dataCreatedOrder.id !== 0 &&
      dataCreatedOrder.typeCleaning.typeBuild !== null &&
      dataCreatedOrder.typeCleaning.countRooom !== null &&
      dataCreatedOrder.cleningOptions !== null &&
      dataCreatedOrder.addressData !== null &&
      dataCreatedOrder.m2 !== 0 &&
      dataCreatedOrder.dateAndTime.date.date !== "" &&
      dataCreatedOrder.dateAndTime.date.time !== "" &&
      dataCreatedOrder.orderDescription !== ""
    ) {
      setSwitchButtonColor(true);
    }
  }, [
    dataCreatedOrder.id,
    dataCreatedOrder.typeCleaning.typeBuild,
    dataCreatedOrder.typeCleaning.countRooom,
    dataCreatedOrder.cleningOptions,
    dataCreatedOrder.addressData,
    dataCreatedOrder.m2,
    dataCreatedOrder.dateAndTime.date.date,
    dataCreatedOrder.dateAndTime.date.time,
    dataCreatedOrder.periodicalOrder,
    dataCreatedOrder.orderDescription,
  ]);

  // console.log("dataCreatedOrder", dataCreatedOrder);

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: "#F2F2F2",
      }}
    >
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <View style={{ width: "90%" }}>
            <View
              style={{
                paddingTop: 45,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 26,
              }}
            >
              <TouchableOpacity
                style={{ width: 40 }}
                onPress={() => navigation.navigate("Orders")}
              >
                <SvgBack />
              </TouchableOpacity>
              <View>
                <Text
                  style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}
                >
                  Creating an order
                </Text>
              </View>
              <View style={{ width: 40 }}></View>
            </View>
            <View>
              <SelectType
                setTypeCleaningBuild={setTypeCleaning}
                setTypeBuild={setTypeBuild}
                typeBuld={typeBuld}
                setTypeRooms={setTypeRooms}
              />
            </View>
            <View>
              <SelectOptions
                typeCleaning={typeCleaning}
                setCleanOptionsList={setCleanOptionsList}
              />
            </View>
            <View>
              <AddAddress setAddressList={setAddressList} />
            </View>
            <View>
              <Approximate setCleanArea={setCleanArea} />
            </View>
            <View>
              <DateAndTime setCleanDate={setCleanDate} />
            </View>
            <View>
              <PeriodicalOrder setDaysWeekList={setDaysWeekList} />
            </View>
            <View>
              <DescriptionOrder setDescriptionText={setDescriptionText} />
            </View>
            <View style={{ paddingTop: 24, paddingBottom: 10 }}>
              <TouchableOpacity
                style={{
                  height: 50,
                  borderWidth: 1,
                  borderColor: "rgba(76, 94, 255, 0.4)",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: switchButtonColor ? "#4C5EFF" : "#EEF0FF",
                }}
                onPress={() => sendDataInStore()}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: switchButtonColor ? "white" : "black",
                    }}
                  >
                    Continue
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
