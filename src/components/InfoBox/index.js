import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";

const InfoBox = ({ title, text, style }) => (
    <View style={[styles.containerInfoBox, style]}>
        <Text style={styles.infoBoxLabel}>{title}</Text>
        <View style={styles.containerInfoBoxValue}>
            <Text style={styles.infoBoxValue}>{text}</Text>
        </View>
    </View>
);

export default InfoBox;

const styles = StyleSheet.create({
    containerInfoBox: {
        justifyContent: "center",
        display: "flex",
        alignItems: "center"
    },
    containerInfoBoxValue: {
        backgroundColor: COLORS.secondColor,
        width: 250,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        borderRadius: 4
    },
    infoBoxLabel: {
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        marginBottom: 5
    },
    infoBoxValue: {
        color: "white",
        fontSize: 25,
        fontWeight: "600"
    }
});
