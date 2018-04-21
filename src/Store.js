import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form'
import createSagaMiddleware from 'redux-saga'

import Sagas from './Sagas'
import allReducers from './Reducers'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  ...allReducers,
  form,
})

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(Sagas)

export default store
