import { GET_USERS } from '../constants/Types';

const USERAPI = 'http://localhost:3000/users'
const FOLLOWAPI = 'http://localhost:3000/follows'

export function getUsers(){
  return dispatch => {
    fetch(USERAPI)
    .then(resp => resp.json())
    .then(json => {
      dispatch({ type: GET_USERS, users: json })
    })
  }
}

export function getFollowedUsers(id){
  return dispatch => {
    fetch(`${FOLLOWAPI}/${id}`)
    .then(resp => resp.json())
    .then(json => { 
      console.log(json)
    })
  }
}

export function followRequest(followObj){
  return dispatch => {
    fetch(FOLLOWAPI, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ follow: followObj})
    })
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
    })
  }
}