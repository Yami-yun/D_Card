/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useEffect} from 'react';
import {PanResponder, View} from 'react-native';
import styled from 'styled-components/native';
import {getDeviceWidth, getDeviceHeight} from './base/Tool';

import { useSetMenuStateContext, useSetScreenDisplayStateContext, useScreenDisplayStateContext } from './base/context';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

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
    children : JSX.Element | Array<JSX.Element>;
};


const Whole = styled.View``;
const Stack = createStackNavigator();


const PageControl = ({children}:Props)=> {
  const deviceW = getDeviceWidth()
  const setMenuStateContext = useSetMenuStateContext();
  let isMenuChange = false;

  const screenDisplayStateContext = useScreenDisplayStateContext();


  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder : ()=> true,
      onPanResponderRelease: (e, gestureState) => {
        // console.log(gestureState.x0, gestureState.y0);
        
        if(deviceW * 0.57 < gestureState.x0){
            isMenuChange = true;
            setMenuStateContext(false);
            // console.log("test11");
          
        }
      },
      
    })).current;

    const Page = () =>{
        let screen = undefined;
        switch(screenDisplayStateContext){
            
            case "MAIN":
                screen = <MainPage/>;
                break;
            case "INSTRUCTION_MAIN":
                screen = <InstructionMainPage/ >
                break;
            case "INSTRUCTION_MODIFY":
                screen = <InstructionModify/ >
                break;
            case "PHOTO_MAIN":
                screen = <PhotoZoneMainPage/ >
                break;
            case "PHOTO_MODIFY":
                screen = <PhotoZoneModifyPage/ >
                break;
            case "EMERGENCY_CALL_MAIN":
                screen = <EmergencyCallMainPage/ >
                break;
            case "EMERGENCY_CALL_MODIFY":
                screen = <EmergencyCallModifyPage/ >
                break;
            case "HEALTH_INFO_MAIN":
                screen = <HealthInfoMainPage/ >
                break;
            case "HEALTH_INFO_MODIFY":
                screen = <HealthInfoModifyPage/ >
                break;
            case "APP_INFO":
                screen = <AppInfoPage/ >
                break;
            default:
                console.log("default");
                break;
        }
        return screen;
    }

  return (
      <Whole {...panResponder.panHandlers}>
   
        {/* <MainPage/> */}
        {Page()}
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

      </Whole>
  );
};
export default PageControl;
