import React from "react";
import {
    StyleSheet,
    View,
    Image,
    UIManager,
    LayoutAnimation,
    Dimensions,
    StatusBar,
    SafeAreaView
} from "react-native";
import withDismissKeyboardHOC from "../hocs/DismissKeyboardHOC";
import { ScreenLayoutAnimation } from "../constants";

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const DismissableKeyboardView = withDismissKeyboardHOC(View);

const { width, height } = Dimensions.get("window");

class AppLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            top: -height
        };
    }

    componentDidMount() {
        setTimeout(() => {
            LayoutAnimation.configureNext(ScreenLayoutAnimation);
            this.setState({ top: 0 });
        }, 200);
    }

    render() {
        return (
            <SafeAreaView
                style={[styles.container, this.props.containerStyles]}
            >
                <DismissableKeyboardView
                    style={[styles.container, this.props.containerStyles]}
                >
                    <StatusBar barStyle="light-content" />
                    <View
                        style={[styles.animationBox, { top: this.state.top }]}
                    >
                        <View style={styles.logoBox}>
                            <Image
                                style={styles.logo}
                                source={require("../../assets/img/logo.png")}
                            />
                        </View>

                        {this.props.children}
                    </View>
                </DismissableKeyboardView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#334856"
    },
    animationBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: "contain"
    }
});

export default AppLayout;
