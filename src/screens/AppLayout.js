import React from 'react';
import { StyleSheet, View } from 'react-native';

const AppLayout = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#334856"
  }
});

export default AppLayout;