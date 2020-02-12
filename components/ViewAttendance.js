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

export default class ViewAttendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHeaders: [["Event Name"]],
      tableData: null
    };
  }

  getEvents() {
    return fetch("http://172.18.161.197:5000/api/event/all").then(r =>
      r.json()
    );
  }

  getAttendance(eventID) {
    return fetch(
      `http://172.18.161.197:5000/api/attendance?event=${eventID}`
    ).then(async response => response.json());
  }

  componentDidMount() {
    this.getEvents()
      .then(events => {
        console.log(events);
        this.setState({
          ...this.state,
          tableData: events
        });
        console.log(this.state);
      })
      .catch(console.error);
  }

  render() {
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={styles.container}>
        {/* <Table borderStyle={{ borderWidth: 2, borderColor: "#4562cf" }}>
          <Rows data={this.state.tableHeaders} textStyle={styles.text} />
          <TouchableOpacity
            onPress={() => {
              console.info(this.props.navigation.push);
              this.props.navigation.push("Attendance");
            }}
          >
            <Rows data={this.state.tableData} textStyle={styles.text} />
          </TouchableOpacity>
        </Table> */}
        {this.state.tableData !== null
          ? this.state.tableData.map(event => (
              <Button
                title={event.name}
                onPress={() =>
                  this.props.navigation.push("Attendance", { event: event.id })
                }
              />
            ))
          : null}
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
