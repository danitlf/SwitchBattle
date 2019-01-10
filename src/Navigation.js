import React from 'react';
import { LoginScreen, MainScreen } from './screens';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Main: MainScreen
    },
    {
        initialRouteName: 'Login',
        headerMode: 'screen'
    }
);

export default createAppContainer(AppNavigator);