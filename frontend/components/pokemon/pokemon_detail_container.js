import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => (
  { poke: state.poke }
);


export default connect(
  mapStateToProps, null
)(PokemonDetail);
