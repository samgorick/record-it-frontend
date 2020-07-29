import { SET_USERS_FOLLOWED, REQUEST_FOLLOW_USER, LOGOUT_USER } from '../constants/Types'

export default function followedUsersReducer(state = null, action){
  switch (action.type){
    case SET_USERS_FOLLOWED:
      return sorted(action.usersFollowed)

    case REQUEST_FOLLOW_USER:
      return sorted([...state, action.follow])

    case LOGOUT_USER:
      return null

    default:
      return state
  }
}

function sorted(users){
  return users.sort((a, b) => a.follower.username.toLowerCase() > b.follower.username.toLowerCase() ? 1: -1)
}