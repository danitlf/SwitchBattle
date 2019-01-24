import React from "react";
import { MainScreen } from "./screens";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        Main: MainScreen
    },
    {
        initialRouteName: "Main",
        headerMode: "screen"
    }
);

export default createAppContainer(AppNavigator);
