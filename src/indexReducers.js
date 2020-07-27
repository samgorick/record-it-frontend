import { combineReducers } from 'redux'
import notesReducer from './note/noteReducer'
import userReducer from './app/userReducer'
import followReducer from './follow/followReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  users: userReducer,
  follow: followReducer
})

export default rootReducer