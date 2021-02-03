import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import fetchArtworks from '../redux/actions/artworks';
import Artwork from '../components/Artwork';
import LoadingWheel from '../components/LoadingWheel';

const ArtworksContainer = ({
  artworks, filter, fetchArtworks, isLoading,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchArtworks(offset);
  }, [offset]);

  let toRenderComponent;
  if (!isLoading) {
    const displayedArtworks = filter === 'All'
      ? [...artworks]
      : [...artworks].filter(artw => artw.type === filter);

    toRenderComponent = (
      <div className="row artworks-col-cont">
        <div className="col-md-4 col-12">
          {displayedArtworks.splice(0, Math.ceil(displayedArtworks.length / 3))
            .map(artw => <Artwork key={artw.id} artwork={artw} />)}
        </div>
        <div className="col-md-4 col-12">
          {displayedArtworks.splice(0, Math.ceil(displayedArtworks.length / 2))
            .map(artw => <Artwork key={artw.id} artwork={artw} />)}
        </div>
        <div className="col-md-4 col-12">
          {displayedArtworks.map(artw => <Artwork key={artw.id} artwork={artw} />)}
        </div>
        <button
          type="button"
          onClick={() => setOffset(prev => prev + 120)}
          className="btn btn-warning btn-lg my-4 mx-auto"
        >
          Load more
        </button>
      </div>
    );
  } else {
    toRenderComponent = (
      <div className="d-flex justify-content-center align-items-center load-wheel-cont">
        <LoadingWheel />
      </div>
    );
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
  fetchArtworks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  artworks: state.artworks.artworks,
  filter: state.filter,
  isLoading: state.artworks.isLoading,
});

const mapDispatchToProps = {
  fetchArtworks,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksContainer);
