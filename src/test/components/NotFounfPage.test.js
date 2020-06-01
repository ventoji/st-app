import React from 'react';
import NotFounfPage from '../../components/NotFounfPage';
import { toMatchSnapshotFunction } from '../fixture/helper';

test('should render Header coorectly', () => {
  toMatchSnapshotFunction(<NotFounfPage />);
});
