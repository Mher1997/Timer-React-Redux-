import {CHANGE_INTERVAL, CHANGE_BUTTON} from './action';

let defaultState = {
  interval : 1,
  button : false,
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_INTERVAL:
      return {
         ...state,
         interval : action.payload,
      }
    case CHANGE_BUTTON:
      return {
         ...state,
         button : action.payload,
      }
    default:
      return state;
  }
}

export default reducer;