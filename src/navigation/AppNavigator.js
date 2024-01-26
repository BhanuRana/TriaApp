import {ImageBackground} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpWithTria from '../screens/SignUpWithTria';
import TriaLogin from '../screens/TriaLogin';
import ContinueWithEmail from '../screens/ContinueWithEmail';
import SetupSecurity from '../screens/SetupSecurity';
import AccountCustomisation from '../screens/AccountCustomisation';
import WelcomeToTria from '../screens/WelcomeToTria';
import styles from '../styles/styles';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ImageBackground
        style={styles.container}
        source={require('../assets/purple-glow-ellipse.png')}>
        <Stack.Navigator
          screenOptions={{
            header: () => null,
            contentStyle: {backgroundColor: 'transparent'},
          }}>
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="SignUpWithTria" component={SignUpWithTria} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="TriaLogin" component={TriaLogin} />
          <Stack.Screen
            name="ContinueWithEmail"
            component={ContinueWithEmail}
          />
          <Stack.Screen name="SetupSecurity" component={SetupSecurity} />
          <Stack.Screen
            name="AccountCustomisation"
            component={AccountCustomisation}
          />
          <Stack.Screen name="WelcomeToTria" component={WelcomeToTria} />
        </Stack.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
};

export default AppNavigator;
