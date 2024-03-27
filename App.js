import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import TransactionDetail from "./Page/TransactionDetail";
import SummaryPage from "./Page/SummaryPage";
import TransactionList from "./Page/TransactionList";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#3454D1",
        }}
      >
        <Tab.Screen
          name="TransactionStack"
          component={TransactionStack}
          options={{
            header: () => null,
            title: "Transactions",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-sharp" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SummaryPage"
          component={SummaryPage}
          options={{
            title: "Summary",
            headerTitle: "Summary",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function TransactionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionList"
        component={TransactionList}
        options={{
          headerTitle: "Transactions List",
        }}
      />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetail}
        options={{
          headerBackTitle: "Back",
          headerTitle: "Transactions Details",
        }}
      />
    </Stack.Navigator>
  );
}
