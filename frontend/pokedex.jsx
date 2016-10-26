import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import {requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root_component';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl);

  //  TODO: testing
   window.store = store;
});

//  TODO: testing
window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
