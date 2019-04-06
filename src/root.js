import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import asyncResponse from 'middlewares/async-response/async-response';
import stateValidator from 'middlewares/state-validator/state-validator';

import reducers from 'store/reducers';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(asyncResponse, stateValidator));
  return (
    <Provider store={ store }>
      { children }
    </Provider>
  );
};

export default Root;
