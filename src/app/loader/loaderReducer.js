import { START_LOADING, END_LOADING } from '../../constants/Types'

export default function loaderReducer(state = null, action) {
  switch (action.type) {
    case START_LOADING:
      return true

    case END_LOADING:
      return null
      
    default:
      return state;
  }
}