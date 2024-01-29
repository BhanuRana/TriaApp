import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Animated, {
  FadeInUp,
  ZoomIn,
  BounceInRight,
  FadeIn,
} from 'react-native-reanimated';
import UserContext from '../context/UserContext';
import {BackButton, Button, LinkText} from '../components';
import commonStyles, {PRIMARY_FONT_REGULAR} from '../styles/styles';
import Colors from '../styles/colors';

const WelcomeToTria = ({navigation}) => {
  const {currentUser, handleSignOut} = useContext(UserContext);
  return (
    <View style={styles.container}>
      {navigation.canGoBack() ? (
        <BackButton onPress={() => navigation.goBack()} />
      ) : null}
      <Image
        style={styles.ellipse1}
        source={require('../assets/ellipse-1.png')}
      />
      <Image
        style={styles.ellipse2}
        source={require('../assets/ellipse-2.png')}
      />
      <Animated.View
        style={styles.topContainer}
        entering={FadeInUp.delay(200).duration(1500)}>
        <Text style={commonStyles.screenTitle}>Welcome to Tria</Text>
        <Text style={commonStyles.screenDescription}>
          One name all things web3
        </Text>
      </Animated.View>
      <Animated.Image
        entering={ZoomIn.delay(300).duration(700)}
        style={styles.trialogo}
        source={require('../assets/tria-logo.png')}
      />
      <View style={styles.pointsContainer}>
        <Animated.View
          style={styles.point}
          entering={FadeInUp.delay(200).duration(1500)}>
          <Image
            style={styles.pointImg}
            source={require('../assets/point-1-icon.png')}
          />
          <Text style={styles.pointText}>
            Experience a platform that caters to your needs.{' '}
            <Text style={styles.pointTextHighlight}>
              Explore, learn, invest and win big!
            </Text>
          </Text>
        </Animated.View>
        <Animated.View
          style={styles.point}
          entering={FadeInUp.delay(200).duration(1500)}>
          <Image
            style={styles.pointImg}
            source={require('../assets/point-2-icon.png')}
          />
          <Text style={styles.pointText}>
            <Text style={styles.pointTextHighlight}>Quick as a wink:</Text> buy,
            send, receive speedily; switch up your money game!
          </Text>
        </Animated.View>
        <Animated.View
          style={styles.point}
          entering={FadeInUp.delay(200).duration(1500)}>
          <Image
            style={styles.pointImg}
            source={require('../assets/point-3-icon.png')}
          />
          <Text style={styles.pointText}>
            User friendly platform that’s easy to use,{' '}
            <Text style={styles.pointTextHighlight}>
              protected by top tier security.
            </Text>
          </Text>
        </Animated.View>
        <Animated.View
          style={styles.point}
          entering={FadeInUp.delay(200).duration(1500)}>
          <Image
            style={styles.pointImg}
            source={require('../assets/point-4-icon.png')}
          />
          <Text style={styles.pointText}>
            Convenience of securely managing your{' '}
            <Text style={styles.pointTextHighlight}>assets in one place.</Text>
          </Text>
        </Animated.View>
      </View>
      <Animated.View entering={BounceInRight.delay(1000).duration(900)}>
        <Button
          style={commonStyles.nextBtn}
          title="Continue"
          onPress={() => navigation.navigate('YourTriaIdentity')}
        />
      </Animated.View>
      <Animated.View
        entering={FadeIn.delay(1200).duration(1800)}
        style={{position: 'absolute', bottom: 10}}>
        {currentUser ? (
          <LinkText title="Sign out" onPress={handleSignOut} />
        ) : null}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingBottom: 24,
  },
  topContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 76,
  },
  ellipse1: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  ellipse2: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  trialogo: {
    width: 112,
    height: 112,
  },
  pointsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  point: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginTop: 32,
  },
  pointImg: {
    width: 34,
    height: 34,
    marginRight: 24,
  },
  pointText: {
    maxWidth: 312,
    color: Colors.secondary,
    fontSize: 14,
    fontFamily: PRIMARY_FONT_REGULAR,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: 0.6,
  },
  pointTextHighlight: {
    color: Colors.primary,
    fontSize: 15,
    fontFamily: PRIMARY_FONT_REGULAR,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.72,
  },
});

export default WelcomeToTria;
