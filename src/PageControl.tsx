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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './appInfo/Loading';

import { 
    useSetMenuStateContext, 
    useSetScreenDisplayStateContext, 
    useScreenDisplayStateContext, 
    useSetAppInfoPageContext, 
    useSetInstructionDataContext,
    useSetPhotoZoneDataListContext,
    useSetHealthInfoDataListContext,
    useSetEmergencyCallDataListContext,
    usePhotoZoneDataListContext,
    DataDelete,
    useSetFirstAppContext,
    useFirstAppContext,
    DataSave,
    useInstructionDataContext,
 } from './base/context';

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
import AppInfoPage0 from './appInfo/AppInfoPage0';


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

    const setInstructionDataContext = useSetInstructionDataContext();
    const setPhotoZoneDataListContext = useSetPhotoZoneDataListContext();
    const setHealthInfoDataListContext = useSetHealthInfoDataListContext();
    const setEmergencyCallDataListContext = useSetEmergencyCallDataListContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();

    const firstAppContext = useFirstAppContext();
    const setFirstAppContext = useSetFirstAppContext();

    const instructionDataContext = useInstructionDataContext();

    // let _saveHealthInfoId =saveHealthInfoId;
    // let _savePhotoZoneId =savePhotoZoneId;
    // let _saveEmergencyCallId =saveEmergencyCallId;
    // savePhotoZoneId, 
    // saveEmergencyCallId,

    const [isFirst, setIsFirst] = useState(false);
    let swipeX = 0;

    const DataLoad = async() => {
        try {
            const settingData = await AsyncStorage.getItem('SETTING_DATA');
            const instructionData = await AsyncStorage.getItem('INSTRUCTION_DATA');
            const photoData = await AsyncStorage.getItem('PHOTO_DATA');
            const healthInfoData = await AsyncStorage.getItem('HEALTH_INFO_DATA');
            const emergencyData = await AsyncStorage.getItem('EMERGENCY_DATA');
            const initAppData = await AsyncStorage.getItem("INIT_APP");

            console.log("################################ INIT ################################");
            // value previously stored
            // appData = JSON.parse(data);
            if(instructionData !== null){
                setInstructionDataContext({type:"INIT", data:JSON.parse(instructionData) });
            }

            // initAppData = JSON.parse(data);
            if(initAppData !== null){
                
                if(JSON.parse(initAppData)){
                    setFirstAppContext(true);
                    setIsFirst(true);
                }
                console.log("TTTTTTTTTTTTTTTTTTEST");
                console.log(initAppData);
            }
                
                //initInstructionData = {...JSON.parse(instructionData)};}
            if(photoData !== null){
                // savePhotoZoneId = JSON.parse(photoData).photoZoneId ;
                setPhotoZoneDataListContext({type:"INIT", data:JSON.parse(photoData) });
                // console.log()
                // initPhotoZoneDataList = JSON.parse(photoData).photoZoneDataList;
            }
            if(healthInfoData !== null){
                setHealthInfoDataListContext( {type:"INIT", data: JSON.parse(healthInfoData) });
                // saveHealthInfoId = JSON.parse(healthInfoData).healthInfoId;
                // initHealthInfoList = JSON.parse(healthInfoData).healthInfoDataList;
            }
            if(emergencyData !== null){
                setEmergencyCallDataListContext({type:"INIT", data: JSON.parse(emergencyData) });
                // saveEmergencyCallId = JSON.parse(emergencyData).emergencyCallId;
                // initEmergencyCallList = JSON.parse(emergencyData).emergencyCallDataList;
            }
            
            console.log(`[S] : context.tsx, [F] : DataLoad, [T] : LOAD, [D] : DATA_LOAD, `);
            console.log(`1. appData : `);
            console.log(photoZoneDataListContext);

            console.log("################################ INIT END ################################");
    
        } catch(e) {
            // error reading value
            console.log(`[S] : context.tsx, [F] : DataLoad, [T] : DATA_LOAD, [D] : _DATA_LOAD_ERROR`);
            console.log(`1. appData : `);
            // console.log(initPhotoZoneDataList);
            console.log(`2. Error Message : `);
            console.log(e.message);
        }
    }
    console.log(firstAppContext);
    const [isEndLoading, setIsEndLoading] = useState(false);
    const [isEndAppInfo, setIsEndAppInfo]= useState(false);
    useEffect(()=>{
        DataLoad();
        
        // if(! && !isFirst){
        setScreenDisplayStateContext({screen: "APP_INFO0",stage: 1});
        // }    
        // 처음 앱 실행시,

        setTimeout(()=>{
            setIsEndLoading(true);
        }, 2000)   
    },[]);


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
        else if(gestureState.dx < -80  && swipeX !== 4){
            swipeX += 1;
            if(swipeX === 4){
                swipeX -=1;
                setScreenDisplayStateContext({screen:"MAIN", stage:0});
                console.log("test");
            }
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
            case "APP_INFO0":
                screen = <AppInfoPage0 />
                break;
            default:
                console.log("default");
                break;
        }
        return screen;
    }
    console.log("TESTTEST");
    console.log(instructionDataContext);
    return (
        <Whole {...panResponder.panHandlers}>
        {/* <MainPage/> */}
        
        {!isEndLoading && <Loading />}
        {/* {isEndLoading === 1 && <AppInfoPage/>} */}
        {isEndLoading && Page()}
        <SideMenu />

        </Whole>
    );
};
export default PageControl;
