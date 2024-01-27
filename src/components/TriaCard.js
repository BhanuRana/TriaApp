import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {PRIMARY_FONT_REGULAR} from '../styles/styles';
import Colors from '../styles/colors';

const TriaCard = ({
  gradientColor = ['#5AA5DC', '#2AC25E', '#2AC25E'],
  username = 'Guest',
  score = 0,
}) => (
  <View>
    <LinearGradient
      colors={gradientColor}
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
            <Text style={styles.usernameText}>{username}@tria</Text>
            <Text style={styles.userScoreText}>{score} XP</Text>
          </View>
          <Image
            style={styles.triaLogoImg}
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
    aspectRatio: 0.73,
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
    marginTop: 24,
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
});

export default TriaCard;
