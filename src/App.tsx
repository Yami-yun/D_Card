/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {PanResponder, View} from 'react-native';
import styled from 'styled-components/native';
import {getDeviceWidth, getDeviceHeight} from './base/Tool';
import Test from './Test';
import Header from './base/Header';

import { AppStateProvider } from './base/context';

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

const panResponder = useRef(
  PanResponder.create({
    onStartShouldSetPanResponder : ()=> true,
    onPanResponderRelease: (e, gestureState) => {
      console.log(gestureState.x0, gestureState.y0);
    },
    
  })).current;

  return (
    <AppStateProvider>

      <View {...panResponder.panHandlers}>
        {/* <Test/> */}
        <MainPage/>
        <SideMenu />
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
      </View>
    </AppStateProvider>

  );
};
export default App;
