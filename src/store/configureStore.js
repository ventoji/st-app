import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import locationReducer from '../reducers/locations';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Store configuration to handle Redux State.
export default () => {
  const store = createStore(
    locationReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
