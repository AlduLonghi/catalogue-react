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
        {[...artworks].splice(0, 4).map(artw => <Artwork key={artw.id} artwork={artw} />)}
      </div>
      <div className="col-md-4 col-12">
        {[...artworks].splice(4, 4).map(artw => <Artwork key={artw.id} artwork={artw} />)}
      </div>
      <div className="col-md-4 col-12">
        {[...artworks].splice(7, 4).map(artw => <Artwork key={artw.id} artwork={artw} />)}
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
