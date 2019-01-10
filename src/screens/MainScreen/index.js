import React, { Component } from "react";
import { StyleSheet, Text, View, Switch, Alert } from "react-native";
import firebase from "@firebase/app";
import "@firebase/database";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { FIREBASE_CONFIG } from "../../constants";
import { Countdown } from "../../components";
import AppLayout from "../AppLayout";
import FirebaseService from "../../service/FirebaseService";

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

        FirebaseService.trackSwitch(firebase, this.trackSwitch);
        this.updateInterval();
    };

    trackSwitch = (switchValue, lastSwitchOnDate, record) => {
        let recordSecondsDuration = moment.duration(record, "seconds");
        let recordSecondsDurationString = `${recordSecondsDuration.format("hh:mm:ss")}`;

        this.setState({
            switchValue,
            lastSwitchOnDate,
            record,
            recordValue: recordSecondsDurationString
        });
    };

    changeSwitch = async switchValue => {
        let database = firebase.database();

        let recordSeconds = moment().utc().diff(
            moment(this.state.lastSwitchOnDate).utc(),
            "seconds"
        );
        let recordSecondsDuration = moment.duration(recordSeconds > this.state.record ? recordSeconds : this.state.record, "seconds");
        let recordSecondsDurationString = `${recordSecondsDuration.format("hh:mm:ss")}`;

        database
            .ref("switch/switchValue")
            .set(switchValue)
            .then(async data => {
                await this.setState({
                    switchValue,
                    lastSwitchOnDate: new Date(),
                    recordValue: recordSecondsDurationString
                });
            })
            .catch(error => {
                //error callback
                console.log("error ", error);
            });
    };

    updateInterval = () => {
        setInterval(() => {
            let d = moment().diff(
                moment(this.state.lastSwitchOnDate),
                "seconds"
            );
            let duration = moment.duration(d, "seconds");
            let durationString = `${duration.format("hh:mm:ss")}`;
            this.setState({ durationString });
        }, 1000);
    };

    render() {
        return (
            <AppLayout>
                <Countdown
                    style={styles.countdown}
                    currentTime={this.state.durationString}
                />

                <Switch
                    style={styles.switch}
                    value={this.state.switchValue}
                    onValueChange={value => this.changeSwitch(value)}
                />

                <Text style={styles.record}>Record: {this.state.recordValue}</Text>
            </AppLayout>
        );
    }
}

const styles = StyleSheet.create({
    switch: {
        transform: [{ scaleX: 3.0 }, { scaleY: 3.0 }],
        marginTop: 40,
        marginBottom: 30
    },
    record: {
        color: "white",
        fontSize: 16
    }
});
