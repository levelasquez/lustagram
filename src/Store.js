import { createStore, combineReducers } from 'redux'

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
})

const store = createStore(reducers)

export default store
