export default function noteReducer(state = [], action){
  switch (action.type){
    case "SET_NOTES":
      return sorted(action.notes)

    case "ADD_NOTE":
      return sorted([...state, action.note])

    case "EDIT_NOTE":
      return sorted(state.map(note => note.id === action.note.id ? action.note : note))

    case "DELETE_NOTE":
      console.log("in reducer", action.noteId)
      console.log(state)
      return sorted(state.filter(note => note.id !== action.noteId))
    
    default:
      return state
  }
}

function sorted(notesArr){
  return notesArr.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1)
}