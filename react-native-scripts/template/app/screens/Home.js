import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('./img/home.png')} style={{ tintColor: tintColor }} />
        ),
    };

    handlePressButton = () => {
        const { navigation } = this.props;

        navigation.navigate('settingTab');
    };

    render() {
        return (
            <View>
                <Text>This is home!</Text>
                <Button title="Go to Setting" onPress={this.handlePressButton} />
            </View>
        );
    }
}

export default Home;
