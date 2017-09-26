import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/layout/app';
import SimuladoIndex from './components/simulado_index';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App>
          <Switch>
            <Route path="/" component={SimuladoIndex} />
          </Switch>
        </App>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#simulado-container'));
