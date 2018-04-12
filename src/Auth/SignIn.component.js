import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export const SignInComponent = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Text>SignIn Component</Text>
    <Button
      title='Sign Up'
      onPress={() => navigate('SignUp')}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default SignInComponent
