import {SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ForgetPasswordScreen = () => {
  const [username, setUsername] = React.useState('');

  const onSendPress = () => {
    console.warn('Send');
  };
  const onBackPress = () => {
    console.warn('Forget Password');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="Send" onPress={onSendPress} />

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
export default ForgetPasswordScreen;
