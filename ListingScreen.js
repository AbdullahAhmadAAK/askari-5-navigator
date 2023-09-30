import {
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Button,
    Linking,
} from "react-native";

import React, { useState } from "react";

export default function Screen1({ navigation }) {
    // Sample data for stores
    const stores = [
        { id: 1, name: "Store 1", contact: "123-456-7890" },
        { id: 2, name: "Store 2", contact: "987-654-3210" },
        { id: 3, name: "Store 3", contact: "555-555-5555" },
        { id: 4, name: "Store 4", contact: "111-222-3333" },
        { id: 5, name: "Store 5", contact: "999-888-7777" },
        // Add more stores if needed
    ];

    const handleStorePress = (storeId) => {
        // Toggle expansion state
        setExpandedStore((prevState) =>
            prevState === storeId ? null : storeId
        );
    };

    const [expandedStore, setExpandedStore] = useState(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {stores.map((store) => {
                const handlePhoneCall = () => {
                    Linking.openURL(`tel:${store.contact}`);
                };
                return (
                    <TouchableOpacity
                        key={store.id}
                        onPress={() => handleStorePress(store.id)}
                        style={[
                            styles.storeContainer,
                            {
                                width:
                                    expandedStore === store.id ? "100%" : "50%",
                            },
                        ]}
                    >
                        <Image
                            source={require("./assets/img/kirana-bccl.webp")}
                            style={styles.storeImage}
                        ></Image>
                        <Text style={styles.storeName}>{store.name}</Text>
                        {expandedStore === store.id && (
                            <Text
                                style={styles.contactNumber}
                                onPress={handlePhoneCall}
                            >
                                {store.contact}
                            </Text>
                        )}
                    </TouchableOpacity>
                );
            })}

            <Button
                title="Home"
                onPress={() => navigation.navigate("Screen1")}
            />
            <Button
                title="Map"
                onPress={() => navigation.navigate("Screen3")}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", // Horizontal layout for store containers
        flexWrap: "wrap", // Wrap items to the next row if needed
    },
    storeContainer: {
        backgroundColor: "lightblue",
        padding: 10,
        margin: 5,
        borderRadius: 5,
        alignItems: "flex-start", // Align content to the left
    },
    storeImage: {
        width: 100,
        height: 100,
        display: "inline",
    },
    storeName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    contactNumber: {
        fontSize: 16,
        backgroundColor: "green",
        padding: 5,
    },
});
