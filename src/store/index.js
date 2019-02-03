import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import initialState from './initialState';

const configureStore = () => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default configureStore;
