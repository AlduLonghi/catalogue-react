import FETCH_ARTWORKS from './types';
import axios from 'axios';

const fetchArtworks = () => {
  return(dispatch) => {
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?limit=5&has_image=1')
      .then(res => dispatch({
          type: FETCH_ARTWORKS,
          artworks: res
      }))
  }
}