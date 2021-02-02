import axios from 'axios';
import FETCH_ARTWORKS from './types';

const fetchArtworks = () => dispatch => {
  axios.get('https://openaccess-api.clevelandart.org/api/artworks/?limit=5&has_image=1')
    .then(res => dispatch({
      type: FETCH_ARTWORKS,
      artworks: res,
    }));
};

export default fetchArtworks;
