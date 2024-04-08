import { View } from "react-native";

export const Card = ({ children }) => {
  return (
    <View style={{ paddingTop: 8 }}>
      <View
        style={{
          minHeight: 58,
          borderWidth: 1,
          borderColor: "rgba(76, 94, 255, 0.4)",
          borderRadius: 16,
          justifyContent: "center",
          backgroundColor: "white",
          padding: 12,
        }}
      >
        {children}
      </View>
    </View>
  );
};
