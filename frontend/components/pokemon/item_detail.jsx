import React from 'react';

const ItemDetail = ({item}) => {
  if (item) {
  return (  <li>
    <h3>{item.name}</h3>
    <p>{item.price}</p>
    <p>{item.happiness}</p>
    </li>);
  } else {
  return(<li></li>);
  }
};

export default ItemDetail;
