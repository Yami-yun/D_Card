/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useEffect, useState} from 'react';
import {PanResponder, View, BackHandler, Alert} from 'react-native';
import styled from 'styled-components/native';
import {getDeviceWidth, getDeviceHeight} from './base/Tool';

import { useSetMenuStateContext, useSetScreenDisplayStateContext, useScreenDisplayStateContext, useSetAppInfoPageContext } from './base/context';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import MainPage from './main/MainPage';
import InstructionMainPage from './self-instruction/InstructionMainPage';
import SideMenu from './SideMenu';
import InstructionModify from './self-instruction/InstructionModify';
import PhotoZoneMainPage from './PhotoZone/PhotoZoneMainPage';
import PhotoZoneAddPage from './PhotoZone/PhotoZoneAddPage';
import PhotoZoneModifyPage from './PhotoZone/PhotoZoneModifyPage';
import EmergencyCallMainPage from './emergency/EmergencyCallMainPage';
import EmergencyCallAddPage from './emergency/EmergencyCallAddPage';
import EmergencyCallModifyPage from './emergency/EmergencyCallModifyPage';
import HealthInfoMainPage from './health/HealthInfoMainPage';
import HealthInfoAddPage from './health/HealthInfoAddPage';
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
    const setAppInfoPageContext = useSetAppInfoPageContext();
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();
    let swipeX = 0;



    const panResponder = useRef(
    PanResponder.create({
        onStartShouldSetPanResponder : ()=> true,
        onPanResponderRelease: (e, gestureState) => {


        if(gestureState.dx > 80 && swipeX !== 0){
            swipeX -= 1;
            setAppInfoPageContext(swipeX);
            console.log("Left Move");
            console.log(swipeX);
        }
        else if(gestureState.dx < -80  && swipeX !== 3){
            swipeX += 1;
            setAppInfoPageContext(swipeX);
            console.log("Right Move");
            console.log(swipeX);

        }

        if(deviceW * 0.57 < gestureState.x0){
            isMenuChange = true;
            setMenuStateContext(false);
            // console.log("test11");
        }},
    })).current;

    const Page = () =>{
        let screen = undefined;
        switch(screenDisplayStateContext.screen){
            
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
            case "PHOTO_ADD":
                screen = <PhotoZoneAddPage/>
                break;
            case "PHOTO_MODIFY":
                screen = <PhotoZoneModifyPage/ >
                break;
            case "EMERGENCY_CALL_MAIN":
                screen = <EmergencyCallMainPage/ >
                break;
            case "EMERGENCY_CALL_ADD":
                screen = <EmergencyCallAddPage/ >
                break;
            case "EMERGENCY_CALL_MODIFY":
                screen = <EmergencyCallModifyPage/ >
                break;
            case "HEALTH_INFO_MAIN":
                screen = <HealthInfoMainPage/ >
                break;
            case "HEALTH_INFO_ADD":
                screen = <HealthInfoAddPage/ >
                break;
            case "HEALTH_INFO_MODIFY":
                screen = <HealthInfoModifyPage/ >
                break;
            case "APP_INFO":
                screen = <AppInfoPage / >
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

        </Whole>
    );
};
export default PageControl;
