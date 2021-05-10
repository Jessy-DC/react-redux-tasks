import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux'

import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {applyMiddleware} from 'redux'

import tasksApp from './reducers'

const logger = createLogger();
const store = createStore(tasksApp, applyMiddleware(thunk,logger));


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
      , div
  );
  ReactDOM.unmountComponentAtNode(div);
});