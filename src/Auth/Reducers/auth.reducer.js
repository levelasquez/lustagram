import { SIGNIN, SIGNOUT } from '../Actions/auth.const'

const initialState = { user: null }

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload,
      }
    case SIGNOUT:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}
