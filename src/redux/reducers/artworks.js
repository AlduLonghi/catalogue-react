import { FETCH_ARTWORKS } from '../actions/types';

const initialState = {
  artworks: [],
};

const artworksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTWORKS:
      return {
        ...state,
        artworks: action.artworks,
      };
    default:
      return state;
  }
};

export default artworksReducer;
