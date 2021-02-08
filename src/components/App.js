import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './Routes';
import fetchArtworks from '../redux/actions/artworks';

function App({ fetchArtworks }) {
  useEffect(() => {
    fetchArtworks(0);
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

const mapDispatchToProps = {
  fetchArtworks,
};
export default connect(null, mapDispatchToProps)(App);
