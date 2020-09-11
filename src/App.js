import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';

import Routes from './routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts</Text>;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#2e3552" style="light" />
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
