import { takeEvery, call } from 'redux-saga/effects'

import { Authentication, Database } from './Firebase'

const firebaseRegister = (email, password) =>
  Authentication.createUserWithEmailAndPassword(email, password)
    .then(user => user.toJSON())

const registerDatabase = (userId, email, name) =>
  Database.ref(`users/${userId}`).set({
    name,
    email,
  })

function* register({ payload: { email, password, name } }) {
  try {
    const { uid: userId } = yield call(firebaseRegister, email, password)
    yield call(registerDatabase, userId, email, name)
  } catch (error) {
    console.log({ error })
  }
}

export default function* sagas() {
  yield takeEvery('REGISTER', register)
}
