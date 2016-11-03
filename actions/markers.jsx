import * as types from '../constants/ActionTypes';

export function addMarker(text) {
  return { type: types.ADD_MARKER, lat, lng, text };
}

export function deleteMarker(id) {
  return { type: types.DELETE_MARKER, id};
}

export function editMarker(id, text) {
  return { type: types.EDIT_MARKER, id, lat, lng, text };
}