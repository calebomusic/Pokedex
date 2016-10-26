import React from 'react';

const PokemonIndex = ({pokemon}) => {
  const allPokemon = pokemon.map((poke, index) => (
    <li key={index}>
      <h1>{poke.name}</h1>
      <img src={poke.image_url}  height="100" width="100" />
    </li>
  ));

  return(<ul>{allPokemon}</ul>);
};

export default PokemonIndex;
