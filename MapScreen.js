import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
// import ZoomableImage from "./ZoomableImage";

// import React from "react";
// import { View, Text, Button, Image, StyleSheet } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

export default function Screen1({ navigation }) {
    return (
        <View>
            <Text>This is Askari 5 Map</Text>
            {/* <div style={{ overflow: "auto" }}> */}
            <Image
                source={require("./assets/img/map.jpeg")}
                style={styles.mapImage}
            ></Image>
            {/* </div> */}
            {/* <ZoomableImage /> */}
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
        overflow: "auto",
    },
});
