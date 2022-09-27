import {SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const NewPasswordScreen = () => {
  const [code, setCode] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const onSubmitPress = () => {
    console.warn('Submit');
  };

  const onBackPress = () => {
    console.warn('Forget Password');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput placeholder={'Code'} value={code} setValue={setCode} />
        <CustomInput
          placeholder={'Enter your new password'}
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPress} />

        <CustomButton
          text="Back to sign in"
          onPress={onBackPress}
          type="TERTIARY"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
    textAlign: 'center',
  },
  link: {
    color: '#FDB075',
  },
});
export default NewPasswordScreen;
