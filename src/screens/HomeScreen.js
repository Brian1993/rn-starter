import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Button 
        style={styles.title}
        title='Go to components demo'
        onPress={()=> navigation.navigate('Components')}
      />
      <Button 
        style={styles.title}
        title='Go to list screen'
        onPress={()=> navigation.navigate('List')}
      />
      <Button 
        style={styles.title}
        title='Go to Image demo'
        onPress={()=> navigation.navigate('Image')}
      />
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
