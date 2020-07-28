import { SET_USERS_FOLLOWED } from '../constants/Types'

export default function followerReducer(state = null, action){
  switch (action.type){
    case SET_USERS_FOLLOWED:
      return sorted(action.usersFollowed)

    default:
      return state
  }
}

function sorted(users){
  return users.sort((a, b) => a.follower.username.toLowerCase() > b.follower.username.toLowerCase() ? 1: -1)
}