import React, { Component } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
import firebase from "@firebase/app";
import "@firebase/database";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { FIREBASE_CONFIG, COLORS, MOVES } from "../../constants";
import { Countdown, InfoBox, MoveIndicator } from "../../components";
import AppLayout from "../AppLayout";
import { FirebaseService, StoreService } from "../../service";

//momentDurationFormatSetup(moment);
typeof moment.duration.fn.format === "function";
// true
typeof moment.duration.format === "function";
// true

export default class MainScreen extends Component {
    static navigationOptions = { header: null };

    constructor(props) {
        super(props);

        this.state = {
            switchValue: false,
            lastSwitchOnDate: new Date(),
            recordValue: "00:00:00",
            durationString: "00:00:00",
            moves: 0
        };
    }

    componentDidMount = () => {
        this.firebaseConfig();
        this.setupMoves();
    };

    firebaseConfig = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
        }

        FirebaseService.trackSwitch(firebase, this.trackSwitch);
        this.updateInterval();
    };

    setupMoves = async () => {
        let moves = await StoreService.getMoves();
        this.setState({
            moves
        });
    };

    trackSwitch = (switchValue, lastSwitchOnDate, record) => {
        let recordSecondsDuration = moment.duration(record, "seconds");
        let recordSecondsDurationString = `${recordSecondsDuration.format(
            "hh:mm:ss",
            { trim: false }
        )}`;

        this.setState({
            switchValue,
            lastSwitchOnDate,
            record,
            recordValue: recordSecondsDurationString
        });
    };

    changeSwitch = async switchValue => {
        if (moves > 0) {
            let moves = await StoreService.decrementMoves();
            this.setState({
                moves
            });

            let database = firebase.database();

            let recordSeconds = moment()
                .utc()
                .diff(moment(this.state.lastSwitchOnDate).utc(), "seconds");
            let recordSecondsDuration = moment.duration(
                recordSeconds > this.state.record
                    ? recordSeconds
                    : this.state.record,
                "seconds"
            );
            let recordSecondsDurationString = `${recordSecondsDuration.format(
                "hh:mm:ss"
            )}`;

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
        } else {
            alert(MOVES.alertMessage);
        }
    };

    updateInterval = () => {
        setInterval(() => {
            let d = moment().diff(
                moment(this.state.lastSwitchOnDate),
                "seconds"
            );
            let duration = moment.duration(d, "seconds");
            let durationString = `${duration.format("hh:mm:ss", {
                trim: false
            })}`;
            this.setState({ durationString });
        }, 1000);
    };

    render() {
        return (
            <AppLayout animate>
                <View>
                    <View style={styles.row}>
                        <MoveIndicator moves={this.state.moves} />
                        <InfoBox title={"USER NAME"} text="Lucas" />
                    </View>
                    <View style={[styles.row, styles.countContainer]}>
                        <Countdown
                            style={styles.countdown}
                            currentTime={this.state.durationString}
                        />

                        <Switch
                            style={styles.switch}
                            value={this.state.switchValue}
                            onValueChange={value => this.changeSwitch(value)}
                        />
                    </View>

                    <View style={styles.row}>
                        <InfoBox
                            title={"RECORD"}
                            text={this.state.recordValue}
                        />
                    </View>
                </View>
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
    },
    row: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    countContainer: {
        justifyContent: "space-evenly"
    }
});
