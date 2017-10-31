import React from 'react';
import { View, StatusBar } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from './Home';
import SearchScreen from './Search';
import InformationScreen from './Information';
import SettingScreen from './Setting';

import TabBarLabel from './../features/app/components/TabBarLabel';

import AppView from './styles/AppView';

const MainNavigator = TabNavigator(
    {
        homeTab: {
            screen: HomeScreen,
        },
        searchTab: {
            screen: SearchScreen,
        },
        informationTab: {
            screen: InformationScreen,
        },
        settingTab: {
            screen: SettingScreen,
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#08BA44',
            showIcon: true,
        },
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: ({ tintColor }) => (
                <TabBarLabel id={navigation.state.routeName} tintColor={tintColor} />
            ),
        }),
    }
);

const App = () => (
    <AppView>
        <StatusBar barStyle="dark-content" />
        <MainNavigator onNavigationStateChange={null} />
    </AppView>
);

export default App;
