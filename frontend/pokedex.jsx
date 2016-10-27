import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, request } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import {requestAllPokemon, createNewPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root_component';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl);

  //  TODO: testing
  window.pikachu = () => store.dispatch(createNewPokemon({name: 'pikachu', attack: 1, defense: 0, poke_type: 'electric', moves: "'tackle', 'shock'", items: [], image_url: 'http://localhost:3000/assets/pokemon_snaps/027.png'}));
   window.store = store;
});

//  TODO: testing
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
