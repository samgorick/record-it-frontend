export default function userReducer(state = "", action) {
  switch (action.type) {
    case "LOGIN_USER":
      console.log(state);
      return (state = action.username);
    default:
      return state;
  }
}
