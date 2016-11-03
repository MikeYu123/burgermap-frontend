import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import MapContainer from '../containers/MapContainer'
import AppBar from 'material-ui/AppBar';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  handleClick(){
    this.props.openDrawer();
  }

  render() {
    return (
      <header className="header">
          <AppBar title="Burgermap" onLeftIconButtonTouchTap={this.handleClick.bind(this)} />
      </header>
    );
  }
}

Header.propTypes = {
  addMarker: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired
};

export default Header;
