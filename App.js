import React, {Component} from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Push Notification</Text>
        <View style={styles.Button}>
          <Button
            onPress={() => {}}
            title="Show Notification"
            style={styles.Button}
            color="#841584"
            accessibilityLabel="Show Notification"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  Button: {
    margin: 10,
  },
});
