import { combineReducers } from 'redux'
import notesReducer from './noteReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  users: userReducer
})

export default rootReducer