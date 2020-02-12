import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ART
} from "react-native";

export default class Setting extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate("ViewAttendance")}>
          <Text style={styles.select}>View Attendance</Text>
        </TouchableOpacity>
        {
          // <TouchableOpacity onPress={() => navigate("Attendance")}>
          //   <Text style={styles.select}>Attendance</Text>
          // </TouchableOpacity>
        }
        <TouchableOpacity onPress={() => navigate("Forget")}>
          <Text style={styles.forget}>Change Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9B53A",
    alignItems: "center",
    justifyContent: "center"
  },
  select: {
    width: "80%",
    color: "#243a8d",
    fontSize: 36,
    height: 100,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    textDecorationLine: "underline"
  },
  forget: {
    width: "80%",
    color: "#2D49B0",
    fontSize: 18,
    height: 100,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    textDecorationLine: "underline"
  }
});
