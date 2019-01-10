import React, { Component } from "react";
import { MainScreen, LoginScreen } from "./screens";
import Navigation from "./Navigation";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigation />
    );
  }
}