/**  Data for testing components */
const place = 'Madrid';
const latLng = {
  lat: 40.2056646,
  lng: -5.51,
};

export const places = {
  place: place,
  ...latLng,
};

export const propsGoogleMap = {
  height: '100vh',
  width: '98vw',
  center: {
    lat: 40.2056646,
    lng: -5.51,
  },
  zoom: 5,
};
