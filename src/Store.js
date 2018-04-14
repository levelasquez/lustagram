import { createStore, combineReducers } from 'redux'

const reducerTest = (state = [], action) => state

const reducers = combineReducers({
  reducerTest,
})

const store = createStore(reducers)

export default store
