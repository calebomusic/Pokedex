import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createNewPokemon } from '../../actions/pokemon_actions';

const mapDispatchtoProps = (dispatch) => ({
  createNewPokemon: (poke) => dispatch(createNewPokemon(poke))
});

const mapStatetoProps = (state) => ({
  errors: state.errors
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(PokemonForm);
