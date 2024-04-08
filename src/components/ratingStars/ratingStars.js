import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RatingStars = ({ totalStars = 5, size }) => {
  const [rating, setRating] = useState(0);
  const [sizeStar, setSizeStar] = useState(24);

  const handleStarPress = (newRating) => {
    setRating(newRating);
  };

  useEffect(() => {
    if (size) {
      setSizeStar(size);
    }
  }, []);

  return (
    <View style={styles.container}>
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <TouchableOpacity
            key={ratingValue}
            onPress={() => handleStarPress(ratingValue)}
            activeOpacity={0.7}
          >
            <AntDesign
              name={ratingValue <= rating ? "star" : "staro"}
              size={sizeStar}
              color={ratingValue <= rating ? "#FFD700" : "#C0C0C0"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RatingStars;
