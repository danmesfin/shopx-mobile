import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter';
import authSlice from '../reducers/authSlice';
import cartSlice from '../reducers/cartSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
    cart: cartSlice,
  },
});

export default store;
