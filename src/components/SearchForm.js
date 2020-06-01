/**
 * LocationSearchInput is a component from the third party library
 * https://www.npmjs.com/package/react-places-autocomplete
 * This component manage onChange and onSelect events and send to the Redux
 * State
 * GoogleApiWrapper is necesary to make Google Map API.
 */
import React, { useState } from 'react';
import LocationSearchInput from '../components/LocationSearchInput';
//import TestingComponent from '../components/TestingComponent';
import { GoogleApiWrapper } from 'google-maps-react';

// Handle input search text by the user
export const SearchForm = ({ setLocationsHistory, setLocationToSearch }) => {
  const [querySearchText, setQuerySearchText] = useState('');

  const onSelectChange = (e) => {
    if (querySearchText) {
      setLocationsHistory(querySearchText, { place: e.address, ...e.latLng });
    }
  };

  const onSearchChange = (e) => {
    setLocationToSearch(e.address);
    setQuerySearchText(e.address);
  };

  return (
    <LocationSearchInput
      onSearchChange={onSearchChange}
      onSelectChange={onSelectChange}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.APP_KEY_GOOGLE_MAPS,
  libraries: ['places'],
})(SearchForm);
