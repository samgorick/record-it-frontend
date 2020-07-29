import { combineReducers } from 'redux'
import notesReducer from './note/noteReducer'
import userReducer from './app/userReducer'
import allUsersReducer from './app/allUsersReducer'
import followedUsersReducer from './follow/followedUsersReducer'
import followersReducer from './follow/followReducer'
import loaderReducer from './app/loader/loaderReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  users: userReducer,
  allUsers: allUsersReducer,
  followedUsers: followedUsersReducer,
  followers: followersReducer,
  loading: loaderReducer
})

export default rootReducer