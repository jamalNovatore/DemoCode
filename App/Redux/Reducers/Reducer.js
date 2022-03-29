import {GET_HEROES} from '../Actions/Action';

const initialState = {
  heros: [],
};

function herosReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HEROES:
      return {...state, heros: action.payload};
    default:
      return state;
  }
}

export default herosReducer;