import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
  FadeInRight,
  FadeOutLeft,
} from 'react-native-reanimated';
import {Gallery, Moon, Sun1} from 'iconsax-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BackButton, Button, LinkText, TriaCard} from '../components';
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
  <Animated.View style={styles.formContainer} exiting={FadeOutLeft}>
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

const WalletPreview = ({selectedColor}) => (
  <Animated.View style={styles.walletCard} entering={FadeIn} exiting={FadeOut}>
    <TriaCard color={selectedColor} variant="form" />
  </Animated.View>
);

const WalletColorForm = ({selectedColor, setSelectedColor}) => (
  <Animated.View
    style={styles.formContainer}
    entering={FadeInRight}
    exiting={SlideOutLeft}>
    <Text style={styles.formTitle}>Choose wallet colour</Text>
    <Text style={styles.formDescription}>
      Choose the color that suits your persona. This color will be used in your
      card as well as throughout the wallet.
    </Text>
    <View style={[styles.formBtnsContainer, {paddingHorizontal: 24}]}>
      {['#4845d2', '#ffae06', '#ba3d5d', '#52c979'].map(color => (
        <TouchableOpacity
          key={color}
          onPress={() => setSelectedColor(color)}
          style={[
            styles.formBtn,
            {width: 64, height: 64, backgroundColor: color},
          ]}>
          {selectedColor === color && <View style={styles.selectedColor} />}
        </TouchableOpacity>
      ))}
    </View>
  </Animated.View>
);

const SelectPlatformThemeForm = ({currentTheme, setCurrentTheme}) => (
  <Animated.View
    style={styles.formContainer}
    entering={FadeInRight}
    exiting={SlideOutLeft}>
    <Text style={styles.formTitle}>Choose app theme</Text>
    <Text style={styles.formDescription}>
      Choose the color that you prefer using on your mobile device.
    </Text>
    <View
      style={[
        styles.formBtnsContainer,
        {justifyContent: 'flex-start', marginTop: 14},
      ]}>
      {currentTheme === 'dark' ? (
        <>
          <View style={{alignItems: 'center', marginHorizontal: 16}}>
            <TouchableOpacity
              style={[
                styles.formBtn,
                {width: 52, height: 52, backgroundColor: '#5E52E9'},
              ]}>
              <View style={styles.activeThemeHighlighter}>
                <Moon size="24" color={Colors.secondary} variant="Bold" />
              </View>
            </TouchableOpacity>
            <Text style={styles.activeThemeText}>Dark mode</Text>
          </View>
          <View style={{alignItems: 'center', marginHorizontal: 16}}>
            <TouchableOpacity
              onPress={() => setCurrentTheme('light')}
              style={[styles.formBtn, {width: 52, height: 52}]}>
              <Sun1 size="24" color={Colors.secondary} />
            </TouchableOpacity>
            <Text style={styles.inactiveThemeText}>Light mode</Text>
          </View>
        </>
      ) : (
        <>
          <View style={{alignItems: 'center', marginHorizontal: 16}}>
            <TouchableOpacity
              onPress={() => setCurrentTheme('dark')}
              style={[styles.formBtn, {width: 52, height: 52}]}>
              <Moon size="24" color={Colors.secondary} />
            </TouchableOpacity>
            <Text style={styles.inactiveThemeText}>Dark mode</Text>
          </View>
          <View style={{alignItems: 'center', marginHorizontal: 16}}>
            <LinearGradient
              colors={['#FFBC1199', '#FFBC111A', '#FFBC111A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradientBorder}>
              <TouchableOpacity
                style={[
                  styles.formBtn,
                  {width: 52, height: 52, backgroundColor: 'transparent'},
                ]}>
                <View style={styles.activeThemeHighlighter}>
                  <Sun1 size="24" color={Colors.yellow} variant="Bold" />
                </View>
              </TouchableOpacity>
            </LinearGradient>
            <Text style={styles.activeThemeText}>Light mode</Text>
          </View>
        </>
      )}
    </View>
  </Animated.View>
);

const AccountCustomisation = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#52c979');
  const [currentTheme, setCurrentTheme] = useState('dark');

  const handleNext = () => {
    if (currentStep === NUM_OF_STEPS - 1) {
      // navigation.navigate('WelcomeToTria');
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
      {currentStep === 1 && <WalletPreview selectedColor={selectedColor} />}
      {currentStep === 2 && (
        <WalletPreview
          selectedColor={selectedColor}
          currentTheme={currentTheme}
        />
      )}
      <Animated.View style={styles.bottomSheet}>
        <View style={styles.bottomSheetHandle} />
        {currentStep === 0 && <ProfileImageForm />}
        {currentStep === 1 && (
          <WalletColorForm
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        )}
        {currentStep === 2 && (
          <SelectPlatformThemeForm
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
        )}
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
    fontSize: 14,
    fontFamily: PRIMARY_FONT_REGULAR,
    fontWeight: '500',
    lineHeight: 18,
  },
  formBtnsContainer: {
    width: '100%',
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
  walletCard: {
    width: '64%',
    marginTop: 42,
  },
  selectedColor: {
    width: 42,
    height: 42,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: Colors.primary,
  },
  activeThemeText: {
    marginTop: 4,
    color: Colors.primary80,
    fontSize: 14,
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: 0.6,
  },
  inactiveThemeText: {
    marginTop: 4,
    color: Colors.secondary,
    fontSize: 14,
    fontFamily: PRIMARY_FONT_REGULAR,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0.6,
  },
  activeThemeHighlighter: {
    padding: 4,
    borderWidth: 4,
    borderRadius: 40,
    borderColor: Colors.primary60,
  },
  nextBtn: {
    width: 200,
    margin: 16,
    alignSelf: 'center',
  },
});

export default AccountCustomisation;
