/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';

import Header from './base/Header'
import SelfInstructionLayout from './base/SelfInstructionLayout';
import MainPhotoLayout from './main/MainPhotoLayout';
import SideMenu from './SideMenu';
import InstructionDetail from './self-instruction/InstructionDetail';
import InstructionModify from './self-instruction/InstructionModify';
import MainFunctionLayout from './base/MainFunctionLayout';
import MainDescriptionLayout from './base/MainDescriptionLayout';
import PagingBtnLayout from './base/PagingBtnLayout';

import PhotoZoneMainPage from './PhotoZone/PhotoZoneMainPage';
import PhotoZoneModifyPage from './PhotoZone/PhotoZoneModifyPage';

import EmergencyCallMainPage from './emergency/EmergencyCallMainPage';
import EmergencyCallModifyPage from './emergency/EmergencyCallModifyPage';

import HealthInfoMainPage from './health/HealthInfoMainPage';
import HealthInfoModifyPage from './health/HealthInfoModifyPage';

import AppInfoPage from './appInfo/AppInfoPage';

import TopSectionInfo from './base/TopSectionInfo';

import Button from './base/button';

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
      
      <SelfInstructionLayout homeAddress="광주광역시 남구 봉선동 라인하이츠 
               아파트  109동 110호" page="instruction"/> */}
      {/* <InstructionDetail/> */}
      {/* <Test/> */}

      {/* <MainPhotoLayout/> */}
      <HealthInfoMainPage/>

      {/* <View style={{paddingLeft: 22, paddingRight: 22}}>
        <HeaderInfo/>
        <MainFunctionLayout title="[2020.08.30] 우리 가족사진을 찍다..."/>
        <MainDescriptionLayout/>
        <PagingBtnLayout/>
      </View> */}
      {/* <InstructionModify/> */}
      {/* <MainPhotoLayout/> */}
      {/* <SideMenu/> */}
    </>


  );
};


export default App;
