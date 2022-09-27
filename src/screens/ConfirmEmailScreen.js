import {SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ConfirmEmailScreen = () => {
  const [code, setCode] = React.useState('');

  const onConfirmPress = () => {
    console.warn('Confirm');
  };

  const onResendPress = () => {
    console.warn('Forget Password');
  };
  const onBackPress = () => {
    console.warn('Forget Password');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder={'Enter your confirmation code'}
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPress} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />
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
export default ConfirmEmailScreen;
