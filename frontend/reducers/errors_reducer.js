import { RECEIVE_POKEMON_ERRORS } from  '../actions/pokemon_actions';
import { merge } from 'lodash';


const ErrorsReducer = (state = [], action) => {
  const newState = merge([], state);
  switch (action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ErrorsReducer;
