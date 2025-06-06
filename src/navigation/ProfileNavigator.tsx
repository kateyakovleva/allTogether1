import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStackParamList } from './types';

import Profile from '../screens/profile/Profile';
import EditProfile from '../screens/profile/EditProfile';
import ChangePassword from '../screens/profile/ChangePassword';
import CreateEvent from '../screens/profile/CreateEvent';
import Calendar from '../screens/profile/Calendar';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
      <Stack.Screen name="Calendar" component={Calendar} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator; 