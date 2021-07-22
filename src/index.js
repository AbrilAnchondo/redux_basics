import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// pass reducers and return a redux store, will all the reducers and state, all the application data
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);