import { combineReducers } from 'redux'
import notesReducer from './note/noteReducer'
import userReducer from './app/userReducer'
import allUsersReducer from './follow/followReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  users: userReducer,
  allUsers: allUsersReducer
})

export default rootReducer