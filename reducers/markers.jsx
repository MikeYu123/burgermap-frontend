import { ADD_MARKER, DELETE_MARKER, EDIT_MARKER } from '../constants/ActionTypes';

const initialState = [{
  id: 1,
  lat: 55.781077,
  lng: 37.6000041
},
  {
    id: 3,
    lat: 55.7828555,
    lng: 37.5982967
  }];

export default function markers(state = initialState, action) {
  switch (action.type) {
  case ADD_MARKER:
    return [{
      id: state.reduce((maxId, marker) => Math.max(marker.id, maxId), -1) + 1,
      lat: action.lat,
      lng: action.lng,
      text: action.text
    }, ...state];

  case DELETE_MARKER:
    return state.filter(marker =>
      marker.id !== action.id
    );

  case EDIT_MARKER:
    return state.map(marker =>
      marker.id === action.id ?
        Object.assign({}, marker, { lat: action.lat, lng: action.lng, text: action.text }) :
        marker
    );

  default:
    return state;
  }
}
