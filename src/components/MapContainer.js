/**
 * Map: show the map view with a defauls values you can modify on utils/index.js
 * InfoWindow: show information on a Marker in the Map
 * GoogleApiWrapper: a HOC to set google maps API optiones
 *  Redux state is accesible in this components to handle input search form.
 */
import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import { setLocationToSearch, setLocationsHistory } from '../actions/locations';
import { bindActionCreators } from 'redux';

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlace: {},
      showingInfoWindow: false,
      activeMarker: {},
      mapStyles: {
        width: `${this.props.width}` || '100%',
        height: `${this.props.height}` || '100%',
      },
      stores: [], // markers asscoiated to every new search
      hideNav: false,
      zoom: this.props.zoom,
      center: this.props.center,
    };
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }
  // Detect changes on the input search and update it properly
  componentDidUpdate(prevProps) {
    /*    if (prevProps.google !== this.props.google) {
      console.log('component has changed');
    } */

    if (prevProps.places !== this.props.places) {
      // If user search for a place, a marker is added to the Map
      this.setState(
        {
          stores: [
            ...this.state.stores,
            { ...this.props.places[this.props.places.length - 1] },
          ],
          center: {
            lat: this.props.places[this.props.places.length - 1].lat,
            lng: this.props.places[this.props.places.length - 1].lng,
          },
        },
        () => {
          // update marker after a new search is made
          this.displayMarkers();
          //console.log(this.state.stores, this.state.center);
        },
      );
    } // end check prev props

    if (this.state.hideNav) {
      this.setState({ zoom: 15 });
    } else {
      this.setState({ zoom: 5 });
    }
  }

  // Resize the Maps on Mobile Device.
  resize() {
    let currentHideNav = window.innerWidth <= 760;
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }

  // When infoView is closed change properties for the marker
  onInfoWindowClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  // Show the name of the place the user has serached for

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  displayMarkers = () =>
    this.state.stores.map((store, index) => (
      //  Show all markers, when an user makes a new search this is stored on
      // redux store
      <Marker
        key={index}
        id={index}
        onClick={this.onMarkerClick}
        position={{
          lat: store.lat,
          lng: store.lng,
        }}
        name={store.place}
      ></Marker>
    ));

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={this.state.zoom}
        initialCenter={this.state.center}
        scrollwheel={false}
        draggable={false}
        keyboardShortcuts={false}
        disableDoubleClickZoom={true}
        zoomControl={false}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        panControl={false}
        rotateControl={false}
        fullscreenControl={false}
      >
        {this.displayMarkers()}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export const mapStateToProps = (state) => ({
  places: state.places,
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ setLocationToSearch, setLocationsHistory }, dispatch);

export const GoogleApi = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapContainer);

// Fetch to Google Maps API
export default GoogleApiWrapper({
  apiKey: process.env.APP_KEY_GOOGLE_MAPS,
  libraries: ['places'],
})(GoogleApi);
