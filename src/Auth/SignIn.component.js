import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

import SignInForm from './Components/SignInForm.component'

export class SignInComponent extends Component {
  handleNavigate = route => () => {
    const { navigation: { navigate } } = this.props

    navigate(route)
  }

  render() {
    return (
      <View style={styles.container}>
        <SignInForm />
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
    paddingHorizontal: 16,
  },
})

export default SignInComponent
