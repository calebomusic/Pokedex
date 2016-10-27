import { RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const PokemonReducer = (state = {}, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_NEW_POKEMON:
      newState[action.poke.id] = action.poke;
      return newState;
    default:
      return state;
  }
};

export default PokemonReducer;
