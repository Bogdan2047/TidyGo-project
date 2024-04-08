import React from "react";
import AppContainer from "./src/navigation/AppNavigator";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#ecf0f1"
          barStyle="dark-content"
          translucent={true}
        />
        <AppContainer />
      </View>
    </Provider>
  );
}
