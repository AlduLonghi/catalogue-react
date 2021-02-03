import { combineReducers } from 'redux';
import artworksReducer from './artworks';
import filterReducer from './selectFilter';

export default combineReducers({
  artworks: artworksReducer,
  filter: filterReducer,
});
