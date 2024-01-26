import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet} from 'react-native';
import {BackButton, Button, LinkText} from '../components';
import commonStyles from '../styles/styles';
import Colors from '../styles/colors';

const ContinueWithEmail = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <View style={styles.topContainer}>
          <Text style={commonStyles.screenTitle}>Login to Tria</Text>
          <Text style={commonStyles.screenDescription}>
            to access your Tria wallet
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formInputs}>
            <Text style={commonStyles.formTitle}>Enter your email</Text>
            <Text style={[commonStyles.inputLabel, styles.inputLabel]}>
              We’ve sent you the OTP via email. Please enter to continue...
            </Text>
            <View style={commonStyles.inputContainer}>
              <TextInput
                style={commonStyles.input}
                value={email}
                placeholderTextColor={Colors.primary80}
                onChangeText={text => setEmail(text)}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.formActions}>
            <Button
              style={commonStyles.nextBtn}
              title="Next"
              onPress={() => navigation.navigate('SetupSecurity')}
            />
            <LinkText title="Login with Phone" onPress={() => {}} />
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
  topContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 76,
  },
  formContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 160,
    marginBottom: 16,
  },
  formInputs: {
    width: '100%',
  },
  inputLabel: {
    marginTop: 8,
    marginBottom: 24,
  },
  formActions: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
});

export default ContinueWithEmail;
