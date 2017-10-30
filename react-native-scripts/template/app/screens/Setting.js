import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Setting extends Component {
  static navigationOptions = {
    tabBarLabel: 'Setting',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('./img/setting.png')} style={{ tintColor: tintColor }} />
    ),
  };

  render() {
    return (
      <View>
        <Text>This is setting!</Text>
      </View>
    );
  }
}

export default Setting;
