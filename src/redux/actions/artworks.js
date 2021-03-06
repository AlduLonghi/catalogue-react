import axios from 'axios';
import { FETCH_ARTWORKS, IS_LOADING } from './types';

const isLoading = () => ({
  type: IS_LOADING,
});

const fetchArtworks = offset => dispatch => {
  dispatch(isLoading());
  axios.get(`https://openaccess-api.clevelandart.org/api/artworks/?skip=${offset}&limit=120&has_image=1`,
    { headers: { 'Access-Control-Allow-Origin': '*' } })
    .then(res => {
      dispatch(isLoading());
      dispatch({
        type: FETCH_ARTWORKS,
        artworks: res.data.data,
      });
    }).catch(error => error);
};

export default fetchArtworks;
