
import React, {useRef, useEffect, useState} from 'react';
import {PanResponder} from 'react-native';
import styled from 'styled-components/native';
import {getDeviceWidth} from './base/Tool';
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
    useSetFirstAppContext,
    useAppInfoPageContext,
} from './base/context';

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

const PageControl = ({children}:Props)=> {
    const deviceW = getDeviceWidth()
    const setMenuStateContext = useSetMenuStateContext();

    const screenDisplayStateContext = useScreenDisplayStateContext();
    const setAppInfoPageContext = useSetAppInfoPageContext();
    const appInfoPageContext = useAppInfoPageContext();
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    const setInstructionDataContext = useSetInstructionDataContext();
    const setPhotoZoneDataListContext = useSetPhotoZoneDataListContext();
    const setHealthInfoDataListContext = useSetHealthInfoDataListContext();
    const setEmergencyCallDataListContext = useSetEmergencyCallDataListContext();

    const setFirstAppContext = useSetFirstAppContext();

    let swipeX = 0;         // swipe count on app info page
    const DataLoad = async() => {
        // Load Saved Data 
        try {
            const instructionData = await AsyncStorage.getItem('INSTRUCTION_DATA');
            const photoData = await AsyncStorage.getItem('PHOTO_DATA');
            const healthInfoData = await AsyncStorage.getItem('HEALTH_INFO_DATA');
            const emergencyData = await AsyncStorage.getItem('EMERGENCY_DATA');
            const initAppData = await AsyncStorage.getItem("INIT_APP");

            console.log("################################ INIT ################################");
            if(instructionData !== null){
                setInstructionDataContext({type:"INIT", data:JSON.parse(instructionData) });
            }
            if(initAppData !== null){
                
                if(JSON.parse(initAppData)){
                    setFirstAppContext(true);
                }
            }
            if(photoData !== null){
                setPhotoZoneDataListContext({type:"INIT", data:JSON.parse(photoData) });
            }
            if(healthInfoData !== null){
                setHealthInfoDataListContext( {type:"INIT", data: JSON.parse(healthInfoData) });
            }
            if(emergencyData !== null){
                setEmergencyCallDataListContext({type:"INIT", data: JSON.parse(emergencyData) });
            }
            
            console.log(`[S] : PageControl.tsx, [F] : DataLoad, [T] : LOAD, [D] : DATA_LOAD, `);
            console.log(`1. appData : `);
            console.log(instructionData);
            console.log(photoData);
            console.log(healthInfoData);
            console.log(emergencyData);
            console.log(initAppData);
            console.log("################################ INIT END ################################");
    
        } catch(e) {
            // error reading value
            console.log(`[S] : PageControl.tsx, [F] : DataLoad, [T] : DATA_LOAD, [D] : _DATA_LOAD_ERROR`);
            console.log(`1. appData : `);
            console.log(`2. Error Message : `);
            console.log(e.message);
        }
    }
    const [isEndLoading, setIsEndLoading] = useState(false);            // check if Loading is End
    useEffect(()=>{
        
        DataLoad();
        // firt init page
        setScreenDisplayStateContext({screen: "MAIN",stage: 0});

        setTimeout(()=>{
            setIsEndLoading(true);
        }, 2000)   
    },[]);

    const panResponder = useRef(
    PanResponder.create({
        onStartShouldSetPanResponder : ()=> true,
        onPanResponderRelease: (e, gestureState) => {

        // left swipe on app info page
        if(gestureState.dx > 80 && swipeX !== 0){
            swipeX -= 1;
            setAppInfoPageContext(swipeX);
            console.log(`[S] : PageControl.tsx, [F] : panResponder, [T] : LEFT MOVE, [D] : swipeX, `);
            console.log(swipeX);
        }
        // right swipe on app info page
        else if(gestureState.dx < -80  && swipeX !== 5){
            swipeX += 1;
            console.log(`[S] : PageControl.tsx, [F] : panResponder, [T] : RIGHT MOVE END, [D] : swipeX End, `);

            console.log(swipeX);
            if(swipeX === 4){
                swipeX = 0;

                console.log(`[S] : PageControl.tsx, [F] : panResponder, [T] : RIGHT MOVE END, [D] : swipeX End, `);

                console.log(swipeX);
                setScreenDisplayStateContext({screen:"MAIN", stage:0});
            }
            setAppInfoPageContext(swipeX);
        }
        
        // menu close outside menu area
        if(deviceW * 0.57 < gestureState.x0){
            setMenuStateContext(false);
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
            {!isEndLoading ? <Loading /> : Page()}
            <SideMenu />
        </Whole>
    );
};
export default PageControl;
