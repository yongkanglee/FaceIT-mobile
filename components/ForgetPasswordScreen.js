import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

export default class ForgetPassword extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Please Enter Your Email"
            placeholderTextColor="#BEEBF6"
            onChangeText={text => this.setState({ email: text })}
          />
        </View>
        <TouchableOpacity style={styles.reset}>
          <Button
            title="Reset Password"
            onPress={() => navigate("Confirmation")}
          ></Button>
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
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },

  reset: {
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
