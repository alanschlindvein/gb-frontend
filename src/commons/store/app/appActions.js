import { createAction } from 'redux-actions';

/* types */
const INIT_APP = '@app/INIT_APP';

export const types = {
  INIT_APP
};

/* actions */
const initAppRequest = createAction(INIT_APP);

const initApp = settings => dispatch => dispatch(initAppRequest(settings));

export const actions = {
  initApp
};
