export const REQUEST_APPS = 'REQUEST_APPS';
export const RECEIVE_APPS = 'RECEIVE_APPS';

const appsRequested = () => ({
  type: REQUEST_APPS
});

const appsLoaded = (apps) => ({
  type: RECEIVE_APPS,
  payload: apps,
});

const fetchApps = (apiService) => async (dispatch) => {
  dispatch(appsRequested());

  const apps = await apiService.fetchApps();
  dispatch(appsLoaded(apps));
};

const shouldFetchApps = (state) => {
  if (state.apps.length == 0 && !state.isFetching) return true;
  else if (state.isFetching) return false;
};

export const fetchAppsIfNeeded = () => (dispatch, getState, apiService) => {
  if (shouldFetchApps(getState())) {
    return dispatch(fetchApps(apiService))
  }
};
