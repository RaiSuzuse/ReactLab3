import { Text, View, StyleSheet } from "react-native";
import React from "react";

const SummaryLabel = ({ value, title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={{ color: "grey" }}>{value}</Text>
    </View>
  );
};

export default SummaryLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderColor: "#3454D1",
    paddingVertical: 8,
  },
});
