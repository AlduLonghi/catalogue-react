import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArtworkDetails = ({ artworks }) => {
  const { id } = useParams();
  const artwork = artworks.filter(artw => artw.id === id * 1);
  return (
    <div className="artwork-details">
      {artwork[0].title}
      <p>{id}</p>
    </div>
  );
};

ArtworkDetails.propTypes = {
  artworks: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  artworks: state.artworks.artworks,
});

export default connect(mapStateToProps, null)(ArtworkDetails);
