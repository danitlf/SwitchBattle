import React, { Component } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const NavigationButton = ({ title, onPress, source }) => (
    <TouchableOpacity style={styles.buttonMenu} onPress={onPress}>
        <Image source={source} style={styles.buttonImg} />
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

export default NavigationButton;

const styles = StyleSheet.create({
    buttonMenu: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 10,
        left: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonImg: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    buttonText: {
        fontSize: 11,
        color: '#fff'
    }
});
