import { SET_FOLLOWERS, ACCEPT_FOLLOWER, DECLINE_FOLLOWER } from '../constants/Types'

export default function followerReducer(state = null, action){
  switch (action.type){
    case SET_FOLLOWERS:
      return sorted(action.followers)

    case ACCEPT_FOLLOWER:
      return sorted(state.map(follow => follow.id === action.follow.id ? action.follow : follow))

    case DECLINE_FOLLOWER:
      return sorted(state.filter(follow => follow.id !== action.followId))

    default:
      return state
  }
}

function sorted(users){
  return users.sort((a, b) => a.follower.username.toLowerCase() > b.follower.username.toLowerCase() ? 1: -1)
}
