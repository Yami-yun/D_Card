/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';
import Test from './test';
import Header from './base/header'
import MainPersonalDescription from './main/MainPersonalLayout';
import MainPhotoLayout from './main/MainPhotoLayout';
import SideMenu from './SideMenu';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

interface Props{

};

// const Test = styled.Text`
//   width: 100px;
//   height: 100px;
// `;




const App = ({}:Props)=> {
  return (
    <>
      {/* <Header text="치매노인수첩 [ D-Card ]"/>
      
      <MainPersonalDescription homeAddress="광주광역시 남구 봉선동 라인하이츠 
               아파트  109동 110호"/>
      <MainPhotoLayout/> */}
      <SideMenu/>
    </>


  );
};


export default App;
