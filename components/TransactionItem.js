import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function TransactionItem({ data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TransactionDetails", data)}
      style={{ paddingTop: 8 }}
    >
      <View style={styles.container}>
        <Text>{data.transactionName}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#3454D1" }}>
            ${data.transactionPrice.toFixed(2)}
          </Text>
          <Entypo name="chevron-right" size={24} color="#3454D1" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
});
