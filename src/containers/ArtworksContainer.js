import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchArtworks from '../redux/actions/artworks';
import '../styles/App.css';

const ArtworksContainer = ({ fetchArtworks, artworks }) => {
  useEffect(() => {
    fetchArtworks();
  }, []);

  return artworks.length ? (
    <div className="row">
      <div className="col-xl-4 col-md-6 col-12">
        <img src={artworks[0].images.web.url} alt="jaja" />
        <img src={artworks[1].images.web.url} alt="jaja" />
        <img src={artworks[2].images.web.url} alt="jaja" />
        <img src={artworks[3].images.web.url} alt="jaja" />
        <img src={artworks[4].images.web.url} alt="jaja" />
      </div>
      <div className="col-xl-4 col-md-6 col-12">
        <img src={artworks[5].images.web.url} alt="jaja" />
        <img src={artworks[6].images.web.url} alt="jaja" />
        <img src={artworks[7].images.web.url} alt="jaja" />
        <img src={artworks[8].images.web.url} alt="jaja" />
      </div>
      <div className="col-xl-4 col-md-6 col-12">
        <img src={artworks[9].images.web.url} alt="jaja" />
        <img src={artworks[10].images.web.url} alt="jaja" />
        <img src={artworks[11].images.web.url} alt="jaja" />
        <img src={artworks[12].images.web.url} alt="jaja" />
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
