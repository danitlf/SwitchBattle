import React, { Component } from "react";
import { StyleSheet, Text, View, Switch, Alert } from "react-native";
import firebase from "@firebase/app";
import "@firebase/database";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { FIREBASE_CONFIG } from "../../constants";
import { Countdown } from "../../components";

momentDurationFormatSetup(moment);
typeof moment.duration.fn.format === "function";
// true
typeof moment.duration.format === "function";
// true

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchValue: false,
      lastSwitchOnDate: new Date(),
      recordValue: "00:00:00",
      durationString: "00"
    };
  }

  componentDidMount = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }

    var switchRef = firebase.database().ref("switch/");
    switchRef.on("value", snapshot => {
      this.setState({
        switchValue: snapshot.val().switchValue,
        lastSwitchOnDate: snapshot.val().lastSwitchOnDate
      });
    });

    this.updateInterval();
  };

  changeSwitch = async switchValue => {
    let database = firebase.database();

    database
      .ref("switch/")
      .set({
        switchValue,
        lastSwitchOnDate: new Date().toISOString()
      })
      .then(async data => {
        await this.setState({
          switchValue,
          lastSwitchOnDate: new Date(),
          recordValue: "00:00:00"
        });
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
  };

  updateInterval = () => {
    setInterval(() => {
      let d = moment().diff(moment(this.state.lastSwitchOnDate), "seconds");
      let duration = moment.duration(d, "seconds");
      let durationString = `${duration.format("hh:mm:ss")}`;
      this.setState({ durationString });
    }, 1000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Countdown currentTime={this.state.durationString} />
        <Switch
          style={{
            transform: [{ scaleX: 3.0 }, { scaleY: 3.0 }],
            marginTop: 40,
            marginBottom: 30
          }}
          value={this.state.switchValue}
          onValueChange={value => this.changeSwitch(value)}
        />
        <Text style={{ color: "white" }}>Record: 00:00:00</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#334856"
  }
});
