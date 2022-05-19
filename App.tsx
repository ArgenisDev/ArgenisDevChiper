import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/routes/MainNavigation';
import store from './src/redux/state';
import Fontisto from 'react-native-vector-icons/Fontisto';

Fontisto.loadFont();
const App = () => (
  <Provider store={store}>
    <MainNavigation />
  </Provider>
);

export default App;
