import {
  START_LOADING,
  END_LOADING,
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER,
  SET_NOTES,
  LOGIN_ERROR,
  SET_FOLLOWERS,
  SET_USERS_FOLLOWED
} from '../constants/Types';

export function signupUser(user, history) {
  return dispatch => {
    dispatch({ type: START_LOADING });
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(resp => resp.json())
      .then(userData => {
        dispatch({ type: END_LOADING });
        localStorage.setItem('token', userData.jwt);
        dispatch({ type: SIGNUP_USER, userData });
        history.push('/notes');
      });
  };
}

export function loginUser(user, history) {
  return dispatch => {
    dispatch({ type: START_LOADING });
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
          dispatch({ type: END_LOADING });
          dispatch({ type: LOGIN_ERROR, userData });
        } else {
          dispatch({ type: END_LOADING });
          localStorage.setItem('token', userData.jwt);
          dispatch({ type: LOGIN_USER, userData });
          dispatch({ type: SET_NOTES, notes: userData.notes });
          dispatch({ type: SET_FOLLOWERS, followers: userData.received_follows });
          dispatch({ type: SET_USERS_FOLLOWED, usersFollowed: userData.given_follows });
          history.push('/notes');
        }
      });
  };
}

export function getCurrentUser(token) {
  return dispatch => {
    dispatch({ type: START_LOADING });
    fetch('http://localhost:3000/login', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(userData => {
        dispatch({ type: END_LOADING });
        localStorage.setItem('token', userData.jwt);
        dispatch({ type: LOGIN_USER, userData });
        dispatch({ type: SET_NOTES, notes: userData.notes });
        dispatch({ type: SET_FOLLOWERS, followers: userData.received_follows });
        dispatch({ type: SET_USERS_FOLLOWED, usersFollowed: userData.given_follows });
      });
  };
}

export function logoutUser() {
  localStorage.removeItem('token');
  return { type: LOGOUT_USER };
}
