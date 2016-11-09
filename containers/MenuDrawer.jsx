import React, { PropTypes, Component } from 'react';
import GoogleMap from 'google-map-react';
import MapMarker from '../components/MapMarker'
import MapCard from '../components/MapCard'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class MenuDrawer extends Component{
    defaultState = {
    };

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.props.closeDrawer();

    //TODO: Refactor
    handleChange(open) {
        if (open) {
            this.props.closeDrawer();
        }
    }

    constructor(props) {
        super(props);
        this.state = this.defaultState;
        this.state = {open: false};
    }

    componentWillMount() {
    }

    //TODO: enable swipe
    render() {
        return(
            <div>
                <Drawer
                    docked={false}
                    width={300}
                    open={this.props.open}
                    onRequestChange={(open) => this.handleChange({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
}
MenuDrawer.propTypes = {
    closeDrawer: PropTypes.func,
    open: PropTypes.bool.isRequired
};
MenuDrawer.defaultProps = {
    open: false
};
export default MenuDrawer
