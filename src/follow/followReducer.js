import { SET_FOLLOWERS } from '../constants/Types'

export default function followerReducer(state = null, action){
  switch (action.type){
    case SET_FOLLOWERS:
      return sorted(action.followers)

    default:
      return state
  }
}

function sorted(users){
  return users.sort((a, b) => a.follower.username.toLowerCase() > b.username.follower.toLowerCase() ? 1: -1)
}
