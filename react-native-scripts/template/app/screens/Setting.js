import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { changeLocale } from './../features/app/reducers/locale';

import { locale as localeEnum } from './../enum';

class Setting extends Component {
    static navigationOptions = {
        tabBarLabel: 'Setting',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('./img/setting.png')} style={{ tintColor: tintColor }} />
        ),
    };

    handlePressChangeLocale = locale => {
        const { changeLocale } = this.props;
        changeLocale(locale);
    };

    render() {
        const { currentLocale } = this.props;

        return (
            <View>
                <Text>This is setting!</Text>
                <FormattedMessage
                    id="currentLocale"
                    values={{ locale: localeEnum[currentLocale] }}
                />
                <FormattedMessage id="changeLocale" />
                {Object.keys(localeEnum).map(locale => (
                    <Button
                        key={locale}
                        title={localeEnum[locale]}
                        onPress={() => this.handlePressChangeLocale(locale)}
                    />
                ))}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    currentLocale: state.app.locale,
});

const mapDispatchToProps = {
    changeLocale,
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
