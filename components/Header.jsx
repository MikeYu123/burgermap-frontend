import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import MapContainer from '../containers/MapContainer'
import AppBar from 'material-ui/AppBar';
import ContentAdd from 'material-ui/svg-icons/content/add'
import IconButton from 'material-ui/IconButton'

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
  handleClick(){
    this.props.openDrawer();
  }
  //TODO: doesnt work
  renderRightButton() {
    return(
      <IconButton><ContentAdd /></IconButton>
    )
  }

  render() {
    return (
      <header className="header">
          <AppBar title="Burgermap" onLeftIconButtonTouchTap={this.handleClick.bind(this)}
            iconElementRight={this.renderRightButton()}/>
      </header>
    );
  }
}

Header.propTypes = {
  addMarker: PropTypes.func.isRequired,
  openDrawer: PropTypes.func.isRequired
};

export default Header;
