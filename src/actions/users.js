export function loginUser(username) {
  return dispatch => {
    dispatch({ type: "START_USER_LOGIN" });
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ username: username })
    })
      .then(resp => resp.json())
      .then(userData => console.log(userData));
  };
}

// return {type: "LOGIN_USER", username: username }
