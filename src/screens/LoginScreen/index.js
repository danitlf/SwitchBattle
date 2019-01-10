import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, LayoutAnimation, Button } from "react-native";
import AppLayout from "../AppLayout";
import withDismissKeyboardHOC from "../../hocs/DismissKeyboardHOC";

export default class LoginScreen extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppLayout>
        <TextInput
          style={styles.nameInput}
          placeholder="Apelido" />

        <Button
          title="Próximo"
          onPress={() => this.props.navigation.navigate('Main')}
        />
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
