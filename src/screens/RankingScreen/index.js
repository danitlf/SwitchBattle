import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions, FlatList } from "react-native";
import { COLORS } from "../../constants";
import AppLayout from "../AppLayout";
import { Title } from "../../components";

const { width, height } = Dimensions.get('window');

export default class RankingScreen extends Component {
    static navigationOptions = { header: null };

    constructor(props) {
        super(props);

        this.state = {
            players: [
                { name: "Lucas", record: "12:00:00" },
                { name: "Renato", record: "12:00:00" },
                { name: "Julio", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },

                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },
                { name: "Daniel", record: "12:00:00" },

            ]
        };
    }

    _renderPlayer = (item) => (
        <View style={styles.flatItem} key={item.name}>
            <Text style={styles.playerName}>{item.name}</Text>
            <Text style={styles.playerRecord}>{item.record}</Text>
        </View>
    );

    render() {
        return (
            <AppLayout>
                <View style={styles.row}>
                    <Title value="RANKING" />
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={this.state.players}
                        renderItem={({ item }) => this._renderPlayer(item)}
                    />
                </View>
            </AppLayout>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 3
    },
    list: {
        flexGrow: 1,
        width: width
    },
    flatItem: {
        flexDirection: 'row',
        borderBottomColor: COLORS.secondColor,
        borderBottomWidth: 2,
        padding: 12
    },
    playerName: {
        flexGrow: 1,
        color: 'white',
        fontSize: 16
    },
    playerRecord: {
        color: 'white',
        fontSize: 16
    }
});
