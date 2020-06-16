export default function noteReducer(state = [], action){
  switch (action.type){
    case "SET_NOTES":
      return action.notes

    case "ADD_NOTE":
      return [...state, action.note]

    case "EDIT_NOTE":
      return state.map(note => note.id === action.note.id ? action.note : note)
    
    default:
      return state
  }
}