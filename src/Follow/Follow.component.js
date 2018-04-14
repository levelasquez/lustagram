import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export class FollowComponent extends Component {
  navigate = route => () => {
    const { navigation: { navigate } } = this.props

    navigate(route)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Follow Component</Text>
        <Button
          title='Author'
          onPress={this.navigate('Author')}
        />
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
