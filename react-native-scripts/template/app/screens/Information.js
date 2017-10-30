import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Information extends Component {
  static navigationOptions = {
    tabBarLabel: 'Information',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('./img/information.png')} style={{ tintColor: tintColor }} />
    ),
  };

  render() {
    return (
      <View>
        <Text>This is information!</Text>
      </View>
    );
  }
}

export default Information;
