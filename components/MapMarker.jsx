import React, { PropTypes, Component } from 'react';
import {amber300, brown300, blue500} from 'material-ui/styles/colors';
import MapsPlace from 'material-ui/svg-icons/maps/place'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'

class MapMarker extends Component {
    handleClick(){
        let id = this.props.id;
        this.props.openCard(id);
    }

    iconStyle() {
        return {
            width: this.props.size / 2,
            height: this.props.size / 2
        }
    }

    buttonStyle() {
        return {
            width: this.props.size,
            height: this.props.size
        }
    }
    render() {
        return(
            <IconButton size={this.props.size} style={this.buttonStyle()} onTouchTap={this.handleClick.bind(this)}> <MapsPlace style={this.iconStyle()}/> </IconButton>
        )
    }
}

//TODO: fix clicks
MapMarker.propTypes = {
    id: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.number,
    actions: PropTypes.object,
    openCard: PropTypes.func
};
//TODO: is color needed?
MapMarker.defaultProps = {
    lat: 55.7,
    lng: 37.5,
    color: amber300,
    size: 60
};
export default MapMarker;
