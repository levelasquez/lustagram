import { takeEvery } from 'redux-saga/effects'

import { REGISTER, LOGIN, SIGNIN } from './Consts'

import Auth from './Auth/Actions/auth.action'

export default function* sagas() {
  yield takeEvery(REGISTER, Auth.register)
  yield takeEvery(LOGIN, Auth.login)
  yield takeEvery(SIGNIN, Auth.signin)
}
