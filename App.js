
import React from 'react';
import { StyleSheet} from 'react-native';
import { Block, Text } from 'expo-ui-kit'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <Block center middle>
      <Text>Open up App.js to start working on your app!</Text>
      <Text bold>React-Navigation v5</Text>
    </Block>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
