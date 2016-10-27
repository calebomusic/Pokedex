import {values} from 'lodash';

export const selectAllPokemon = ({pokemon}) => (
  values(pokemon)
);

export const selectPokemonItem = (state, id) => {
  if (state.poke.items) {
    const items = state.poke.items;
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === parseInt(id)) {
        return items[i];
      }
    }
  }
};
