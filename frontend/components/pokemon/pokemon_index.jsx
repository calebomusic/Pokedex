import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = (props) => (
  <section className="pokedex">
    {props.children}
    <ul>
      {props.pokemon.map((poke) => (
        <PokemonIndexItem key={poke.id} poke={poke} />
        ))}
    </ul>
  </section>
);

export default PokemonIndex;
