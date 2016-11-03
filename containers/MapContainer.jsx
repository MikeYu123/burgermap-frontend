import React, { PropTypes, Component } from 'react';
import GoogleMap from 'google-map-react';
import MapMarker from '../components/MapMarker'
import MapCard from '../components/MapCard'
import MenuDrawer from './MenuDrawer'

const HEADER_HEIGHT=64;
class MapContainer extends Component{
    defaultState = {
        zoom: 15,
        center: {lat: 59.724465, lng: 30.080121}
    };

    constructor(props) {
        super(props);
        this.state = this.defaultState;
    }

    //TODO: zoom in on marker click
    //TODO: whereami button
    componentWillMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    zoom: this.props.zoom
                })
            })
        }
        else {
            this.setState(this.defaultState);
        }
    }


    render() {
        return(
            <div style={{position: 'absolute', top: HEADER_HEIGHT, right: 0, bottom: 0, left: 0}}>
                <GoogleMap
                    bootstrapURLKeys={{
                        key: "AIzaSyCxV4cpVZ9j9N2bW0NlYDA61Raz-ZbUJdk",
                        language: 'ru'
                    }}
                    center={this.state.center}
                    zoom={this.state.zoom}
                >
                    {
                        this.props.cards.map((card) => <MapCard key={"card" + card.id}
                                                                        lat={card.lat}
                                                                        lng={card.lng}
                                                                        title={card.title}
                                                                        img={card.img}
                                                                        link={card.link}
                                                                        mark={card.mark}
                                                                        description={card.description}
                                                                        shortDescription={card.shortDescription}
                                                        />)
                    }
                    {
                        this.props.markers.map((marker) => <MapMarker id={marker.id} key={"marker" + marker.id} size={90} zoom={9} lat={marker.lat} lng={marker.lng} openCard={this.props.actions.openCard}/>)
                    }
                </GoogleMap>
            </div>
        )
    }
}
MapContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
    center: PropTypes.object,
    markers: PropTypes.array,
    cards: PropTypes.array
};
MapContainer.defaultProps = {
    zoom: 12,
    center:  {lat: 59.724465, lng: 30.080121},
    markers: [],
    cards: []
};
export default MapContainer
