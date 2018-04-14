import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export class CommentComponent extends Component {
  static navigationOptions = { tabBarVisible: false }

  navigate = route => () => {
    const { navigation: { navigate } } = this.props

    navigate(route)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Comment Component</Text>
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

export default CommentComponent
