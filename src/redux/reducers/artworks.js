import { FETCH_ARTWORKS, IS_LOADING } from '../actions/types';

const initialState = {
  artworks: [],
  isLoading: false,
};

const artworksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTWORKS:
      return {
        ...state,
        artworks: action.artworks,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

export default artworksReducer;
