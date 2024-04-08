import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import TransactionDetail from "./Page/TransactionDetail";
import SummaryPage from "./Page/SummaryPage";
import TransactionList from "./Page/TransactionList";
import { db } from "./firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import AddTransaction from "./Page/AddTransaction";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Route() {
  const [transactionState, setTransactionState] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "transactionState"), (snapshot) => {
      if (snapshot.docs.length > 0) {
        const state = [];
        snapshot.docs.forEach((item) => state.push(item.data()));
        setTransactionState(state);
      }
    });

    return () => unsub();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#3454D1",
        }}
      >
        <Tab.Screen
          name="TransactionStack"
          options={{
            header: () => null,
            title: "Transactions",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-sharp" size={size} color={color} />
            ),
          }}
        >
          {(props) => (
            <TransactionStack {...props} transactionState={transactionState} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="SummaryPage"
          options={{
            title: "Summary",
            headerTitle: "Summary",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-outline" size={size} color={color} />
            ),
          }}
        >
          {(props) => (
            <SummaryPage {...props} transactionState={transactionState} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function TransactionStack({ transactionState }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionList"
        options={{
          headerTitle: "Transactions List",
        }}
      >
        {(props) => (
          <TransactionList {...props} transactionState={transactionState} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetail}
        options={{
          headerBackTitle: "Back",
          headerTitle: "Transactions Details",
        }}
      />
      <Stack.Screen
        name="AddTransaction"
        component={AddTransaction}
        options={{
          headerBackTitle: "Back",
          headerTitle: "Add Transaction",
        }}
      />
    </Stack.Navigator>
  );
}
