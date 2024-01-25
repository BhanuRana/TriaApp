import {ImageBackground} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
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
        </Stack.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
};

export default AppNavigator;
