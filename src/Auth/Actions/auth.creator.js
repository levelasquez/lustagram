import { REGISTER, LOGIN } from './auth.const'

export const actionRegister = payload => ({
  type: REGISTER,
  payload,
})

export const actionLogin = payload => ({
  type: LOGIN,
  payload,
})
