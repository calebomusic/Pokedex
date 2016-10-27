import React from 'react';

const PokemonDetail = (props) => {
  let items;

  if (props.poke.items) {
    items = props.poke.items.map( (item) => {
    const handleClick = url => e => props.router.push(url);
    return(<li key={item.id}
      onClick={handleClick(`pokemon/${props.poke.id}/item/${item.id}`)}>
      <img src={item.image_url} height="100" width="100"></img>
      </li>);
  });
}

  return(
    <div className="pokemon-detail">
    <h1>{props.poke.name}</h1>
    <img src={props.poke.image_url} height="400" width="400" />
    <p>Attack: {props.poke.attack}</p>
    <p>Defense: {props.poke.defense}</p>
    <p>Type: {props.poke.poke_type}</p>
    <p>Moves: {props.poke.moves} </p>
    <ul className='pokemon-detail-items'>
      {items}
    </ul>
    {props.children}
    </div>
  );
};

export default PokemonDetail;
