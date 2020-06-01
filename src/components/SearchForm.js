import React, { useState } from 'react';
import LocationSearchInput from '../components/LocationSearchInput';
//import TestingComponent from '../components/TestingComponent';

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
