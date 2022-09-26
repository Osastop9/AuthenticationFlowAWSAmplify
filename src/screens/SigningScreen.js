import {SafeAreaView, Text, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SigningScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignInPress = () => {
    console.warn('Sign in');
  };

  const onForgetPasswordPress = () => {
    console.warn('Forget Password');
  };

  const onSignInFacebook = () => {
    console.warn('Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Facebook');
  };

  const onSignInApple = () => {
    console.warn('Facebook');
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
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor={'#4765A9'}
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with AppleID"
          onPress={onSignInApple}
          bgColor="#E3E3E3"
          fgColor="#363636"
        />
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
    backgroundColor: 'yellow',
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
