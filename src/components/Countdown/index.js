import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/index";

const Countdown = ({ currentTime, ...props }) => (
    <View {...props} style={styles.containerCounter}>
        <Text style={styles.text}>{currentTime}</Text>
    </View>
);

export default Countdown;

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        color: COLORS.primaryColor,
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 15,
        marginRight: 15
    },
    containerCounter: {
        backgroundColor: "white",
        borderRadius: 10
    }
});
