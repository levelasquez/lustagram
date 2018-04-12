import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { AuthRoutes, TabRoutes } from './src/Routes'

console.disableYellowBox = ['Remote debugger']

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <AuthRoutes /> */}
        <TabRoutes />
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

export default App
