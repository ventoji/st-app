import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    404 - <Link to="/"> Go Home </Link>
  </Layout>
);

export default NotFoundPage;
