import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchArtworks from '../redux/actions/artworks';
import Artwork from '../components/Artwork';

const ArtworksContainer = ({ artworks, filter }) => {
  let toRenderComponent;
  if (artworks.length) {
    const displayedArtworks = filter === 'All'
      ? [...artworks]
      : [...artworks].filter(artw => artw.type === filter);

    toRenderComponent = (
      <div className="row artworks-col-cont">
        <div className="col-md-4 col-12">
          {[...displayedArtworks].splice(0, 100)
            .map(artw => <Artwork key={artw.id} artwork={artw} />)}
        </div>
        <div className="col-md-4 col-12">
          {[...displayedArtworks].splice(100, 100)
            .map(artw => <Artwork key={artw.id} artwork={artw} />)}
        </div>
        <div className="col-md-4 col-12">
          {[...displayedArtworks].splice(200, 99)
            .map(artw => <Artwork key={artw.id} artwork={artw} />)}
        </div>
      </div>
    );
  } else {
    toRenderComponent = (<div>loading...</div>);
  }

  return (
    <>
      { toRenderComponent }
    </>
  );
};

ArtworksContainer.propTypes = {
  artworks: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  artworks: state.artworks.artworks,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchArtworks: () => dispatch(fetchArtworks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksContainer);
