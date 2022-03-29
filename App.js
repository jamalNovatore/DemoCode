//import liraries
import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './App/Navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './App/Redux/Store/Store';


const App = () => {
  return (
    <Provider store={store}>
   <Navigation />
   </Provider>
  );
};

export default App;
