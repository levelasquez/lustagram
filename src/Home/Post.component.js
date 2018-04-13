import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export class PostComponent extends Component {
  navigate = route => () => {
    const { navigation: { navigate } } = this.props

    navigate(route)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Post Component</Text>
        <Button
          title='Comment'
          onPress={this.navigate('Comment')}
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

export default PostComponent
