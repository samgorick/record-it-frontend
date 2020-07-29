import { GET_USERS, ACCEPT_FOLLOWER, DECLINE_FOLLOWER, REQUEST_FOLLOW_USER } from '../constants/Types';

import {ENDPOINT} from '../constants/APIs'

export function getUsers(){
  return dispatch => {
    fetch(`${ENDPOINT}/users`)
    .then(resp => resp.json())
    .then(json => {
      dispatch({ type: GET_USERS, users: json })
    })
  }
}

export function followRequest(followObj){
  return dispatch => {
    fetch(`${ENDPOINT}/follows`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ follow: followObj})
    })
    .then(resp => resp.json())
    .then(json => {
      dispatch({ type: REQUEST_FOLLOW_USER, follow: json})
    })
  }
}

export function acceptRequest(followId){
  return dispatch => {
    fetch(`${ENDPOINT}/follows/${followId}`, {
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
    fetch(`${ENDPOINT}/follows/${followId}`, {
      method: 'DELETE'
    })
    dispatch({ type: DECLINE_FOLLOWER, followId: followId })
  }
}