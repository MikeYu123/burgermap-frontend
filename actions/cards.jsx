import * as types from '../constants/ActionTypes';

export function openCard(id) {
  return { type: types.OPEN_CARD, id};
}

export function showCard(card) {
  return { type: types.SHOW_CARD, card};
}

export function dropCard() {
  return { type: types.DROP_CARD};
}