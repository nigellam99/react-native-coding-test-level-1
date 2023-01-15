import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local imports
import Main from "./src/screens/Main/Main";
import ContactUs from "./src/screens/ContactUs/ContactUs";
import ViewCatalog from "./src/screens/ViewCatalog/ViewCatalog";
import ViewCatalogDetails from "./src/screens/ViewCatalog/ViewCatalogDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Contact Us" component={ContactUs} />
        <Stack.Screen name="View Catalog" component={ViewCatalog} />
        <Stack.Screen
          name="View Catalog Details"
          component={ViewCatalogDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
