/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';
import {getDeviceWidth, getDeviceHeight} from './base/Tool';
import Test from './Test';
import Header from './base/Header';

import MainPage from './main/MainPage';
import InstructionMainPage from './self-instruction/InstructionMainPage';
import SideMenu from './SideMenu';
import InstructionModify from './self-instruction/InstructionModify';
import PhotoZoneMainPage from './PhotoZone/PhotoZoneMainPage';
import PhotoZoneModifyPage from './PhotoZone/PhotoZoneModifyPage';
import EmergencyCallMainPage from './emergency/EmergencyCallMainPage';
import EmergencyCallModifyPage from './emergency/EmergencyCallModifyPage';
import HealthInfoMainPage from './health/HealthInfoMainPage';
import HealthInfoModifyPage from './health/HealthInfoModifyPage';
import AppInfoPage from './appInfo/AppInfoPage';

interface Props{

};

const App = ({}:Props)=> {
console.log(getDeviceWidth(), getDeviceHeight());
  return (
    <>
    {/* <Header/> */}

      <Test/>
      {/* <MainPage/> */}
      {/* <InstructionMainPage/ > */}
      {/* <InstructionModify/> */}

      {/* <PhotoZoneMainPage /> */}
      {/* <PhotoZoneModifyPage/> */}

      {/* <EmergencyCallMainPage/> */}
      {/* <EmergencyCallModifyPage/> */}

      {/* <HealthInfoMainPage/> */}
      {/* <HealthInfoModifyPage/> */}
      {/* <SideMenu/> */}
      
      {/* <AppInfoPage/> */}

    </>

  );
};
export default App;
