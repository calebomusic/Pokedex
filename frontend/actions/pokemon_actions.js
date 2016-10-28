export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const REQUEST_POKEMON = "REQUEST_POKEMON";
export const CREATE_NEW_POKEMON = "CREATE_NEW_POKEMON";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";
export const RECEIVE_POKEMON_ERRORS = "RECEIVE_POKEMON_ERRORS"


export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

export const receivePokemon = poke => ({
  type: RECEIVE_POKEMON,
  poke
});

export const requestPokemon = (poke) => ({
  type: REQUEST_POKEMON,
  poke
});

export const createNewPokemon = (poke) => ({
  type: CREATE_NEW_POKEMON,
  poke
});

export const receiveNewPokemon = (poke) => ({
  type: RECEIVE_NEW_POKEMON,
  poke
});

export const receivePokemonErrors = (errors) => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});
