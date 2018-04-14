import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export class SignUpComponent extends Component {
  handleGoBack = () => {
    const { navigation: { goBack } } = this.props

    goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SignUp Component</Text>
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
  },
})

export default SignUpComponent
