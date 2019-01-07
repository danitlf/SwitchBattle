import React from 'react';
import { StyleSheet, View, Image, UIManager, LayoutAnimation, Dimensions } from 'react-native';
import withDismissKeyboardHOC from '../hocs/DismissKeyboardHOC';

UIManager.setLayoutAnimationEnabledExperimental
&& UIManager.setLayoutAnimationEnabledExperimental(true);

const DismissableKeyboardView = withDismissKeyboardHOC(View);

const { width, height } = Dimensions.get('window');

const CustomLayoutAnimation = {
  duration: 800,
  create: {
    property: LayoutAnimation.Properties.scaleXY,
    type: LayoutAnimation.Types.spring,
    springDamping: 0.8
  },
  update: {
    property: LayoutAnimation.Properties.scaleXY,
    type: LayoutAnimation.Types.spring,
    springDamping: 0.8
  },
  delete: {
    duration: 200,
    property: LayoutAnimation.Properties.scaleXY,
    type: LayoutAnimation.Types.spring,
    springDamping: 0.8
  }
};

class AppLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: -height
    }
  }

  componentDidMount() {
    setTimeout(() => {
      LayoutAnimation.configureNext(CustomLayoutAnimation);
      this.setState({ top: 0 });
    }, 200);
  }

  render() {
    return (
      <DismissableKeyboardView style={[styles.container, this.props.containerStyles]}>
        <View style={[styles.animationBox, { top: this.state.top }]}>
          <View style={styles.logoBox}>
            <Image
              style={styles.logo}
              source={require('../../assets/img/logo.png')} />
          </View>

          {this.props.children}
        </View>
      </DismissableKeyboardView>
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
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  }
});

export default AppLayout;