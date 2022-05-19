import thunk from 'redux-thunk';
import {combineReducers, applyMiddleware} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import * as reducers from './reducers';

export default createStore(
  combineReducers({
    ...reducers,
  }),
  applyMiddleware(thunk),
);
