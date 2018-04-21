import { call, put } from 'redux-saga/effects'

import { firebaseRegister, registerDatabase, firebaseLogin, firebaseSignIn } from '../../Firebase'
import { SIGNIN, SIGNOUT } from './auth.const'

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
  * signin() {
    try {
      const user = yield call(firebaseSignIn)

      if (user) {
        yield put({ type: SIGNIN, payload: user })
      } else {
        yield put({ type: SIGNOUT })
      }
    } catch (error) {
      console.log({ error })
    }
  },
}
