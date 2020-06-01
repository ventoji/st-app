import locationReducer from '../../reducers/locations';
import { places } from '../fixture/data';

test('should keep state on any unknow action ', () => {
  const place = 'Barcelona';
  const action = {
    type: 'ANY_OTHER_ACTION',
    place,
  };
  const state = locationReducer(undefined, action);
  expect(state).toEqual(state);
});

test('should set a place to the current state ', () => {
  const place = 'Barcelona';
  const action = {
    type: 'SET_LOCATION_TO_SEARCH',
    place,
  };
  const state = locationReducer(undefined, action);
  expect(state.place).toEqual(place);
});

test('should set a new place to the current history state ', () => {
  const place = 'Barcelona';
  const action = {
    type: 'SET_LOCATION_HISTORY',
    place,
    places,
  };
  const state = locationReducer(undefined, action);
  expect(state.places).toEqual([places]);
});
