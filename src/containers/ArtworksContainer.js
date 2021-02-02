import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchArtworks from '../redux/actions/artworks';

const ArtworksContainer = ({ fetchArtworks }) => {
  useEffect(() => {
    fetchArtworks();
  }, []);

  return (
    <div>
      hello
    </div>
  );
};

ArtworksContainer.propTypes = {
  fetchArtworks: PropTypes.func,
};

ArtworksContainer.defaultProps = {
  fetchArtworks: null,
};

export default connect(null, { fetchArtworks })(ArtworksContainer);
