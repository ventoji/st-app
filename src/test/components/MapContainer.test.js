import React from 'react';
import { shallow } from 'enzyme';
import MapContainer from '../../components/MapContainer';
import { propsGoogleMap } from '../fixture/data';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<MapContainer {...propsGoogleMap} />);
});

test('should render MapContainer correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
