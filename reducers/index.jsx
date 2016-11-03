import { combineReducers } from 'redux';
import markers from './markers';
import cards from './cards';
import drawer from './drawer'

const rootReducer = combineReducers({
    markers,
    cards,
    drawer
});

export default rootReducer;
