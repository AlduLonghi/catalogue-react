import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artwork = ({ artwork }) => (
  <Link to={`/details/${artwork.id}`}>
    <div className="img-banner-cont">
      <img src={artwork.images.web.url} alt="jaja" />
      <div className="img-banner">
        <p>{artwork.title}</p>
        <p>{artwork.creators[0].description}</p>
      </div>
    </div>
  </Link>
);

Artwork.propTypes = {
  artwork: PropTypes.instanceOf(Object).isRequired,
};

export default Artwork;
