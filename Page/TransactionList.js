import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import TransactionItem from "../components/TransactionItem";
import transactionState from "../transactionState";

export default function TransactionList() {
  return (
    <FlatList
      data={transactionState}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionItem data={item} />}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  );
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: "#3454D1",
    marginVertical: 8,
  },
});
