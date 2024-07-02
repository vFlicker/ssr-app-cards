import { REQUEST_APPS, RECEIVE_APPS } from './actions';

const initialState = {
  isFetching: false,
  apps: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_APPS:
      return { ...state, isFetching: true };
    case RECEIVE_APPS:
      return { ...state, isFetching: false, apps: action.payload };
    default:
      return state
  }
};
