import React from "react";
import { MainScreen, RankingScreen } from "./screens";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        Main: MainScreen,
        Ranking: RankingScreen
    },
    {
        initialRouteName: "Main",
        headerMode: "screen"
    }
);

export default createAppContainer(AppNavigator);
