import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

export default class Setting extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.select}>View Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.select}>Check Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Forget")}>
          <Text style={styles.select}>Change Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5DBCD2",
    alignItems: "center",
    justifyContent: "center"
  },
  select: {
    width: "80%",
    color: "white",
    fontSize: 36,
    height: 100,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    textDecorationLine: "underline"
  }
});
