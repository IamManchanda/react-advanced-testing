import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import asyncResponse from 'middlewares/async-response.js';

import reducers from 'store/reducers';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(asyncResponse));
  return (
    <Provider store={ store }>
      { children }
    </Provider>
  );
};

export default Root;
