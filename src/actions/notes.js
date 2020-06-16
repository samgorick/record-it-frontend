export function addNote(note, history) {
  return dispatch => {
    dispatch({ type: "START_ADD_NOTE" })
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(note)
    })
    .then(resp => resp.json())
    .then(json => {
      dispatch({type: "ADD_NOTE", note: json})
      history.push('/notes')
    })
  }
}