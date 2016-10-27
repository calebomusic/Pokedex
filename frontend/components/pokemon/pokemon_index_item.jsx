import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = (props) => {
  const handleClick = url => e => props.router.push(url);

  return(<li
    className="pokemon-index-item"
    onClick={handleClick(`/pokemon/${props.poke.id}`)}
    >
    <h1>{props.poke.name}</h1>
    <img src={props.poke.image_url}  height="100" width="100" />
  </li>)
};

export default withRouter(PokemonIndexItem);
