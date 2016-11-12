import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';

import { Router, Route, Link, browserHistory } from 'react-router'

import App from '../containers/App';
import configureStore from '../store/configureStore';

window.React = React;
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
          </Route>
      </Router>
  </Provider>,
  document.getElementById("root")
);
