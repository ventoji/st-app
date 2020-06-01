import React from 'react';
import { shallow } from 'enzyme';
import LocationSearchInput from '../../components/LocationSearchInput';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<LocationSearchInput />);
});

test('should render LocationSearchInput correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
