import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'

import Store from './src/Store'
import Navigation from './src'

console.disableYellowBox = ['Remote debugger']

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Navigation />
        </Provider>
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
