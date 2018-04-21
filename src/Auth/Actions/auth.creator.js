import { REGISTER, LOGIN, SIGNIN, SIGNOUT } from './auth.const'

export const actionRegister = payload => ({
  type: REGISTER,
  payload,
})

export const actionLogin = payload => ({
  type: LOGIN,
  payload,
})

export const actionSignIn = () => ({ type: SIGNIN })

export const actionSignOut = () => ({ type: SIGNOUT })
