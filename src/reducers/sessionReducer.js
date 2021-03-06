import { createReducer } from '@rootstrap/redux-tools';
import { loginSuccess, signUpSuccess, logoutSuccess, updateSession } from 'actions/userActions';

const initialState = {
  token: null,
  info: null,
};

const handleLoginSuccess = (state, { payload }) => {
  state.token = payload;
};

const handleLogoutSuccess = () => {
  return initialState;
};

const handleUpdateSession = (state, { payload }) => {
  state.info = payload;
};

export default createReducer(initialState, {
  [loginSuccess]: handleLoginSuccess,
  [logoutSuccess]: handleLogoutSuccess,
  [signUpSuccess]: handleLoginSuccess,
  [updateSession]: handleUpdateSession,
});
