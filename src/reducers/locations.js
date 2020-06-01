// Reducer for handling locations searched by user
const searchLocationReducerDefaultState = {
  place: '',
  places: [],
};
//   location: {lat: 47.49855629475769,  lng: -122.14184416996333}

export default (state = searchLocationReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_LOCATION_TO_SEARCH':
      return {
        ...state,
        place: action.place,
      };
    case 'SET_LOCATION_HISTORY':
      return {
        ...state,
        places: [...state.places, action.places],
      };
    default:
      return state;
  }
};
