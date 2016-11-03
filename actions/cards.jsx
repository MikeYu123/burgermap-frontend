import * as types from '../constants/ActionTypes';

export function openCard(id) {
  return { type: types.OPEN_CARD, id};
}

export function dropCard() {
  return { type: types.DROP_CARD};
}