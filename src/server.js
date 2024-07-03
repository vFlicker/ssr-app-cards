import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import { configureStore } from './configureStore';
import App from './components/App';

export const ssr = (initialState) => {
  const store = configureStore(initialState);

  const htmlContent = renderToString(
    <Provider store={store} >
      <App />
    </Provider>
  );

  // Get a copy of store data to create the same store on client side
  const preloadedState = store.getState();

  return { content: htmlContent, preloadedState };
};
