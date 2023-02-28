import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as authService from '../../Services/authService';

export const signInUser = createAsyncThunk(
  'auth/signIn',
  async ({username, password}, {rejectWithValue}) => {
    try {
      const response = await authService.signIn(username, password);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: state => {
      state.isLoading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearAuthState: state => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signInUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Sign in failed';
      });
  },
});

export const {setUser, setLoading, setError, clearAuthState} =
  authSlice.actions;

export default authSlice.reducer;
