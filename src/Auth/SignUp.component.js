import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export const SignUpComponent = ({ navigation: { goBack } }) => (
  <View style={styles.container}>
    <Text>SignUp Component</Text>
    <Button
      title='Sign In'
      onPress={() => goBack()}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default SignUpComponent
