import { call, put } from 'redux-saga/effects'

import { firebaseRegister, registerDatabase, firebaseLogin, firebaseSignIn } from '../../Firebase'

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
      const user = yield call(firebaseLogin, email, password)

      if (user) {
        yield put({ type: 'USER_SET', payload: user })
      }
    } catch (error) {
      console.log({ error })
    }
  },
  * signin() {
    try {
      const user = yield call(firebaseSignIn)

      if (user) {
        yield put({ type: 'USER_SET', payload: user })
      }
    } catch (error) {
      console.log({ error })
    }
  },
}
