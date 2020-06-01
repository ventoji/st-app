import { connect } from 'react-redux';
import { setLocationToSearch, setLocationsHistory } from '../actions/locations';
import { bindActionCreators } from 'redux';
import SearchForm from '../components/SearchForm';

/* export const mapStateToProps = (state) => ({
  place: state.place,
  places: state.places,
}); */

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setLocationToSearch, setLocationsHistory }, dispatch);

const SearchLocation = connect(undefined, mapDispatchToProps)(SearchForm);

export default SearchLocation;
