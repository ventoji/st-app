import React from 'react';
import Header from '../../components/Header';
import { toMatchSnapshotFunction } from '../fixture/helper';

test('should render Header coorectly', () => {
  toMatchSnapshotFunction(<Header />);
});
