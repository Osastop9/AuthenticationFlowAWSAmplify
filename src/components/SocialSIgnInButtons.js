import {} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const SocialSIgnInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Facebook');
  };

  const onSignInApple = () => {
    console.warn('Facebook');
  };
  return (
    <>
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
    </>
  );
};

export default SocialSIgnInButtons;
