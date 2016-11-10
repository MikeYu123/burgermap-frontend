import * as types from '../constants/ActionTypes';

export function addMarker(id, lat, lng) {
  return { type: types.ADD_MARKER, id, lat, lng };
}

export function deleteMarker(id) {
  return { type: types.DELETE_MARKER, id};
}

export function editMarker(id, lat, lng) {
  return { type: types.EDIT_MARKER, id, lat, lng };
}

export function initMarkers() {
  return {type: types.INIT_MARKERS};
}

export function createMarkers(markers) {
  return {type: types.CREATE_MARKERS, markers: markers}
}