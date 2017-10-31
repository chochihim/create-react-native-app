import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { FormattedMessage } from 'react-intl';

class Information extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('./img/information.png')} style={{ tintColor: tintColor }} />
        ),
    };

    render() {
        return (
            <View>
                <FormattedMessage id="informationTab" />
            </View>
        );
    }
}

export default Information;
