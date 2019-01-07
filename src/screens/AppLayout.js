import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import withDismissKeyboardHOC from '../hocs/DismissKeyboardHOC';

const DismissableKeyboardView = withDismissKeyboardHOC(View);

const AppLayout = ({ children, ...props }) => (
  <DismissableKeyboardView style={styles.container} {...props}>
    <View style={styles.logoBox}>
      <Image
        style={styles.logo}
        source={require('../../assets/img/logo.png')} />
    </View>

    {children}
  </DismissableKeyboardView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#334856"
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  }
});

export default AppLayout;