import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextInput from './TextInput.component'
import validate from './validateSignIn'

export class SignInFormComponent extends Component {
  render() {
    const {
      handleSubmit,
      handleLogin,
    } = this.props

    return (
      <View>
        <Field
          name='email'
          placeholder='email@provider.com'
          component={TextInput}
          keyboardType='email-address'
        />
        <Field
          name='password'
          placeholder='******'
          component={TextInput}
          secureTextEntry
        />
        <Button
          title='Sign In'
          onPress={handleSubmit(handleLogin)}
        />
      </View>
    )
  }
}

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInFormComponent)
