import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER, SET_NOTES, LOGIN_ERROR } from '../constants/Types';

export function signupUser(user, history) {
  return dispatch => {
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(resp => resp.json())
      .then(userData => {
        dispatch({ type: SIGNUP_USER, userData });
        history.push('/notes');
      });
  };
}

export function loginUser(user, history) {
  return dispatch => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(resp => resp.json())
      .then(userData => {
        if (userData.error) {
          dispatch({ type: LOGIN_ERROR, userData });
        } else {
          console.log(userData)
          dispatch({ type: LOGIN_USER, userData });
          dispatch({ type: SET_NOTES, notes: userData.notes });
          history.push('/notes');
        }
      });
  };
}

export function logoutUser() {
  return { type: LOGOUT_USER };
}
