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
  componentDidUpdate(prevProps, prevState) {
    /*    if (prevProps.google !== this.props.google) {
      console.log('component has changed');
    } */

    if (prevProps.places !== this.props.places) {
      /*       console.log(
        'PLACES HAS CHAGED',
        this.props.places[this.props.places.length - 1],
      ); */

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

  resize() {
    let currentHideNav = window.innerWidth <= 760;
    //  console.log(currentHideNav, window.innerWidth);
    if (currentHideNav !== this.state.hideNav) {
      this.setState({ hideNav: currentHideNav });
    }
  }

  onInfoWindowClose = () => {
    //   console.log('click Info');
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
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

export default GoogleApiWrapper({
  apiKey: process.env.APP_KEY_GOOGLE_MAPS,
})(GoogleApi);
