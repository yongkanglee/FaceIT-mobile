import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  YellowBox,
  SwipeableListView
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MaskedView from "@react-native-community/masked-view";
import LoginScreen from "./components/LoginScreen";
import ViewAttendance from "./components/ViewAttendance";
import SettingScreen from "./components/SettingScreen";
import ForgetPasswordScreen from "./components/ForgetPasswordScreen";
import ConfirmationScreen from "./components/ConfirmationScreen";
import CheckAttendance from "./components/CheckAttendance";
import Attendance from "./components/Attendance";

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: () => false
    }
  },
  Home: {
    screen: SettingScreen,
    navigationOptions: {
      header: () => false,
      gestureEnabled: false
    }
  },

  Forget: {
    screen: ForgetPasswordScreen,
    navigationOptions: {
      header: () => false,
      gestureEnabled: false
    }
  },

  Confirmation: {
    screen: ConfirmationScreen,
    navigationOptions: {
      header: () => false,
      gestureEnabled: false
    }
  },

  CheckAttendance: {
    screen: CheckAttendance,
    navigationOptions: {
      header: () => false,
      gestureEnabled: false
    }
  },

  ViewAttendance: {
    screen: ViewAttendance,
    navigationOptions: {
      //header: () => true,
      gestureEnabled: false
    }
  },

  Attendance: {
    screen: Attendance,
    navigationOptions: {
      header: () => true,
      gestureEnabled: false
    }
  }
});

const App = createAppContainer(MainNavigator);
export default App;
