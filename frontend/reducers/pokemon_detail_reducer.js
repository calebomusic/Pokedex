import { RECEIVE_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';


const PokemonDetailReducer = (state = {}, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.poke;
    case RECEIVE_NEW_POKEMON:
      return action.poke;
    default:
      return state;
  }

};

export default PokemonDetailReducer;
