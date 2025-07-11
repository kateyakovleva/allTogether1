import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';

import HomeNavigator from './HomeNavigator';
import Categories from '../screens/home/Categories';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => null}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator; 