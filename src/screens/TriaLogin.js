import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {EyeSlash, Eye} from 'iconsax-react-native';
import {BackButton, Button} from '../components';
import commonStyles from '../styles/styles';
import Colors from '../styles/colors';

const TriaLogin = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);

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
            <Text style={commonStyles.formTitle}>Enter credentials</Text>
            <Text style={commonStyles.inputLabel}>
              Please enter your Tria name
            </Text>
            <View style={commonStyles.inputContainer}>
              <TextInput
                style={commonStyles.input}
                value={username}
                placeholderTextColor={Colors.primary80}
                onChangeText={text => setUsername(text)}
                underlineColorAndroid="transparent"
              />
            </View>
            <Text style={commonStyles.inputLabel}>
              Please confirm your password...
            </Text>
            <View style={commonStyles.inputContainer}>
              <TextInput
                style={commonStyles.input}
                value={password}
                placeholderTextColor={Colors.primary80}
                onChangeText={text => setPassword(text)}
                underlineColorAndroid="transparent"
                secureTextEntry={!passwordVisibility}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisibility(visible => !visible)}>
                {passwordVisibility ? (
                  <Eye size="22" color={Colors.primary} />
                ) : (
                  <EyeSlash size="22" color={Colors.primary} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <Button
            style={commonStyles.nextBtn}
            title="Login"
            onPress={() => {}}
          />
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
});

export default TriaLogin;
