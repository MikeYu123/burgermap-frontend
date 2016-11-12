import * as backend from '../constants/backend'
import * as actionTypes from '../constants/ActionTypes'
import {showCard} from '../actions/markers'

export default store => next => action => {
    if(action.type === actionTypes.OPEN_CARD) {
        let url = backend.BACKEND_URL + backend.BACKEND_ACTIONS.showCard(action.id);
        return fetch(url).then(response => response.json()).then(result => {
            store.dispatch(showCard(result));
        }).catch((err) => {
            console.error(err);
            return next(action);
        });
    }
    else {
        return next(action);
    }
}