import { OPEN_CARD, SHOW_CARD, DROP_CARD} from '../constants/ActionTypes';

const initialState = {

};

export default function cards(state = initialState, action) {
  switch (action.type) {
  case DROP_CARD:
    return {};

    case SHOW_CARD:
      return action.card;

  default:
    return state;
  }
}
