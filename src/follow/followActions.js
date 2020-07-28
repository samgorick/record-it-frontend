import { GET_USERS, ACCEPT_FOLLOWER, DECLINE_FOLLOWER } from '../constants/Types';

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

export function acceptRequest(followId){
  return dispatch => {
    fetch(`${FOLLOWAPI}/${followId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ follow: {id: followId, allow: true}})
    })
    .then(resp => resp.json())
    .then(json => {
      dispatch({ type: ACCEPT_FOLLOWER, follow: json})
    })
  }
}

export function declineRequest(followId){
  return dispatch => {
    fetch(`${FOLLOWAPI}/${followId}`, {
      method: 'DELETE'
    })
    dispatch({ type: DECLINE_FOLLOWER, followId: followId })
  }
}