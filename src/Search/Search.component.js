import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class SearchComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SearchComponent
