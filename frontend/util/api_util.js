
export const fetchAllPokemon = (success, error) => {
  $.ajax({
    type: 'GET',
    url: '/api/pokemon',
    success,
    error
  });
};

export const fetchPokemon = (poke, success, error) => {
  $.ajax({
    type: 'GET',
    url: `/api/pokemon/${poke}`,
    data: poke,
    success,
    error
  });
};
