import { takeEvery } from 'redux-saga/effects'

import { REGISTER, LOGIN } from './Consts'

import Auth from './Auth/Actions/auth.action'

export default function* sagas() {
  yield takeEvery(REGISTER, Auth.register)
  yield takeEvery(LOGIN, Auth.login)
}
