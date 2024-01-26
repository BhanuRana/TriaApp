import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from 'react-native-reanimated';
import {Gallery} from 'iconsax-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BackButton, Button, LinkText} from '../components';
import commonStyles, {
  PRIMARY_FONT_REGULAR,
  PRIMARY_FONT_MEDIUM,
} from '../styles/styles';
import Colors from '../styles/colors';

const NUM_OF_STEPS = 4;

const StepBar = ({numOfSteps, currentStep = 0}) => (
  <View style={styles.stepBar}>
    {[...Array(numOfSteps).keys()].map(step => (
      <View
        key={step}
        style={currentStep === step ? styles.activeStep : styles.inactiveStep}
      />
    ))}
  </View>
);

const ProfileImagePreview = () => (
  <Animated.View entering={FadeIn} exiting={FadeOut}>
    <Image
      style={styles.profileImg}
      source={require('../assets/profile-image-placeholder.png')}
    />
  </Animated.View>
);

const ProfileImageForm = () => (
  <Animated.View style={styles.formContainer} exiting={SlideOutLeft}>
    <Text style={styles.formTitle}>Change Profile Image</Text>
    <Text style={styles.formDescription}>
      Regenerate avatar, click or upload your picture for the display picture!
    </Text>
    <View style={styles.formBtnsContainer}>
      <TouchableOpacity style={[styles.formBtn, {width: 64, height: 64}]}>
        <Gallery size="24" color={Colors.secondary} variant="Bold" />
      </TouchableOpacity>
      <LinearGradient
        colors={[
          '#E74B8C',
          '#A37BCB',
          '#38B2E8',
          '#62A5A8',
          '#BBD047',
          '#FCD817',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradientBorder}>
        <TouchableOpacity style={[styles.formBtn]}>
          <Image
            style={{width: 24, height: 24, marginRight: 12}}
            source={require('../assets/unicorn.png')}
          />
          <Text style={styles.formBtnText}>Regenerate Avatar</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  </Animated.View>
);

const AccountCustomisation = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep === NUM_OF_STEPS - 1) {
      //go to next screen
    }
    setCurrentStep(step => (step < 3 ? step + 1 : 3));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        />
        <StepBar numOfSteps={NUM_OF_STEPS} currentStep={currentStep} />
        <View style={styles.backBtn} />
      </View>
      {currentStep === 0 && <ProfileImagePreview />}
      <Animated.View style={styles.bottomSheet}>
        <View style={styles.bottomSheetHandle} />
        {currentStep === 0 && <ProfileImageForm />}
        <View style={styles.formActions}>
          <Button style={styles.nextBtn} title="Next" onPress={handleNext} />
          <LinkText title="Skip for now" onPress={() => {}} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 24,
    paddingTop: 20,
  },
  backBtn: {
    position: 'relative',
    top: 0,
    left: 0,
    padding: 5,
  },
  stepBar: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  activeStep: {
    width: 74,
    height: 8,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    marginHorizontal: 8,
  },
  inactiveStep: {
    width: 32,
    height: 8,
    borderRadius: 24,
    backgroundColor: Colors.secondary,
    marginHorizontal: 8,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
    minHeight: 360,
    zIndex: 100,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    overflow: 'hidden',
    alignItems: 'center',
  },
  bottomSheetHandle: {
    width: 100,
    height: 7,
    borderRadius: 36,
    backgroundColor: Colors.black2,
    marginVertical: 12,
  },
  profileImg: {
    marginTop: 35,
    width: 336,
    height: 336,
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  formTitle: {
    color: Colors.primary,
    fontSize: 22,
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontWeight: '600',
    lineHeight: 26,
  },
  formDescription: {
    marginTop: 8,
    color: Colors.secondary,
    fontSize: 15,
    fontFamily: PRIMARY_FONT_REGULAR,
    fontWeight: '500',
    lineHeight: 18,
  },
  formBtnsContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gradientBorder: {
    marginLeft: 8,
    flex: 1,
    borderRadius: 58,
    padding: 2,
  },
  formBtn: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 58,
    backgroundColor: '#1C1C1C',
  },
  formBtnText: {
    color: Colors.primary,
    fontSize: 18,
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0.36,
  },
  formActions: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 32,
  },
  nextBtn: {
    width: 200,
    margin: 16,
    alignSelf: 'center',
  },
});

export default AccountCustomisation;
