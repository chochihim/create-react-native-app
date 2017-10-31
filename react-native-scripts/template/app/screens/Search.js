import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { FormattedMessage } from 'react-intl';

class Search extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('./img/search.png')} style={{ tintColor: tintColor }} />
        ),
    };

    render() {
        return (
            <View>
                <FormattedMessage id="searchTab" />
            </View>
        );
    }
}

export default Search;
