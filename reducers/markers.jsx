import { ADD_MARKER, DELETE_MARKER, EDIT_MARKER, INIT_MARKERS, CREATE_MARKERS } from '../constants/ActionTypes';

const initialState = [

];

export default function markers(state = initialState, action) {
    switch (action.type) {
      case ADD_MARKER:
        return [{
          id: action.id,
          lat: action.lat,
          lng: action.lng
        }, ...state];

      case DELETE_MARKER:
        return state.filter(marker =>
          marker.id !== action.id
        );

      case EDIT_MARKER:
        return state.map(marker =>
          marker.id === action.id ?
            Object.assign({}, marker, { lat: action.lat, lng: action.lng}) :
            marker
        );

      case CREATE_MARKERS:
          return action.markers;

      default:
        return state;
  }
}
