import React from 'react'
import { Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

const SignIn = ({ navigation: { navigate } }) => (
  <View>
    <Text>SignIn Component</Text>
    <Button
      title='Sign Up'
      onPress={() => navigate('SignUp')}
    />
  </View>
)

const SignUp = ({ navigation: { goBack } }) => (
  <View>
    <Text>SignUp Component</Text>
    <Button
      title='Sign In'
      onPress={() => goBack()}
    />
  </View>
)

const AuthRoutes = StackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
})

export { AuthRoutes }
