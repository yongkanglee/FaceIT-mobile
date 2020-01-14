import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, YellowBox } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MaskedView from "@react-native-community/masked-view";
import LoginScreen from "./components/LoginScreen";
import ListScreen from "./components/ListScreen";
import SettingScreen from "./components/SettingScreen";
import ForgetPasswordScreen from "./components/ForgetPasswordScreen";
import ConfirmationScreen from "./components/ConfirmationScreen";
const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: false
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      header: false
    }
  },

  Forget: {
    screen: ForgetPasswordScreen,
    navigationOptions: {
      header: false
    }
  },

  Confirmation: {
    screen: ConfirmationScreen,
    navigationOptions: {
      header: false
    }
  }
});

const App = createAppContainer(MainNavigator);
export default App;
