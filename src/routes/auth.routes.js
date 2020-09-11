import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';

import GetStarted from '../pages/GetStarted';
import SignIn from '../pages/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <>
      <StatusBar backgroundColor="#29304d" style="light" />

      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStack.Screen name="GetStarted" component={GetStarted} />
        <AuthStack.Screen name="SignIn" component={SignIn} />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthRoutes;
