import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class FeedComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Feed Component</Text>
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

export default FeedComponent
