import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const fieldName = props => {
  const {
    input: {
      onChange,
      value,
    },
  } = props

  return (
    <TextInput
      placeholder='text from field name'
      onChangeText={onChange}
      value={value}
    />
  )
}

export class SignUpFormComponent extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <View>
        <Field
          name='name'
          component={fieldName}
        />
        <Field
          name='email'
          component={fieldName}
        />
        <Text>Redux Form</Text>
        <Button
          title='Register'
          onPress={handleSubmit(values => console.log(values))}
        />
      </View>
    )
  }
}

export default reduxForm({ form: 'SignUpForm' })(SignUpFormComponent)
