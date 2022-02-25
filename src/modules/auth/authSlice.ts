import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state, action: PayloadAction<boolean>) => {
      // From here we can take action only at this "auth" state
      // But, as we have taken care of this particular "logout" action
      // in rootReducer, we can use it to CLEAR the complete Redux Store's state
      state.isAuthenticated = action.payload;
    }
  }
});
export const selectAuth = (state: RootState) => state.auth.isAuthenticated;

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
