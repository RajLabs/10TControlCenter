import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import authReducer from '../modules/auth/authSlice';
import { RootState } from './configureStore';

// Redux: Root Reducer
const appReducer = combineReducers({
  auth: authReducer
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'auth/logout') {
    /* eslint-disable no-param-reassign */
    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
