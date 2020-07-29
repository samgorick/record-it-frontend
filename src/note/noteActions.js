import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../constants/Types';

import {ENDPOINT} from '../constants/APIs'

export function addNote(note, history) {
  return dispatch => {
    fetch(`${ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(note)
    })
      .then(resp => resp.json())
      .then(json => {
        dispatch({ type: ADD_NOTE, note: json });
        history.push('/notes');
      });
  };
}

export function editNote(note, history) {
  return dispatch => {
    fetch(`${ENDPOINT}/notes/${note.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(note)
    })
      .then(resp => resp.json())
      .then(json => {
        dispatch({ type: EDIT_NOTE, note: json });
        history.push('/notes');
      });
  };
}

export function deleteNote(noteId, history) {
  return dispatch => {
    fetch(`${ENDPOINT}/notes/${noteId}`, { method: 'DELETE' })
      .then(resp => resp.json())
      .then(json => {
        dispatch({ type: DELETE_NOTE, noteId });
        history.push('/notes');
      });
  };
}
