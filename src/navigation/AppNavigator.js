import React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthScreen from "../screens/AuthScreen";
import { Congratulations } from "../screens/Congratulations";
import { MainPage } from "../screens/MainPage";
import { OrderDetails } from "../screens/OrderDetails";
import { CreatingOrder } from "../screens/CreatingOrder";
import { Employee } from "../screens/Employee";
import { CheckOrder } from "../screens/CheckOrder";
import { TrackingOnMap } from "../screens/TrackingOnMap";
import { Chats } from "../screens/Chats";
import { Account } from "../screens/Account";
import { ChatScreen } from "../screens/ChatScreen";
import { MyInfo } from "../screens/MyInfo";
import { Language } from "../screens/Language";
import { SupportCenter } from "../screens/SupportCenter";

import SvgMainNav from "../svg/mainNav";
import SvgChatNav from "../svg/chatNav";
import SvgProfileNav from "../svg/profileNav";
import LoginScreen from "../screens/LoginScreen";
import RegistrationPage from "../screens/Registration";
import { useSelector } from "react-redux";
import { TermsOfUse } from "../screens/TermsOfUse";
import { MapScreen } from "../screens/MapScreen";
import { ExtraChatWithEmployee } from "../screens/ExtraChatWithEmployee";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppContainer() {
  const navigationRef = useNavigationContainerRef();

  const user = useSelector((state) => state.user.user);

  const CreatingOrederScreenWrapper = () => {
    return <CreatingOrder />;
  };

  const AccountScreenWrapper = () => {
    return <Account user={user} />;
  };

  const MainPageScreenWrapper = () => {
    return <MainPage />;
  };
  const MyInfoScreenWrapper = () => {
    return <MyInfo user={user} />;
  };

  const TabRoot = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 88,
            paddingBottom: 40,
            paddingTop: 1,
          },
        }}
      >
        <Tab.Screen
          name="Orders"
          component={MainPage}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <SvgMainNav color={focused ? "#4C5EFF" : "#5F5F5F"} />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <SvgChatNav color={focused ? "#4C5EFF" : "#5F5F5F"} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreenWrapper}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <SvgProfileNav color={focused ? "#4C5EFF" : "#5F5F5F"} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {user !== null ? (
          <Stack.Group>
            <Stack.Screen
              name="TabRoot"
              component={TabRoot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={MainPageScreenWrapper}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderDetails"
              component={OrderDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreatingOrder"
              component={CreatingOrederScreenWrapper}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Employee"
              component={Employee}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrackingOnMap"
              component={TrackingOnMap}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CheckOrder"
              component={CheckOrder}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ExtraChat"
              component={ExtraChatWithEmployee}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MyInfo"
              component={MyInfoScreenWrapper}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Language"
              component={Language}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SupportCenter"
              component={SupportCenter}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegistrationPage} />
            <Stack.Screen name="Congrat" component={Congratulations} />
            <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
