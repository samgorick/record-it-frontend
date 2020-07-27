import { GET_USERS } from '../constants/Types'

export default function followerReducer(state = null, action){
  switch (action.type){
    case GET_USERS:
      return sorted(action.users)

    default:
      return state
  }
}

function sorted(users){
  return users.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1: -1)
}
