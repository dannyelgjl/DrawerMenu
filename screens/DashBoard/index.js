import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

//import { Block, Text } from 'expo-ui-kit'

// import { Container } from './styles';

const DashBoard = () => {
  return (
    <View style={styles.container}>
      <Text>
        DashBoard
      </Text>
    </View>
  );
}

export default DashBoard;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    
  }
})