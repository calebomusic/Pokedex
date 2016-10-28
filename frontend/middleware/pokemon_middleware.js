import {fetchAllPokemon, fetchPokemon, createPokemon } from '../util/api_util';
import {REQUEST_ALL_POKEMON, REQUEST_POKEMON, CREATE_NEW_POKEMON } from '../actions/pokemon_actions';
import {receiveAllPokemon, receivePokemon, receiveNewPokemon, receivePokemonErrors } from '../actions/pokemon_actions';
import { hashHistory } from 'react-router';


const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receivePokemonSuccess = data => dispatch(receivePokemon(data));
  const createNewPokemonSuccess = data => {
    dispatch(receiveNewPokemon(data));
    hashHistory.push(`/pokemon/${data.id}`);
  };

  const createNewPokemonFailure = errors => dispatch(receivePokemonErrors(errors));



  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_POKEMON:
      fetchPokemon(action.poke, receivePokemonSuccess);
      return next(action);
    case CREATE_NEW_POKEMON:
      createPokemon(action.poke, createNewPokemonSuccess, createNewPokemonFailure);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
