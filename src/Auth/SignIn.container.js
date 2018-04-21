import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import SignInForm from './Components/SignInForm.component'
import { actionLogin } from './Actions/auth.creator'

export class SignInComponent extends Component {
  handleLogin = values => {
    const { login } = this.props

    login(values)
  }

  handleNavigate = route => () => {
    const { navigation: { navigate } } = this.props

    navigate(route)
  }

  render() {
    return (
      <View style={styles.container}>
        <SignInForm handleLogin={this.handleLogin} />
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

export const mapStateToProps = state => {
  const { reducerTest } = state

  return { reducerTest }
}

export const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(actionLogin(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInComponent)
