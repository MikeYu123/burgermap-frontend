import { OPEN_DRAWER, CLOSE_DRAWER} from '../constants/ActionTypes';

const initialState = false;

export default function cards(state = initialState, action) {
  switch (action.type) {
  case OPEN_DRAWER:
    return true;

  case CLOSE_DRAWER:
    return false;

  default:
    return state;
  }
}
