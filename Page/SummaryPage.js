import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SummaryLabel from "../components/SummaryLabel";

export default function SummaryPage({ transactionState }) {
  const totalNumberOfTransactions = transactionState.length;
  let totalBalance = 0;
  for (let i = 0; i < transactionState.length; i++) {
    totalBalance += transactionState[i].transactionPrice;
  }

  const transactionPrices = transactionState.map(
    (transaction) => transaction.transactionPrice
  );

  let highestSpendingPrice = Math.max(...transactionPrices);
  let lowestSpendingPrice = Math.min(...transactionPrices);

  let highestSpendingTransaction = transactionState.find(
    (transaction) => transaction.transactionPrice === highestSpendingPrice
  );
  let lowestSpendingTransaction = transactionState.find(
    (transaction) => transaction.transactionPrice === lowestSpendingPrice
  );

  let highestSpending = highestSpendingTransaction.transactionPrice;
  let lowestSpending = lowestSpendingTransaction.transactionPrice;

  let highestSpendingName = highestSpendingTransaction.transactionName;
  let lowestSpendingName = lowestSpendingTransaction.transactionName;
  return (
    <View style={styles.container}>
      <SummaryLabel title="Transactions" value={totalNumberOfTransactions} />
      <SummaryLabel title="Balance" value={`$${totalBalance.toFixed(2)}`} />
      <Text style={styles.subHeader}>High Spending</Text>
      <SummaryLabel
        title={highestSpendingName}
        value={`$${highestSpending.toFixed(2)}`}
      />
      <Text style={styles.subHeader}>Low Spending</Text>
      <SummaryLabel
        title={lowestSpendingName}
        value={`$${lowestSpending.toFixed(2)}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
  subHeader: {
    color: "#3454D1",
    paddingHorizontal: 8,
    fontWeight: "bold",
    marginTop: 4,
    fontSize: 16,
  },
});
