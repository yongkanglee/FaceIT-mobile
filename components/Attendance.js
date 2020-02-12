import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ART
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";

import RNRestart from "react-native-restart";

export default class ViewAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHeaders: [["Name", "Event", "Time"]],
      tableData: [[]],
      users: [],
      events: []
    };
  }

  getUsers() {
    return fetch(
      `http://172.18.161.197:5000/api/student`
    ).then(async response => response.json());
  }

  getEvents() {
    return fetch(
      `http://172.18.161.197:5000/api/event/all`
    ).then(async response => response.json());
  }

  getAttendance(eventID) {
    return fetch(
      `http://172.18.161.197:5000/api/attendance?event=${eventID}`
    ).then(async response => response.json());
  }

  loadData() {
    Promise.all([
      this.getAttendance(this.props.navigation.getParam("event")),
      this.getUsers(),
      this.getEvents()
    ])
      .then(([attendanceData, students, events]) => {
        this.setState({
          ...this.state,
          users: students.data,
          events
        });
        const tableData = attendanceData.data.map(e => [
          [this.state.users.filter(u => u.id === e.user_id)[0].name],
          [this.state.events.filter(u => u.id === e.event_id)[0].name],
          [e.date_time]
        ]);
        this.setState({
          ...this.state,
          tableData
        });
      })
      .catch(console.error);
  }

  componentDidMount() {
    this.loadData();
  }
  onButtonClick = () => {
    this.loadData();
  };
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#4562cf" }}>
          <Rows data={this.state.tableHeaders} textStyle={styles.text} />
          <Rows data={this.state.tableData} textStyle={styles.text} />
        </Table>
        <Button title="Refresh" onPress={this.onButtonClick} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#F9B53A"
  },
  head: {
    height: 40,
    backgroundColor: "#4562cf"
  },
  text: { margin: 6 }
});
