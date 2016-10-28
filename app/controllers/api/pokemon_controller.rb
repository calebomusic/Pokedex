class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def show
    @pokemon = Pokemon.find_by_id(params[:id])
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render @pokemon.errors
    end
  end

  def pokemon_params
    params.permit(:name, :attack, :defense, :poke_type, :image_url, :items, moves: [])
  end
end
