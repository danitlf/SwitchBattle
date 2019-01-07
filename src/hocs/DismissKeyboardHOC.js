import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const withDismissKeyboardHOC = (Component) => (props) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} acessible={false}>
    <Component {...props} />
  </TouchableWithoutFeedback>
);

export default withDismissKeyboardHOC;