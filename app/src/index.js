import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './redux';
import { Provider } from 'react-redux';


const store = createStore(
  allReducers,
  applyMiddleware(thunk),
);


ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);


