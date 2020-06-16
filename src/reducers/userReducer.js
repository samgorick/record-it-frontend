export default function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {id: action.userData.id, username: action.userData.username}
    default:
      return state;
  }
}
