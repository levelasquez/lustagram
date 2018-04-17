import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

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
      <View style={styles.textInput}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
          keyboardType={keyboardType || 'default'}
          autoCapitalize={autoCapitalize || 'none'}
          secureTextEntry={secureTextEntry}
          onBlur={onBlur}
        />
        <View style={styles.line} />
        {touched && error &&
          <Text style={styles.errors}>{error}</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: { marginBottom: 16 },
  line: {
    backgroundColor: '#DCDCDC',
    height: 1,
  },
  errors: { color: '#FF0000' },
})

export default TextInputComponent
