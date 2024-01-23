import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ArrowUp2} from 'iconsax-react-native';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <ArrowUp2 size="32" color="#FF8A65" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingScreen;
