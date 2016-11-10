import { applyMiddleware } from 'redux';
import init_markers_middleware from './init_markers_middleware'
import show_card_middleware from './show_card_middleware'

const rootMiddleware = applyMiddleware(
    init_markers_middleware,
    show_card_middleware
);

export default rootMiddleware;
