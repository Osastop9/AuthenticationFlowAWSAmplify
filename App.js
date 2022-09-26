import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SigningScreen from './src/screens/SigningScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <SigningScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
