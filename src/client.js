import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './configureStore';
import App from './components/App';

// Read the state sent with markup
const state = window.__STATE__;

// Delete the state from global window object
delete window.__STATE__;

// Reproduce the store used to render the page on server
const store = configureStore(state);

/**
 * Hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */
hydrate(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector('#app')
)
