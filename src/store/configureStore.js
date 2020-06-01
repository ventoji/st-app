import { createStore } from 'redux';
import locationReducer from '../reducers/locations';

// Store configuration to handle Redux State.
export default () => {
  const store = createStore(locationReducer);

  return store;
};
