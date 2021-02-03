import axios from 'axios';
import FETCH_ARTWORKS from './types';

const fetchArtworks = () => dispatch => {
  axios.get('https://openaccess-api.clevelandart.org/api/artworks/?limit=300&has_image=1')
    .then(res => dispatch({
      type: FETCH_ARTWORKS,
      artworks: res.data.data,
    })).catch(error => console.log(error));
};

export default fetchArtworks;
