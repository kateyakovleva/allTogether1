import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';

import AuthChoice from '../screens/auth/AuthChoice';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import EmailVerification from '../screens/auth/EmailVerification';
import CreatePassword from '../screens/auth/CreatePassword';
import ResetPassword from '../screens/resetpass/ResetPassword';
import ResetEmailVerification from '../screens/resetpass/ResetEmailVerification';
import ResetCreatePassword from '../screens/resetpass/ResetCreatePassword';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthChoice" component={AuthChoice} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ResetEmailVerification" component={ResetEmailVerification} />
      <Stack.Screen name="ResetCreatePassword" component={ResetCreatePassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator; 