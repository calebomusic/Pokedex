import React from 'react';

const ItemDetail = ({item}) => (
  <li>
    <h3>{item.name}</h3>
    <p>{item.price}</p>
    <p>{item.happiness}</p>
    <img src={item.image_url} height="150" width="150" />
    </li>
);

export default ItemDetail;
