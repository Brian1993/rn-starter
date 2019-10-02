import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  let name = 'Brian!'
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Hello world</Text>
      <Text style={styles.content}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'grey',
    // height: 100
  },
  title: {
    fontSize: 50,
  },
  content: {
    fontSize: 20
  } 
});

export default HomeScreen;
