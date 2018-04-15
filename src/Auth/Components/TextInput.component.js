import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'

export class TextInputComponent extends Component {
  render() {
    const {
      input: {
        onChange,
        value,
        onBlur,
      },
      meta: {
        error,
        touched,
      },
      placeholder,
      keyboardType,
      autoCapitalize,
      secureTextEntry,
    } = this.props

    return (
      <View>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
          keyboardType={keyboardType || 'default'}
          autoCapitalize={autoCapitalize || 'none'}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
        />
        {touched && error &&
          <Text>{error}</Text>}
      </View>
    )
  }
}

export default TextInputComponent
