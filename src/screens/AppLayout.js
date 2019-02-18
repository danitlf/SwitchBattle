import React from "react";
import {
    StyleSheet,
    View,
    UIManager,
    LayoutAnimation,
    Dimensions,
    StatusBar,
    SafeAreaView
} from "react-native";
import { ScreenLayoutAnimation, COLORS } from "../constants";

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const { width, height } = Dimensions.get("window");

class AppLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            top: this.props.animate ? -height : 0
        };
    }

    componentDidMount() {
        if (this.props.animate) {
            setTimeout(() => {
                LayoutAnimation.configureNext(ScreenLayoutAnimation);
                this.setState({ top: 0 });
            }, 200);
        }
    }

    render() {
        return (
            <SafeAreaView
                style={[styles.container, this.props.containerStyles]}>
                <StatusBar barStyle="light-content" />

                <View
                    style={[styles.animationBox, { top: this.state.top }]}>
                    {this.props.children}
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: COLORS.primaryColor,
    },
    animationBox: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16
    }
});

export default AppLayout;
