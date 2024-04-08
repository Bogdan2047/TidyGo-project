import { useState } from "react";
import { View, FlatList } from "react-native";

import { CompletedItem } from "./completedItem";

export const Completed = ({ ordersData }) => {
  const renderItem = ({ item }) => {
    if (item.completed) {
      return <CompletedItem item={item} />;
    }
  };

  return (
    <FlatList
      data={ordersData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListFooterComponent={<View style={{ height: 170 }} />}
    />
  );
};
