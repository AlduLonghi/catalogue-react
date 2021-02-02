import { combineReducers } from 'redux';
import artworksReducer from './artworks';

export default combineReducers({
  artworks: artworksReducer,
});
