import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router'
import Routes from './routes/index'
import store, { history } from "./redux/store"
import { Provider } from "react-redux"
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
  , document.getElementById('root'));
serviceWorker.unregister();
