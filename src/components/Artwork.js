import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artwork = ({ artwork }) => {
  const description = artwork.creators.length ? artwork.creators[0].description : 'Unknown';
  return (
    <Link to={`/details/${artwork.id}`}>
      <div className="img-banner-cont">
        <img className="artwork-img" src={artwork.images.web.url} alt="artwork" />
        <div className="img-banner">
          <p>{artwork.title}</p>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

Artwork.propTypes = {
  artwork: PropTypes.instanceOf(Object).isRequired,
};

export default Artwork;
