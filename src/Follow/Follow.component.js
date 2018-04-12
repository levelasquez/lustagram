import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class FollowComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Follow Component</Text>
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

export default FollowComponent
