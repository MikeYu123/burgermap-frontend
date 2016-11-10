import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Map from './MapContainer'
import MainSection from '../components/MainSection';
import * as DrawerActions from '../actions/drawer';
import * as CardActions from '../actions/cards';
import * as MarkerActions from '../actions/markers';
import GoogleMap from 'google-map-react';
import MapContainer from '../containers/MapContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'
import MenuDrawer from './MenuDrawer'

class App extends Component {
  componentDidMount() {
    this.props.actions.initMarkers()
  }

  render() {
    const { markers, actions, card, drawer } = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header addMarker={actions.addMarker} openDrawer={actions.openDrawer}/>
            <MenuDrawer closeDrawer={actions.closeDrawer} open={drawer}/>
            <MapContainer markers={markers} card={card} actions={actions}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  markers: PropTypes.array.isRequired,
  card: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    markers: state.markers,
    card: state.card,
    drawer: state.drawer
  };
}

function mapDispatchToProps(dispatch) {
  let actions = Object.assign(MarkerActions, CardActions, DrawerActions);
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
