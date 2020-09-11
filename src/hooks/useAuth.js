import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@auth:user');
      const storagedToken = await AsyncStorage.getItem('@auth:token');

      if (storagedUser && storagedToken) {
        setUser(storagedUser);
      }
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async () => {
    const response = await auth.signIn();

    setUser(response.user);

    await AsyncStorage.setItem('@auth:user', JSON.stringify(user));
    await AsyncStorage.setItem('@auth:token', response.token);
  }, [user]);

  return (
    <AuthContext.Provider value={{ signIn, signed: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext need a provider!');
  }

  return context;
};

export { useAuth, AuthProvider };
