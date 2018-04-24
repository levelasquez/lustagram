import { SIGNOUT } from '../Actions/auth.const'

const defaultState = { user: null }

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case 'USER_SET':
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
