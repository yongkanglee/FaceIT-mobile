import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

export default class Confirmation extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.message}>
          <Text style={styles.message}>
            An Email to reset your password has been sent to email@email.com
          </Text>
        </View>
        <TouchableOpacity style={styles.backtoLogin}>
          <Button
            title="Return to Login Page"
            onPress={() => navigate("Login")}
          ></Button>
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
  message: {
    height: 50,
    color: "white"
  },

  backtoLogin: {
    width: "80%",
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 10
  }
});
