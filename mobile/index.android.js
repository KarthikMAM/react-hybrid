import React, { Component } from "react";
import { store as createStore, actions } from "state";
import { connect, Provider } from "react-redux";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from "react-native";

let store = createStore("Hello");

class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this.props.toggleHello()}>
          {this.props.greeting} to React Native!
        </Text>
      </View>
    );
  }
}

let HelloWorldContaier = connect(
  (state, props) => ({ greeting: state }),
  (dispatch, props) => ({ toggleHello: () => dispatch(actions.toggleHello()) })
)(HelloWorld);

export default class greeting extends Component {
  render() {
    return (
      <Provider store={store}>
        <HelloWorldContaier />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

AppRegistry.registerComponent("mobile", () => greeting);
