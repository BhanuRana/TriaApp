import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {BackButton, Button, LinkText} from '../components';
import commonStyles from '../styles/styles';

const SetupSecurity = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={commonStyles.screenTitle}>Setup Security</Text>
          <Text style={commonStyles.screenDescription}>
            secure access made simple
          </Text>
        </View>
        <Image
          style={styles.faceIdImg}
          source={require('../assets/face-id-logo.png')}
        />
        <View style={styles.actionButtons}>
          <Text style={commonStyles.formTitle}>Setup Face ID?</Text>
          <Text style={[commonStyles.inputLabel, styles.inputLabel]}>
            Set up your Face ID to access the app or approve transactions.
          </Text>
          <Button
            style={commonStyles.nextBtn}
            title="Allow"
            onPress={() => navigation.navigate('AccountCustomisation')}
          />
          <LinkText title="Setup later" onPress={() => {}} />
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
    justifyContent: 'space-between',
  },
  topContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 76,
  },
  faceIdImg: {
    width: 80,
    height: 80,
  },
  inputLabel: {
    marginTop: 8,
    marginBottom: 8,
  },
  actionButtons: {
    width: '100%',
    paddingHorizontal: 24,
    marginBottom: 40,
  },
});

export default SetupSecurity;
