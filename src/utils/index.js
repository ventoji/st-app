// Parameters for Google maps.

//export const API = `${process.env.APP_GOOGLE_MAPS_API}${process.env.APP_KEY_GOOGLE_MAPS}${process.env.APP_GOOGLE_OPTIONS}`;
export const API = `https://maps.googleapis.com/maps/api/js?key=${process.env.APP_KEY_GOOGLE_MAPS}&libraries=places&sensor=false`
// Map for the google map
export const propsGoogleMap = {
  height: '100vh',
  width: '98vw',
  center: {
    lat: 41.38,
    lng: 2.15,
  },
  zoom: 5,
};
