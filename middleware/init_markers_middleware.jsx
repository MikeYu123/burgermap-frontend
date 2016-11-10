import * as backend from '../constants/backend'
import * as actionTypes from '../constants/ActionTypes'
import {addMarker, initMarkers} from '../actions/markers'

export default store => next => action => {
    if(action.type === actionTypes.INIT_MARKERS) {
        let url = backend.BACKEND_URL + backend.BACKEND_ACTIONS.getMarkers;
        return fetch(url).then(response => response.json()).then(result => {
            result.forEach( i => {
                store.dispatch(addMarker(i.id, i.lat, i.lng));
            });
        }).catch((err) => {
            console.error(err);
            return next(action);
        });
    }
    else {
        return next(action);
    }
}