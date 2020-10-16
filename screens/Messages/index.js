import React from 'react';

import { View, Text, StyleSheet } from 'react-native'

//import { Block, Text } from 'expo-ui-kit'

// import { Container } from './styles';

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
        Messages
      </Text>
    </View>
  );
}


export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#AEA135",
    justifyContent: "center",
    
  }
})