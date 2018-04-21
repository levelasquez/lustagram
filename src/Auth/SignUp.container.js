import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import SignUpForm from './Components/SignUpForm.component'
import { actionRegister } from './Actions/auth.creator'

export class SignUpComponent extends Component {
  handleRegister = values => {
    const { register } = this.props

    register(values)
  }

  handleGoBack = () => {
    const { navigation: { goBack } } = this.props

    goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm handleRegister={this.handleRegister} />
        <Button
          title='Sign In'
          onPress={this.handleGoBack}
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

  return {
    number: reducerTest,
  }
}

export const mapDispatchToProps = dispatch => ({
  register: payload => dispatch(actionRegister(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpComponent)
