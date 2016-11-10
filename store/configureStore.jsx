import { createStore, app } from 'redux';
import rootReducer from '../reducers';
import rootMiddleware from '../middleware';

export default function configureStore(initialState) {
  const store = createStore(
      rootReducer,
      initialState,
      rootMiddleware
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
