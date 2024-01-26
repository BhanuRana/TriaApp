import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton';
import commonStyles, {PRIMARY_FONT_MEDIUM} from '../styles/styles';
import Colors from '../styles/colors';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.topContainer}>
        <Text style={commonStyles.font16}>Experience the speed with</Text>
        <Text style={[commonStyles.font32, styles.title]}>
          Quick and Easy Setup
        </Text>
        <Image
          style={styles.socialsImg}
          source={require('../assets/signups-social.png')}
        />
      </View>
      <View style={styles.actionBtnsContainer}>
        <TouchableOpacity
          style={styles.signUpTriaBtn}
          onPress={() => navigation.navigate('SignUpWithTria')}>
          <Text style={styles.signUpTriaBtnText}>Sign up with Tria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpBtn} onPress={() => {}}>
          <Image
            style={styles.signUpSocialIcon}
            source={require('../assets/google.png')}
          />
          <Text style={styles.signUpBtnText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpBtn} onPress={() => {}}>
          <Image
            style={styles.signUpSocialIcon}
            source={require('../assets/apple.png')}
          />
          <Text style={styles.signUpBtnText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => navigation.navigate('ContinueWithEmail')}>
          <Image
            style={styles.signUpSocialIcon}
            source={require('../assets/email.png')}
          />
          <Text style={styles.signUpBtnText}>Continue with Email/Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpBtn} onPress={() => {}}>
          <Image
            style={[styles.signUpSocialIcon, {height: 20, width: 42}]}
            source={require('../assets/signup-others.png')}
          />
          <Text style={styles.signUpBtnText}>Continue with Others</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => navigation.navigate('TriaLogin')}>
          <Text style={styles.signInBtnText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  topContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 76,
  },
  title: {
    marginTop: 20,
    marginBottom: 64,
  },
  socialsImg: {
    width: '100%',
    height: 132,
    marginTop: 28,
    marginBottom: 34,
  },
  actionBtnsContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
  },
  signUpTriaBtn: {
    width: '100%',
    backgroundColor: Colors.primaryBtnBackground,
    height: 54,
    borderRadius: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpTriaBtnText: {
    color: Colors.primaryBtnText,
    fontSize: 18,
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0.36,
  },
  signUpBtn: {
    marginTop: 12,
    width: '100%',
    backgroundColor: Colors.blurredGray,
    height: 54,
    borderRadius: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpBtnText: {
    color: Colors.primary,
    fontSize: 18,
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0.36,
  },
  signUpSocialIcon: {
    position: 'absolute',
    left: 20,
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  signInBtn: {
    marginTop: 12,
  },
  signInBtnText: {
    color: Colors.primary,
    fontSize: 18,
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0.36,
  },
});

export default SignUpScreen;
