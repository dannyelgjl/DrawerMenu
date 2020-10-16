import React from 'react';

import { View, Text, StyleSheet } from 'react-native'
//import { Block, Text } from 'expo-ui-kit'

// import { Container } from './styles';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
        Contact
      </Text>
    </View>
  );
}

export default Contact;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#AF0D0D",
    justifyContent: "center",
    
  }
})