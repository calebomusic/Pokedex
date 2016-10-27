  json.name @pokemon.name
  json.attack @pokemon.attack
  json.defense @pokemon.defense
  json.poke_type @pokemon.poke_type
  json.moves @pokemon.moves.join(', ')
  json.image_url @pokemon.image_url
  json.id @pokemon.id
  json.extract! @pokemon, :items
