import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {TickCircle} from 'iconsax-react-native';
import {BackButton, XpBtn, Button, LinkText} from '../components';
import commonStyles, {PRIMARY_FONT_REGULAR} from '../styles/styles';
import Colors from '../styles/colors';

const SignUpWithTria = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [usernameAvailable, setUsernameAvailable] = useState(null);

  useEffect(() => {
    if (username?.length >= 3) {
      setUsernameAvailable(true);
    } else {
      setUsernameAvailable(false);
    }
  }, [username]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          />
          <XpBtn text="125 XP" onPress={() => {}} />
        </View>
        <View style={styles.topContainer}>
          <Text style={commonStyles.screenTitle}>Create Tria name</Text>
          <Text style={commonStyles.screenDescription}>
            your username to web3
          </Text>
          <Image
            style={styles.floatingAvatarsImg}
            source={require('../assets/floating-avatars.png')}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formInputs}>
            <View style={commonStyles.inputContainer}>
              <TextInput
                style={commonStyles.input}
                value={username}
                placeholder="cathy"
                placeholderTextColor={Colors.primary80}
                onChangeText={text => setUsername(text)}
                underlineColorAndroid="transparent"
              />
              <Text style={[commonStyles.inputIcon]}>@tria</Text>
            </View>
            {usernameAvailable && (
              <View style={styles.inputFeedback}>
                <View style={styles.successInfo}>
                  <TickCircle size="22" color={Colors.success} variant="Bold" />
                  <Text style={[commonStyles.font16, styles.successInfoText]}>
                    username available
                  </Text>
                </View>
                <Text style={styles.freeTag}>Free</Text>
              </View>
            )}
          </View>
          <View style={styles.actionBtns}>
            <Text style={[commonStyles.font15Gray, styles.termsHelperText]}>
              Tapping on next, you agree to our{' '}
              <Text style={{textDecorationLine: 'underline'}}>T&C.</Text>
            </Text>
            <Button
              style={commonStyles.nextBtn}
              title="Next"
              onPress={() => {}}
            />
          </View>
        </View>
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
  topContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
  },
  floatingAvatarsImg: {
    width: '100%',
    height: 360,
  },
  formContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formInputs: {
    width: '100%',
  },
  inputFeedback: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  successInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  successInfoText: {
    marginLeft: 8,
    color: Colors.success,
  },
  freeTag: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 104,
    backgroundColor: Colors.blue,
    color: Colors.primary,
    fontSize: 16,
    fontFamily: PRIMARY_FONT_REGULAR,
    lineHeight: 16,
    fontWeight: '600',
    letterSpacing: 0.28,
  },
  actionBtns: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 16,
  },
  termsHelperText: {
    marginTop: 8,
  },
});

export default SignUpWithTria;
