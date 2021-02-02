import FETCH_ARTWORKS from '../actions/types';

const initialState = {
    artworks: []
};

const artworksReducer = (state=initialState, action) => {
  switch(action.type) {
      case FETCH_ARTWORKS:
          
  }
}

export default artworksReducer;