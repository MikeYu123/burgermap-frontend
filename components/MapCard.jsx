import React, { PropTypes, Component } from 'react';
import {amber300, brown300, blue500} from 'material-ui/styles/colors';
import MapsPlace from 'material-ui/svg-icons/maps/place'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'

import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, FlatButton} from 'material-ui'
const cardStyle = {
    width: 360,
    height: 360,
    marginLeft: 45,
    marginTop: -325
};

const mediaStyle = {
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 0,
    marginRight: 10,
    width: 150,
    float: 'left'
};

const buttonStyle = {
    width: 332,
    marginLeft: -10
};

const LINK_LABEL='Перейти'

class MapMarker extends Component {
    renderAvatar() {
        return(
            <Avatar>{this.props.mark}</Avatar>
        )
    }

    renderHeader(){
        return(
            <CardHeader avatar={this.renderAvatar()} title={this.props.title} subtitle={this.props.shortDescription} />
        )
    }

    renderMedia(){
        return(
            <CardMedia style={mediaStyle}>
                <img src={this.props.img} />
            </CardMedia>
        )
    }

    renderActions() {
        return(
            <CardActions>
                <FlatButton label={LINK_LABEL} href={this.props.link} style={buttonStyle}/>
            </CardActions>
        )
    }
    renderText() {
        return(
            <CardText>
                {this.props.description}
                {this.renderActions()}
            </CardText>
        )
    }

    render() {
        return(
            <Card style={cardStyle}>
                {this.renderHeader()}
                {this.renderMedia()}
                {this.renderText()}
            </Card>
        )
    }
}

MapMarker.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    title: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string,
    mark: PropTypes.number,
    shortDescription: PropTypes.string,
    description: PropTypes.string
};
MapMarker.defaultProps = {
    lat: 55.7,
    lng: 37.5,
    title: '',
    img: '',
    link: '',
    mark: 0,
    shortDescription: '',
    description: ''
};
export default MapMarker;
