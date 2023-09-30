import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

export default function Screen1({ navigation }) {
    return (
        <View>
            <Text>This is Askari 5 Map</Text>
            <Image
                source={require("./assets/img/map.jpeg")}
                style={styles.storeImage}
            ></Image>
            <Button
                title="Home"
                onPress={() => navigation.navigate("Screen1")}
            />
            <Button
                title="Listing"
                onPress={() => navigation.navigate("Screen2")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mapImage: {
        width: 600,
        height: 600,
        display: "inline",
    },
});
