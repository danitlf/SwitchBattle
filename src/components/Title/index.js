import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ value, ...props }) => (
    <Text style={styles.title} {...props}>{value}</Text>
);

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        marginBottom: 5
    }
});
