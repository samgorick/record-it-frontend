export default function noteReducer(state = [], action){
  switch (action.type){
    case "ADD_NOTE":
      console.log(state)
      return [...state, action.note]
    default:
      return state
  }
}