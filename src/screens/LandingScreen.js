import {View, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Animated, {FadeInUp, FadeIn, FadeInDown} from 'react-native-reanimated';
import UserContext from '../context/UserContext';
import {Button, LinkText, GradientText} from '../components';
import commonStyles, {PRIMARY_FONT_REGULAR} from '../styles/styles';

const LandingScreen = ({navigation}) => {
  const {setCurrentUser} = useContext(UserContext);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animated.Text style={commonStyles.font16}>
          Experience omni-presence
        </Animated.Text>
        <Animated.Image
          entering={FadeInUp.duration(1100)}
          style={styles.triaForAllImage}
          source={require('../assets/tria-for-all.png')}
        />
      </View>
      <View style={styles.actionBtns}>
        <Animated.Image
          entering={FadeInUp.duration(1400)}
          style={styles.triaTextImage}
          source={require('../assets/tria-text.png')}
        />
        <Animated.View entering={FadeInUp.duration(1400)}>
          <GradientText
            colors={['rgba(250, 250, 250, 0.90)', 'rgba(250, 250, 250, 0.40)']}
            style={styles.tagline}>{`One name,\nall things Web3`}</GradientText>
        </Animated.View>
        <Animated.View
          entering={FadeIn.delay(200).duration(1600)}
          style={styles.btnContainer}>
          <Button
            style={styles.getStartedBtn}
            title="Get started"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).duration(1600)}>
          <LinkText
            title="Continue as Guest"
            onPress={() => {
              setCurrentUser({name: 'Guest'});
            }}
          />
        </Animated.View>
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
  btnContainer: {
    width: '100%',
  },
  getStartedBtn: {
    marginBottom: 24,
  },
});

export default LandingScreen;
