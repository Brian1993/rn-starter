import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'friend1'},
    { name: 'friend2'},
    { name: 'friend3'},
    { name: 'friend4'},
    { name: 'friend5'},
  ]

  return (
    <FlatList 
      data={friends} 
      renderItem={({ item, index }) => <Text key={index}>{item.name}</Text> }
    />
  )
}
const styles = StyleSheet.create({

})

export default ListScreen
