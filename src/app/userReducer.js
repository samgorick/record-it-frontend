export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {id: action.userData.id, username: action.userData.username}

    case "LOGOUT_USER":
      return {}
      
    default:
      return state;
  }
}
