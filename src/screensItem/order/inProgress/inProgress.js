import { View, FlatList } from "react-native";
import { InProgressItem } from "./inProgressItem";

export const InProgress = ({ ordersData }) => {
  const renderItemInProgress = ({ item }) => {
    if (!item.completed) {
      return <InProgressItem item={item} />;
    }
  };

  return (
    <View>
      <FlatList
        data={ordersData}
        renderItem={renderItemInProgress}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View style={{ height: 170 }} />}
      />
    </View>
  );
};
