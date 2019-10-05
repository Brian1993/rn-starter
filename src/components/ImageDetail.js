import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  )  
}

const styles = StyleSheet.create({
  
});

export default ImageDetail;
