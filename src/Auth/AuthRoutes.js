import React from 'react'
import { Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

const SignIn = () => (<Text>SignIn Component</Text>)

const SignUp = () => (<Text>SignUp Component</Text>)

const AuthRoutes = StackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
})

export { AuthRoutes }
