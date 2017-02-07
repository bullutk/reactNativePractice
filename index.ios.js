// Index.ios.js - iOS Code here!!
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Component
const App=()=>(
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


//Render to device
AppRegistry.registerComponent('albums', ()=> App);
