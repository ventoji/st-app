import {
  setLocationToSearch,
  setLocationsHistory,
} from '../../actions/locations';
import { places } from '../fixture/data';

test('should generate a text object when user type a location ', () => {
  const place = 'madrid';
  const action = setLocationToSearch(place);
  expect(action).toEqual({
    type: 'SET_LOCATION_TO_SEARCH',
    place,
  });
});

test('should generate a text object with default value ', () => {
  const action = setLocationToSearch();
  expect(action).toEqual({
    type: 'SET_LOCATION_TO_SEARCH',
    place: '',
  });
});

test('should register a new place the user have looked for ', () => {
  const place = 'Madrid';

  const action = setLocationsHistory(place, places);

  expect(action).toEqual({
    type: 'SET_LOCATION_HISTORY',
    place: place,
    places: places,
  });
});
