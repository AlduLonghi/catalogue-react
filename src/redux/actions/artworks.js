import axios from 'axios';
import { FETCH_ARTWORKS, IS_LOADING } from './types';

const isLoading = value => ({
  type: IS_LOADING,
  payload: value,
});

const fetchArtworks = offset => dispatch => {
  dispatch(isLoading(true));
  axios.get(`https://openaccess-api.clevelandart.org/api/artworks/?skip=${offset}&limit=300&has_image=1`)
    .then(res => {
      dispatch(isLoading(false));
      dispatch({
        type: FETCH_ARTWORKS,
        artworks: res.data.data,
      });
    }).catch(error => console.log(error));
};

export default fetchArtworks;
