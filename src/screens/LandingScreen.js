import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, LinkText, GradientText} from '../components';
import commonStyles, {PRIMARY_FONT_REGULAR} from '../styles/styles';

const LandingScreen = ({navigation}) => {
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
        <GradientText
          colors={['rgba(250, 250, 250, 0.90)', 'rgba(250, 250, 250, 0.40)']}
          style={styles.tagline}>{`One name,\nall things Web3`}</GradientText>
        <Button
          style={styles.getStartedBtn}
          title="Get started"
          onPress={() => navigation.navigate('SignUpScreen')}
        />
        <LinkText
          title="Continue as Guest"
          onPress={() => navigation.navigate('WelcomeToTria')}
        />
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
    fontFamily: PRIMARY_FONT_REGULAR,
    fontWeight: '500',
    lineHeight: 26.5,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 48,
  },
  getStartedBtn: {
    marginBottom: 24,
  },
});

export default LandingScreen;
