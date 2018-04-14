import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export class SignInComponent extends Component {
  handleNavigate = route => () => {
    const { navigation: { navigate } } = this.props

    navigate(route)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn Component</Text>
        <Button
          title='Sign Up'
          onPress={this.handleNavigate('SignUp')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default SignInComponent
