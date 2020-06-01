import React from 'react';
import Layout from '../../components/Layout';
import { toMatchSnapshotFunction } from '../fixture/helper';

test('should render Layout coorectly', () => {
  toMatchSnapshotFunction(<Layout />);
});
