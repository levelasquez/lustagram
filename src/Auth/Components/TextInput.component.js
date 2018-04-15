import React, { Component } from 'react'
import { TextInput } from 'react-native'

export class TextInputComponent extends Component {
  render() {
    const {
      input: {
        onChange,
        value,
      },
      placeholder,
      keyboardType,
      autoCapitalize,
      secureTextEntry,
    } = this.props

    return (
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        keyboardType={keyboardType || 'default'}
        autoCapitalize={autoCapitalize || 'none'}
        secureTextEntry={secureTextEntry}
      />
    )
  }
}

export default TextInputComponent
