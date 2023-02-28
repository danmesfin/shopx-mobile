import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter';
import authSlice from '../reducers/authSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
  },
});

export default store;
