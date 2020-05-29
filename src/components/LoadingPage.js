import React from 'react';
import Layout from '../components/Layout';

const LoadingPage = () => (
  <Layout className="loader">
    <img className="loader__image" src="/images/loader.gif" alt="loader" />
  </Layout>
);

export default LoadingPage;
