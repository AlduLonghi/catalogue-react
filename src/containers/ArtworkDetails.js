import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArtworkDetails = ({ artworks }) => {
  const { id } = useParams();
  const artwork = artworks.filter(artw => artw.id === id * 1);
  const description = artwork[0].creators.length ? artwork[0].creators[0].description : 'Unknown';

  return (
    <main className="d-flex justify-content-center main-height">
      <div className="artwork-details row mx-auto">
        <div className="artwork-det-img d-flex justify-content-center col-xl-5 col-12 px-0">
          <img src={artwork[0].images.web.url} alt="artwork" />
          <div className="img-info">
            <p>{artwork[0].title}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="artwork-description col-xl-7 col-12 d-flex justify-content-center">
          <p>
            <span>Measurements: </span>
            {artwork[0].measurements}
          </p>
          <p>
            <span>Technique: </span>
            {artwork[0].technique}
          </p>
          <p>
            <span>Type:  </span>
            {artwork[0].type}
          </p>
          <p>{artwork[0].wall_description}</p>
        </div>
      </div>
    </main>
  );
};

ArtworkDetails.propTypes = {
  artworks: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  artworks: state.artworks.artworks,
});

export default connect(mapStateToProps, null)(ArtworkDetails);
