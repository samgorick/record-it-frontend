import { combineReducers } from 'redux'
import notesReducer from './note/noteReducer'
import userReducer from './app/userReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  users: userReducer
})

export default rootReducer