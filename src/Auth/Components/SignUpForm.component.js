import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import TextInput from './TextInput.component'
import validate from './validateSignUp'

export class SignUpFormComponent extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <View>
        <Field
          name='name'
          placeholder='name'
          component={TextInput}
          autoCapitalize='words'
        />
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
        <Field
          name='confirmation'
          placeholder='******'
          component={TextInput}
          secureTextEntry
        />
        <Button
          title='Register'
          onPress={handleSubmit(values => console.log(values))}
        />
      </View>
    )
  }
}

export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpFormComponent)
