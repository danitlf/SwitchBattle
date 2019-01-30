import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

export default (moveIndicator = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Movimentos:</Text>
            <View style={styles.moveBox}>
                <Text style={styles.moveValue}>{props.moves}</Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 4
    },
    label: {
        color: COLORS.primaryColor,
        fontSize: 20,
        fontWeight: "600"
    },
    moveBox: {
        marginLeft: 10
    },
    moveValue: {
        color: COLORS.primaryColor,
        fontSize: 20,
        fontWeight: "900"
    }
});
