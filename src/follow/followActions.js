import { GET_USERS } from '../constants/Types';

const API = 'http://localhost:3000/users'

export function getUsers(){
  return dispatch => {
    fetch(API)
    .then(resp => resp.json())
    .then(json => {
      dispatch({ type: GET_USERS, users: json })
    })
  }
}