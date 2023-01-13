import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local imports
import Main from "./src/screens/Main/Main";
import ContactUs from "./src/screens/ContactUs/ContactUs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Contact Us" component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
