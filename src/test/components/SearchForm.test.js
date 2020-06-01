import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from '../../components/SearchForm';

let setLocationsHistory, setLocationToSearch, wrapper;
beforeEach(() => {
  setLocationsHistory = jest.fn();
  setLocationToSearch = jest.fn();
  wrapper = shallow(
    <SearchForm
      setLocationsHistory={setLocationsHistory}
      setLocationToSearch={setLocationToSearch}
    />,
  );
});

test('should render SearchForm correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test.skip('should handle onSelectChange ', () => {
  wrapper.find('LocationSearchInput').prop('onSelectChange')('Madrid');
  expect(setLocationsHistory).toHaveBeenCalled();
});

test('should handle onSearchChange ', () => {
  wrapper.find('LocationSearchInput').prop('onSearchChange')('Ma');
  expect(setLocationToSearch).toHaveBeenCalled();
  expect(setLocationToSearch).toHaveBeenCalledTimes(1);
});
