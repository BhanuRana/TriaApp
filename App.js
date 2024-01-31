import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation/AppNavigator';
import {UserProvider} from './src/context/UserContext';
import Colors from './src/styles/colors';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <UserProvider>
      <StatusBar backgroundColor={Colors.background} barStyle="light-content" />
      <AppNavigator />
    </UserProvider>
  );
};

export default App;
