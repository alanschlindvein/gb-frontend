import { handleActions } from 'redux-actions';
import { types } from './appActions';

/* handler */
const initialState = {
  settings: {}
};

export default handleActions(
  {
    [types.INIT_APP]: (state, { payload }) => ({
      settings: payload
    })
  },
  initialState
);
