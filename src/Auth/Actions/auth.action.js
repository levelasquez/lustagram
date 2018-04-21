import { call } from 'redux-saga/effects'

import { firebaseRegister, registerDatabase, firebaseLogin } from '../../Firebase'

export default {
  * register({ payload: { email, password, name } }) {
    try {
      const { uid: userId } = yield call(firebaseRegister, email, password)
      yield call(registerDatabase, userId, email, name)
    } catch (error) {
      console.log({ error })
    }
  },
  * login({ payload: { email, password } }) {
    try {
      yield call(firebaseLogin, email, password)
    } catch (error) {
      console.log({ error })
    }
  },
}
