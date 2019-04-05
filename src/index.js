import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from 'views/app';
import Root from 'root';

const renderedMarkup =
  <Root>
    <BrowserRouter>
      <Route component={ App } /> 
    </BrowserRouter>
  </Root>;

render(renderedMarkup, document.getElementById('root'));
