import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Cards from '../pages/Cards';
import Map from '../pages/Map';
import Profile from '../pages/Profile';

const AppTabs = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <AppTabs.Navigator
      tabBarOptions={{
        activeTintColor: '#222844',
        inactiveTintColor: '#999',
        tabStyle: {
          backgroundColor: '#f7f9fc',
        },
        labelStyle: {
          fontFamily: 'Poppins_500Medium',
          fontSize: 12,
          marginBottom: 5,
        },
        style: {
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        },
        iconStyle: {
          marginTop: 5,
        },
      }}
    >
      <AppTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Painel',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={20} />
          ),
        }}
      />
      <AppTabs.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarLabel: 'Cartões',
          tabBarIcon: ({ color }) => (
            <Icon name="copy" color={color} size={20} />
          ),
        }}
      />
      <AppTabs.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Locais',
          tabBarIcon: ({ color }) => (
            <Icon name="map-pin" color={color} size={20} />
          ),
        }}
      />
      <AppTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={20} />
          ),
        }}
      />
    </AppTabs.Navigator>
  );
};

export default AppRoutes;
