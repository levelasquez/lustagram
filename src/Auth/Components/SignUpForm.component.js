import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const fieldName = () => <TextInput placeholder='text from field name' />

export class SignUpFormComponent extends Component {
  render() {
    return (
      <View>
        <Field
          name='name'
          component={fieldName}
        />
        <Text>Redux Form</Text>
      </View>
    )
  }
}

export default reduxForm({ form: 'SignUpForm' })(SignUpFormComponent)
