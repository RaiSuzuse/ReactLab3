import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function AddTransaction({ navigation }) {
  const [transactionName, setTransactionName] = useState("");
  const [transactionLocation, setTransactionLocation] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [transactionPrice, setTransactionPrice] = useState("");

  const onSubmit = () => {
    const docRef = doc(collection(db, "transactionState"));
    setDoc(docRef, {
      id: docRef.id,
      transactionPrice: Number(transactionPrice),
      transactionName: transactionName,
      transactionLocation: transactionLocation,
      transactionDate: transactionDate,
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={{ padding: 12, gap:12 }}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTransactionName(text)}
        placeholder="Enter transaction name"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter transaction location"
        onChangeText={(text) => setTransactionLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter transaction date"
        onChangeText={(text) => setTransactionDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter transaction price"
        inputMode="numeric"
        onChangeText={(text) => setTransactionPrice(text)}
      />
      <Button title={"Add Transaction"} onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderBottomWidth: 2,
    borderColor: "#3454D1",
  },
});
