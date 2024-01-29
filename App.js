import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import {UserProvider} from './src/context/UserContext';
import Colors from './src/styles/colors';

const App = () => {
  return (
    <UserProvider>
      <StatusBar backgroundColor={Colors.background} barStyle="light-content" />
      <AppNavigator />
    </UserProvider>
  );
};

export default App;
