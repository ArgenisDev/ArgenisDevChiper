import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/routes/MainNavigation';
import store from './src/redux/state';

const App = () => (
  <Provider store={store}>
    <MainNavigation />
  </Provider>
);

export default App;
