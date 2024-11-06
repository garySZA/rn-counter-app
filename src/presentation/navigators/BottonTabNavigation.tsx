import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home';
import { SettingsScreen } from '../screens/settings';
import { ProfileScreen } from '../screens/prifile';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" options={{ title: `Settings ${0}` }} component={SettingsScreen} />
        </Tab.Navigator>
    );
};
