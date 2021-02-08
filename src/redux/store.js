import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
