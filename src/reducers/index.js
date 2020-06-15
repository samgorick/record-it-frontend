import { combineReducers } from 'redux'
import notesReducer from './noteReducer'
import usersReducer from './userReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  users: usersReducer
})

export default rootReducer