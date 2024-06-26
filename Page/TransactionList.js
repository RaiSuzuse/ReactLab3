import { Button, FlatList, StyleSheet, View } from "react-native";
import React from "react";
import TransactionItem from "../components/TransactionItem";

export default function TransactionList({ transactionState, navigation }) {
  const onAddTransactionPress = () => {
    navigation.navigate("AddTransaction");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 32,
      }}
    >
      <FlatList
        data={transactionState}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem data={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
      <Button title={"Add Transaction"} onPress={onAddTransactionPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: "#3454D1",
    marginVertical: 8,
  },
});
