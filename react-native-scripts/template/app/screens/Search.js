import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Search extends Component {
    static navigationOptions = {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('./img/search.png')} style={{ tintColor: tintColor }} />
        ),
    };

    render() {
        return (
            <View>
                <Text>This is search!</Text>
            </View>
        );
    }
}

export default Search;
