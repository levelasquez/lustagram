import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const reducerTest = (state = [0], action) => {
  switch (action.type) {
    case 'ADD_REDUCER_TEST':
      return [...state, 1]
    default:
      return state
  }
}

const reducers = combineReducers({
  reducerTest,
  form,
})

const store = createStore(reducers)

export default store
