import { combineReducers } from 'redux';
import markers from './markers';
import card from './card';
import drawer from './drawer'

const rootReducer = combineReducers({
    markers,
    card,
    drawer
});

export default rootReducer;
