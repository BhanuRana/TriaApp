import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {PRIMARY_FONT_REGULAR} from '../styles/styles';
import Colors from '../styles/colors';

const gradientForColor = (color = '#52c979') => {
  const colors = {
    '#52c979': ['#5AA5DC', '#2AC25E', '#2AC25E'],
    '#ba3d5d': ['#ba3d5d', '#BF226E', '#BF226E'],
    '#ffae06': ['#ffae06', '#FFC905', '#FFC905'],
    '#4845d2': ['#4440D2', '#433ecf', '#433ecf'],
  };

  return colors[color];
};

const TriaCard = ({
  color = '#52c979',
  username = 'Guest',
  score = 0,
  variant = 'main',
}) => (
  <View>
    <LinearGradient
      colors={gradientForColor(color)}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradientBox}>
      <ImageBackground
        source={require('../assets/pattern.png')}
        resizeMode="cover"
        imageStyle={styles.patternImage}
        style={styles.container}>
        <View style={styles.qrContainer}>
          <Image
            style={styles.qrCodeImg}
            source={require('../assets/qrcode.png')}
          />
          <Image
            style={styles.qrUserAvatar}
            source={require('../assets/avatar-rectangle.png')}
          />
        </View>
        <View style={styles.textInfoContainer}>
          <View>
            <Text
              style={
                variant === 'form'
                  ? styles.usernameTextFormVariant
                  : styles.usernameText
              }>
              {username}@tria
            </Text>
            <Text
              style={
                variant === 'form'
                  ? styles.userScoreTextFormVariant
                  : styles.userScoreText
              }>
              {score} XP
            </Text>
          </View>
          <Image
            style={
              variant === 'form'
                ? styles.triaLogoImgFormVariant
                : styles.triaLogoImg
            }
            source={require('../assets/tria-logo2.png')}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  gradientBox: {borderRadius: 18},
  container: {
    width: '100%',
    aspectRatio: 0.74,
    backgroundColor: 'rgba(255, 255, 255, 0.40)',
    borderRadius: 18,
    padding: 32,
    alignItems: 'center',
  },
  patternImage: {
    width: '100%',
    height: '100%',
  },
  qrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    aspectRatio: 1,
  },
  qrCodeImg: {width: '100%', height: '100%'},
  qrUserAvatar: {position: 'absolute', width: '34%', height: '34%'},
  textInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
    width: '100%',
  },
  usernameText: {
    color: Colors.primary,
    fontSize: 31,
    fontFamily: PRIMARY_FONT_REGULAR,
    lineHeight: 44,
    fontWeight: '500',
    letterSpacing: 0.6,
  },
  userScoreText: {
    color: Colors.primary,
    fontSize: 22,
    fontFamily: PRIMARY_FONT_REGULAR,
    lineHeight: 31,
    fontWeight: '400',
    letterSpacing: 0.44,
  },
  triaLogoImg: {width: 38, height: 44, marginTop: 6},
  usernameTextFormVariant: {
    color: Colors.primary,
    fontFamily: PRIMARY_FONT_REGULAR,
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: 0.51,
  },
  userScoreTextFormVariant: {
    color: Colors.primary,
    fontFamily: PRIMARY_FONT_REGULAR,
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 25,
    letterSpacing: 0.35,
  },
  triaLogoImgFormVariant: {width: 30, height: 35, marginTop: 6},
});

export default TriaCard;
