import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {BackButton, XpBtn, LinkText, TriaCard} from '../components';
import commonStyles from '../styles/styles';

const YourTriaIdentity = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={commonStyles.screenTitle}>Your @tria</Text>
          <Text
            style={[commonStyles.screenDescription, styles.screenDescription]}>
            Share your card to invite your friends and earn rewards!
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <Animated.View entering={FadeInUp.delay(200).duration(1100)}>
            <TriaCard username="Cathy" score={150} />
          </Animated.View>
          <XpBtn
            text="Gift & get 125XP"
            style={styles.xpBtn}
            onPress={() => {}}
          />
        </View>
        <LinkText title="Continue to app" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 80,
    paddingHorizontal: 44,
  },
  topContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 76,
  },
  screenDescription: {
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: 0.6,
    textAlign: 'center',
  },
  cardContainer: {
    alignItems: 'center',
  },
  xpBtn: {
    marginTop: 24,
    paddingVertical: 10,
    paddingHorizontal: 32,
  },
});

export default YourTriaIdentity;
