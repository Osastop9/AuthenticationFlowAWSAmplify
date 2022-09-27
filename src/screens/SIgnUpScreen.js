import {SafeAreaView, Text, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSIgnInButtons from '../components/SocialSIgnInButtons';

const SignUpScreen = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');

  const onRegisterPress = () => {
    console.warn('Sign in');
  };

  const onTermsOfUsePress = () => {
    console.warn('Forget Password');
  };
  const onPrivacyPolicyPress = () => {
    console.warn('Forget Password');
  };

  const onSignUpPress = () => {
    console.warn('Facebook');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder={'Email'} value={email} setValue={setEmail} />

        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder={'Confirm Password'}
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPress} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePress}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPress}>
            Privacy Policy
          </Text>
        </Text>
        <SocialSIgnInButtons />

        <CustomButton
          text="Don't have an account? Create one."
          onPress={onSignUpPress}
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
export default SignUpScreen;
