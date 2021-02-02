import PropTypes from 'prop-types';

const Artwork = ({ artwork }) => (
  <div className="img-banner-cont">
    <img src={artwork.images.web.url} alt="jaja" />
    <div className="img-banner">
      <p>{artwork.title}</p>
      <p>{artwork.creators[0].description}</p>
    </div>
  </div>
);

Artwork.propTypes = {
  artwork: PropTypes.instanceOf(Object).isRequired,
};

export default Artwork;
