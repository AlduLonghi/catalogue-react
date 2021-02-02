import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchArtworks from '../redux/actions/artworks';
import Artwork from '../components/Artwork';

const ArtworksContainer = ({ fetchArtworks, artworks }) => {
  useEffect(() => {
    fetchArtworks();
  }, []);

  return artworks.length ? (
    <div className="row artworks-col-cont">
      <div className="col-md-4 col-12">
        <Artwork artwork={artworks[0]} />
        <Artwork artwork={artworks[1]} />
        <Artwork artwork={artworks[2]} />
        <Artwork artwork={artworks[3]} />
      </div>
      <div className="col-md-4 col-12">
        <Artwork artwork={artworks[4]} />
        <Artwork artwork={artworks[5]} />
        <Artwork artwork={artworks[6]} />
        <Artwork artwork={artworks[7]} />
      </div>
      <div className="col-md-4 col-12">
        <Artwork artwork={artworks[8]} />
        <Artwork artwork={artworks[9]} />
        <Artwork artwork={artworks[10]} />
        <Artwork artwork={artworks[11]} />
      </div>
    </div>
  ) : (
    <div>
      loading
    </div>
  );
};

ArtworksContainer.propTypes = {
  fetchArtworks: PropTypes.func,
  artworks: PropTypes.instanceOf(Array),
};

ArtworksContainer.defaultProps = {
  fetchArtworks: null,
  artworks: [],
};

const mapStateToProps = state => ({
  artworks: state.artworks.artworks,
});

const mapDispatchToProps = dispatch => ({
  fetchArtworks: () => dispatch(fetchArtworks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksContainer);
