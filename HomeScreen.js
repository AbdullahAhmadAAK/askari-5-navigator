import React from "react";
import { View, Text, Button } from "react-native";

export default function Screen1({ navigation }) {
    return (
        <View>
            <Text>This is Home Screen</Text>
            <Button
                title="Go to Listing"
                onPress={() => navigation.navigate("Screen2")}
            />
            <Button
                title="Go to Map"
                onPress={() => navigation.navigate("Screen3")}
            />
        </View>
    );
}
