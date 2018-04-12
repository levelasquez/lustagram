import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'

const SignIn = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Text>SignIn Component</Text>
    <Button
      title='Sign Up'
      onPress={() => navigate('SignUp')}
    />
  </View>
)

const SignUp = ({ navigation: { goBack } }) => (
  <View style={styles.container}>
    <Text>SignUp Component</Text>
    <Button
      title='Sign In'
      onPress={() => goBack()}
    />
  </View>
)

const AuthRoutes = StackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
}, { headerMode: 'none' })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export { AuthRoutes }
