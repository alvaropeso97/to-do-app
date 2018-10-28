import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Body </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FB00',
  },
});

export default Body;
