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
import { ScreenLayoutAnimation, COLORS } from "../constants";

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const DismissableKeyboardView = withDismissKeyboardHOC(View);

const { width, height } = Dimensions.get("window");

class AppLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            top: this.props.animate ? -height : 27
        };
    }

    componentDidMount() {
        if(this.props.animate) {
            setTimeout(() => {
                LayoutAnimation.configureNext(ScreenLayoutAnimation);
                this.setState({ top: 0 });
            }, 200);
        }
    }

    render() {
        return (
            <SafeAreaView
                style={[styles.container, this.props.containerStyles]}
            >
                <DismissableKeyboardView>
                    <StatusBar barStyle="light-content" />
                    <View
                        style={[styles.animationBox, { top: this.state.top }]}
                    >
                        {this.props.children}
                    </View>
                </DismissableKeyboardView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primaryColor
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
