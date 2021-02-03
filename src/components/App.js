import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './Routes';
import fetchArtworks from '../redux/actions/artworks';

function App({ fetchArtworks }) {
  useEffect(() => {
    fetchArtworks();
  }, []);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

App.propTypes = {
  fetchArtworks: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchArtworks: () => dispatch(fetchArtworks()),
});
export default connect(null, mapDispatchToProps)(App);
