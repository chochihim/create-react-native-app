import React from 'react';
import { View, StatusBar } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from './Home';
import SearchScreen from './Search';
import InformationScreen from './Information';
import SettingScreen from './Setting';

import AppView from './styles/AppView';

const MainNavigator = TabNavigator(
    {
        homeTab: {
            screen: HomeScreen,
        },
        searchTab: {
            screen: SearchScreen,
        },
        healthCornerTab: {
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
    }
);

const App = () => (
    <AppView>
        <StatusBar barStyle="dark-content" />
        <MainNavigator onNavigationStateChange={null} />
    </AppView>
);

export default App;
