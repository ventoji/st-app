/**
 *  Render the main view for the App
 *  SearchLocation a connected component to display the Search form
 *  MapContainer: Display the Google Map.
 */
import React from 'react';
import Layout from '../components/Layout';
import SearchLocation from '../container/SearchLocation';
import { propsGoogleMap } from '../utils/index';
import MapContainer from '../components/MapContainer';

const Home = () => (
  <Layout className="main-container">
    <div className="search">
      <div className="search__form">
        {' '}
        <SearchLocation />
      </div>
    </div>
    <div className="map-container">
      <MapContainer {...propsGoogleMap} />
    </div>
  </Layout>
);

export default Home;
