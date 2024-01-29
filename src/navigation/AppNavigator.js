import {ImageBackground, SafeAreaView} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserContext from '../context/UserContext';
import LandingScreen from '../screens/LandingScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpWithTria from '../screens/SignUpWithTria';
import TriaLogin from '../screens/TriaLogin';
import ContinueWithEmail from '../screens/ContinueWithEmail';
import SetupSecurity from '../screens/SetupSecurity';
import AccountCustomisation from '../screens/AccountCustomisation';
import WelcomeToTria from '../screens/WelcomeToTria';
import YourTriaIdentity from '../screens/YourTriaIdentity';
import styles from '../styles/styles';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: () => null,
      contentStyle: {backgroundColor: 'transparent'},
    }}>
    <Stack.Screen name="LandingScreen" component={LandingScreen} />
    <Stack.Screen name="SignUpWithTria" component={SignUpWithTria} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    <Stack.Screen name="TriaLogin" component={TriaLogin} />
    <Stack.Screen name="ContinueWithEmail" component={ContinueWithEmail} />
    <Stack.Screen name="SetupSecurity" component={SetupSecurity} />
    <Stack.Screen
      name="AccountCustomisation"
      component={AccountCustomisation}
    />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: () => null,
      contentStyle: {backgroundColor: 'transparent'},
    }}>
    <Stack.Screen name="WelcomeToTria" component={WelcomeToTria} />
    <Stack.Screen name="YourTriaIdentity" component={YourTriaIdentity} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const {currentUser} = useContext(UserContext);

  console.log('....currentUser: ', currentUser);

  return (
    <NavigationContainer>
      <ImageBackground
        style={styles.container}
        source={require('../assets/purple-glow-ellipse.png')}>
        <SafeAreaView style={{flex: 1}}>
          {currentUser ? <MainStack /> : <AuthStack />}
        </SafeAreaView>
      </ImageBackground>
    </NavigationContainer>
  );
};

export default AppNavigator;
