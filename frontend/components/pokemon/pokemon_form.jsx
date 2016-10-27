import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      attack: '',
      defense: '',
      poke_type: '',
      moves: [],
      image_url: ''
    };
    this.updateForm = this.updateForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateForm(property){
    return e => {
      let value = e.target.value;

      if(property === "attack" || property === "defense") {
        value = parseInt(value);
      }

      this.setState({[property]: value});
    };
  }


  handleClick(e){
    e.preventDefault();
    debugger
    this.props.createNewPokemon(this.state);
  }

  render(){
    const types = [ '-',
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];

    const dropDownMenu = types.map(type => (
      <option key={type} value={type}>{type}</option>
    ));

    return (<form className='poke-form'>

      <label>Name</label>
      <input value={this.state.name} onChange={this.updateForm('name')}></input>
      <label>Attack</label>
      <input value={this.state.attack} onChange={this.updateForm('attack')}></input>
      <label>Defense</label>
      <input value={this.state.defense} onChange={this.updateForm('defense')}></input>

      <label>Type</label>
      <select value={this.state.poke_type} onChange={this.updateForm('poke_type')}>
        {dropDownMenu}
      </select>
      <label>Moves</label>
      <input value={this.state.moves} onChange={this.updateForm('moves')}></input>
      <label>Image</label>
      <input value={this.state.image_url} onChange={this.updateForm('image_url')}></input>
      <button onClick={this.handleClick} >Submit</button>
    </form>);
  }
}

export default PokemonForm;
