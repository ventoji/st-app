/** Actions defined for Redux Store
 *
 * SET_LOCATION_TO_SEARCH:
 * Action to set the place that user wants to look for
 *
 * SET_LOCATION_HISTORY:
 * Action for save a new place the user has looked for
 */

export const setLocationToSearch = (place = '') => ({
  type: 'SET_LOCATION_TO_SEARCH',
  place,
});

export const setLocationsHistory = (place, places = []) => ({
  type: 'SET_LOCATION_HISTORY',
  place,
  places,
});
