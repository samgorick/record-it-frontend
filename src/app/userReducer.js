import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER, LOGIN_ERROR } from '../constants/Types'

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {id: action.userData.id, username: action.userData.username}

    case SIGNUP_USER:
      return {id: action.userData.id, username: action.userData.username}

    case LOGOUT_USER:
      return {}

    case LOGIN_ERROR:
      return {error: action.userData.error}
      
    default:
      return state;
  }
}
