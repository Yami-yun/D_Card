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
import PageControl from './PageControl';


import { AppStateProvider, useSetMenuStateContext } from './base/context';

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


  return (
    // <Test/>
    <AppStateProvider>
       <PageControl >
        
       </PageControl>

    </AppStateProvider>

  );
};
export default App;
