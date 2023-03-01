import React from 'react';

import {Provider} from 'react-redux';
import store from './src/store/store';

import App from './src/app';

const Navigation = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Navigation;
