const API = 'http://localhost:3000/notes'

export function addNote(note, history) {
  return dispatch => {
    dispatch({ type: "START_ADD_NOTE" })
    fetch(API, {
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

export function editNote(note, history) {
  return dispatch => {
    dispatch({ type: "START_EDIT_NOTE" })
    fetch(`${API}/${note.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(note)
    })
    .then(resp => resp.json())
    .then(json => {
      dispatch({type: "EDIT_NOTE", note: json})
      history.push('/notes')
    })
  }
}

export function deleteNote(noteId, history) {
  return dispatch => {
    dispatch({ type: "START_DELETE" })
    fetch(`${API}/${noteId}`, { method: "DELETE"})
    .then(resp => resp.json())
    .then(json => {
      dispatch({type: "DELETE_NOTE", noteId})
      history.push('/notes')
    })
  }
}