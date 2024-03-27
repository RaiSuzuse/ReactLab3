import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TransactionDetail = ({ route }) => {
  const transactionName = route.params.transactionName || "";
  const transactionDate = route.params.transactionDate || "";
  const transactionLocation = route.params.transactionLocation || "";
  const transactionPrice = route.params.transactionPrice || 0;

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.price}>${transactionPrice.toFixed(2)}</Text>
        <Text style={styles.transactionName}>{transactionName}</Text>
        <Text style={styles.transactionLocation}>{transactionLocation}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text>Transaction Date</Text>
        <Text>{transactionDate}</Text>
      </View>
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 36,
    backgroundColor: "#3454D1",
  },
  transactionName: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: 32,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  transactionLocation: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
    color: "white",
  },
  bottomContainer: {
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },
});
