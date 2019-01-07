import React, { Component } from "react";
import { MainScreen, LoginScreen } from "./screens";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginScreen />
    );
  }
}