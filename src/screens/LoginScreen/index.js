import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import AppLayout from "../AppLayout";
import withDismissKeyboardHOC from "../../hocs/DismissKeyboardHOC";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppLayout>
        <TextInput
          style={styles.nameInput}
          placeholder="Seu nome" />
      </AppLayout>
    );
  }
}

const styles = StyleSheet.create({
  nameInput: {
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 48,
    color: 'white',
    marginTop: 10
  }
});
