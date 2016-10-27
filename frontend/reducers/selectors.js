import {values} from 'lodash';

export const selectAllPokemon = ({pokemon}) => (
  values(pokemon)
);

export const selectPokemonItem = (state, id) => {
  const items = state.poke.items;
  for (var i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      return items[i];
    }
  }
};
