import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { FormattedMessage } from 'react-intl';

class Home extends Component {
    static navigationOptions = {
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
                <FormattedMessage id="goToSettings">
                    {formattedText => (
                        <Button title={formattedText} onPress={this.handlePressButton} />
                    )}
                </FormattedMessage>
            </View>
        );
    }
}

export default Home;
