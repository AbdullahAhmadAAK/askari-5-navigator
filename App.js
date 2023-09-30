import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import HomeScreen from "./HomeScreen";
import ListingScreen from "./ListingScreen";
import MapScreen from "./MapScreen";

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1">
                <Stack.Screen name="Screen1" component={HomeScreen} />
                <Stack.Screen name="Screen2" component={ListingScreen} />
                <Stack.Screen name="Screen3" component={MapScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
