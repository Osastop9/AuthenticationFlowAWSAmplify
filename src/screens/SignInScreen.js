import {SafeAreaView, Text, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSIgnInButtons from '../components/SocialSIgnInButtons';

const SigningScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignInPress = () => {
    console.warn('Sign in');
  };

  const onForgetPasswordPress = () => {
    console.warn('Forget Password');
  };

  const onSignUpPress = () => {
    console.warn('Facebook');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>O</Text>
        </View>
        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign in" onPress={onSignInPress} />
        <CustomButton
          text="Forgot password?"
          onPress={onForgetPasswordPress}
          type="TERTIARY"
        />
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
  logoContainer: {
    width: 100,
    backgroundColor: '#6EDBFF',
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 70,
  },
  logo: {
    fontSize: 90,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default SigningScreen;
