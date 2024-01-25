import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, LinkText} from '../components';
import commonStyles from '../styles/styles';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={commonStyles.font16}>Experience omni-presence</Text>
        <Image
          style={styles.triaForAllImage}
          source={require('../assets/tria-for-all.png')}
        />
      </View>
      <View style={styles.actionBtns}>
        <Image
          style={styles.triaTextImage}
          source={require('../assets/tria-text.png')}
        />
        <Text style={styles.tagline}>{`One name,\nall things Web3`}</Text>
        <Button
          style={styles.getStartedBtn}
          title="Get started"
          onPress={() => {}}
        />
        <LinkText title="Continue as Guest" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 45,
    paddingBottom: 66,
  },
  logoContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  triaForAllImage: {
    height: '85%',
    aspectRatio: 0.87,
    marginTop: 28,
    marginBottom: 34,
  },
  triaTextImage: {
    height: 54,
    aspectRatio: 1.86,
    marginTop: 36,
  },
  actionBtns: {
    width: '80%',
    alignItems: 'center',
  },
  tagline: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 48,
  },
  getStartedBtn: {
    marginBottom: 24,
  },
});

export default LandingScreen;
