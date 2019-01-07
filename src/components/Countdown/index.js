import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

const Countdown = ({ currentTime }) => (
  <Text style={styles.text}>
    {currentTime}
  </Text>
);

export default Countdown;

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 10
  }
});