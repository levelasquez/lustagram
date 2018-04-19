import { takeEvery, call } from 'redux-saga/effects'

import { Authentication } from './Firebase'

const firebaseRegister = (email, password) =>
  Authentication.createUserWithEmailAndPassword(email, password)
    .then(success => console.log({ success }))
    .catch(error => console.log({ error }))

function* register({ payload: { email, password } }) {
  yield call(firebaseRegister, email, password)
}

export default function* sagas() {
  yield takeEvery('REGISTER', register)
}
