import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { apiService } from './services/apiService';
import { rootReducer } from './store/reducers';

export const configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(
    thunkMiddleware.withExtraArgument(apiService)
  )
);
