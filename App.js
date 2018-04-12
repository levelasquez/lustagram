import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { AuthRoutes } from './src/Auth/AuthRoutes'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthRoutes />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
