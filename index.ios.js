// Index.ios.js - iOS Code here!!
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
//Component
const App=()=>(
  <Header />
);


//Render to device
AppRegistry.registerComponent('albums', ()=> App);
