import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingWheel from '../components/LoadingWheel';

const ArtworkDetails = ({ artworks, isLoading }) => {
  const history = useHistory();
  const { id } = useParams();

  let toRenderComponent;
  if (artworks.length && !isLoading) {
    const artwork = artworks.filter(artw => artw.id === id * 1)[0];
    const description = artwork.creators.length ? artwork.creators[0].description : 'Unknown';
    toRenderComponent = (
      <div className="artwork-details row mx-auto">
        <div className="artwork-det-img d-flex justify-content-center col-xl-5 col-12 px-0">
          <img className="artwork-img" src={artwork.images.web.url} alt="artwork" />
          <div className="img-info">
            <p>{artwork.title}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="artwork-description col-xl-7 col-12 d-flex justify-content-center">
          <p className="main-details">
            <span>Measurements: </span>
            {artwork.measurements}
          </p>
          <p className="main-details">
            <span>Technique: </span>
            {artwork.technique}
          </p>
          <p className="main-details">
            <span>Type:  </span>
            {artwork.type}
          </p>
          <p>{artwork.wall_description}</p>
          <button
            type="button"
            onClick={() => history.goBack()}
            className="back-to-btn pt-2"
          >
            Back to homepage
          </button>
        </div>
      </div>
    );
  } else {
    toRenderComponent = (<LoadingWheel />);
  }

  return (
    <main className="d-flex justify-content-center main-height align-items-center">
      {toRenderComponent}
    </main>
  );
};

ArtworkDetails.propTypes = {
  artworks: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  artworks: state.artworks.artworks,
  isLoading: state.artworks.isLoading,
});

export default connect(mapStateToProps, null)(ArtworkDetails);
