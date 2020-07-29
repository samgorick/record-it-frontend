import { GET_USERS, LOGOUT_USER } from '../constants/Types'

export default function allUsersReducer(state = null, action){
  switch (action.type){
    case GET_USERS:
      return sorted(action.users)

    case LOGOUT_USER:
      return null

    default:
      return state
  }
}

function sorted(users){
  return users.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1: -1)
}