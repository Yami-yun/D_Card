import React from 'react';
import styled, {css} from 'styled-components/native';
import {Alert, ToastAndroid} from 'react-native';

// import Button from './button';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { heightCal } from '../base/Tool';
import {
    useSetPhotoZoneDataContext,
    usePhotoZoneDataContext,
    useScreenDisplayStateContext,
    useSetScreenDisplayStateContext,
    useSetPhotoZoneDataListContext,
    initPhotoZoneData,
    useSetPagingDataContext,
    usePagingDataContext,
    useHealthInfoDataContext,
    useSetHealthInfoDataContext,
    useSetHealthInfoDataListContext,
    useEmergencyCallDataContext,
    useSetEmergencyCallDataContext,
    useEmergencyCallDataListContext,
    useSetEmergencyCallDataListContext,
    initHealthInfoData,
    initEmergencyCallData,
    useHealthInfoDataListContext,
    usePhotoZoneDataListContext,
    ChekIsEmptyData,
} from "../base/context";

// 기능 : main일 경우 내용 Count, Add, Modify 버튼 기능
// Health , Emergency, Photo page  상단 바 역할
const Whole = styled.View`
/* INFO Screen || Modify Screen || Add Screen */
    height: ${heightCal(90)}px;
    /* ${(props:{type?: 'INFO' | 'MODIFY' | 'ADD' | "H_MODIFY"})=>props.type === 'ADD' ? css`justify-content: flex-end` : css`justify-content: space-between`} */
    /* height:75px; */
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${(props)=>props.screen !== "HEALTH_INFO_MODIFY" ? 4 : 0}%;
    
    padding-top: 15px;

`;

const InfoTxt = styled.Text`
    margin-left: 4.3%;
    
    font-weight: bold;
    font-size: 15px;    
    color: #555555;
`;

const DeleteIconBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width:43px;
    height: 43px;
    justify-content:center;
    align-items:center;

    background: #2A65AF;
    border-radius: 30px;
`;

const EmptyBox = styled.View`
    width:43px;
    height: 43px;
`;

const FuncBtn = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width: 100px;
    height: 40px;
    justify-content: center;
    align-items: center;

    background: #8EB9E1;
    border-radius: 3px;
`;

const BtnTxt = styled.Text`
    font-weight: bold;
    font-size: 12px;

    color: #222222;
`;

interface Props{
    totalCount?:number;
    type?: 'INFO' | 'MODIFY' | 'ADD' | 'H_MODIFY';
    text?: string;
    screen: string;
    emergencyId?: string;
};

function TopSectionInfo({totalCount, type, text, screen, emergencyId}:Props){
    const screenDisplayStateContext = useScreenDisplayStateContext();
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    const setPhotoZoneDataContext = useSetPhotoZoneDataContext();
    const setPhotoZoneDataListContext = useSetPhotoZoneDataListContext();
    const photoZoneDataContext = usePhotoZoneDataContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();
    
    const pagingDataContext = usePagingDataContext();
    const setPagingDataContext = useSetPagingDataContext();

    const setHealthInfoDataContext = useSetHealthInfoDataContext();
    const healthInfoDataContext = useHealthInfoDataContext();
    const setHealthInfoDataListContext = useSetHealthInfoDataListContext()
    const healthInfoDataListContext = useHealthInfoDataListContext();

    const emergencyCallDataContext = useEmergencyCallDataContext();
    const setEmergencyCallDataContext = useSetEmergencyCallDataContext();
    const setEmergencyCallDataListContext = useSetEmergencyCallDataListContext();
    const emergencyCallDataListContext = useEmergencyCallDataListContext();

    const setData = () => {
        if(screen === "PHOTO_MODIFY"){

            if(photoZoneDataContext.title !== "" && photoZoneDataContext.uri !== "" && photoZoneDataContext.uri !== undefined)
            {
                setPhotoZoneDataListContext({type:type, data:photoZoneDataContext, index:pagingDataContext.PHOTO_MAIN});
                if(type === "ADD"){
                    setPagingDataContext({...pagingDataContext, PHOTO_MAIN : photoZoneDataListContext.length});
                    // setPhotoZoneDataContext({...photoZoneDataListContext[pagingDataContext.PHOTO_MAIN]});
                }
            }else{
                ToastAndroid.show('제목과 사진을 넣어주세요.',ToastAndroid.SHORT);
            }

            console.log("TopSectionInfo, setData ");
            console.log(photoZoneDataListContext.length);
            console.log(pagingDataContext.PHOTO_MAIN);
            // data init 함수 넣기
            
        }
        else if(screen === "EMERGENCY_CALL_MODIFY"){
            console.log("EMERGENCY_CALL_MODIFY!");
            if(screen === "EMERGENCY_CALL_MODIFY" && emergencyCallDataContext.title !== "" && emergencyCallDataContext.call.numBack !== "" && emergencyCallDataContext.call.numBack !== undefined)
            {
                setEmergencyCallDataListContext({type:type, data:emergencyCallDataContext, index:emergencyId});
            }
            else{
                ToastAndroid.show('제목과 연락처를 넣어주세요.',ToastAndroid.SHORT);
            }
            // data init 함수 넣기
            // setEmergencyCallDataContext({...initEmergencyCallData});
        }
        else if(screen === "HEALTH_INFO_MODIFY"){
            console.log("HEALTH_INFO_MODIFY!");

            if(screen === "HEALTH_INFO_MODIFY" && healthInfoDataContext.title !== "" && healthInfoDataContext.uri !== "" && healthInfoDataContext.uri !== undefined)
            {
                setHealthInfoDataListContext({type:type, data:healthInfoDataContext, index:pagingDataContext.HEALTH_INFO_MAIN});
                if(type === "ADD"){
                    setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN : healthInfoDataListContext.length});
                    // setHealthInfoDataContext({...healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MODIFY]});
                }
            }
            else{
                ToastAndroid.show('제목과 사진을 넣어주세요.',ToastAndroid.SHORT);
            }

        }
    }

    // current shown data delete
    const deleteData = () => {
        if(screen === "PHOTO_MODIFY"){
            console.log("DELETE !!!!!!!!!!!!!!!!!!!!!");
            console.log(pagingDataContext["PHOTO_MAIN"]);
            setPhotoZoneDataListContext({type:"DELETE", data:pagingDataContext["PHOTO_MAIN"]});
            setPagingDataContext({...pagingDataContext, PHOTO_MAIN:0})
            
        }
        else if(screen === "HEALTH_INFO_MODIFY"){
            setHealthInfoDataListContext({type:"DELETE", data:pagingDataContext["HEALTH_INFO_MAIN"]});
            setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN:0});
        }
        else{
            let cmp = emergencyCallDataListContext.length;
            console.log("PLEASE!!!!!!!!!!!!!!!!!!!");
            console.log(cmp);

            // 맨 마지막에 하나 연락처 삭제하면 마지막 페이지로 넘기기
            setEmergencyCallDataListContext({type:"DELETE", data:emergencyId});
            setPagingDataContext({...pagingDataContext, EMERGENCY_CALL_MAIN: 0});

        }
        setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/MODIFY/g, 'MAIN'), stage:1});
    }

    const screenMove = () => {

        if(type === "INFO"){
            setPhotoZoneDataContext({...initPhotoZoneData});
            setEmergencyCallDataContext({...initEmergencyCallData});
            setHealthInfoDataContext({...initHealthInfoData});
            setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/MAIN/g, 'ADD'), stage:2});

        }else if(type === "MODIFY" || type === "H_MODIFY"){
            if(screen === "PHOTO_MODIFY" && photoZoneDataContext.title !== "" && photoZoneDataContext.uri !== "" && photoZoneDataContext.uri !== undefined)
            {
                // setPagingDataContext({...pagingDataContext, EMERGENCY_CALL_MAIN:Math.round(emergencyCallDataListContext.length/2)-1 });
                setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/MODIFY/g, 'MAIN'), stage:1});
            }
            if(screen === "HEALTH_INFO_MODIFY" && healthInfoDataContext.title !== "" && healthInfoDataContext.uri !== "" && healthInfoDataContext.uri !== undefined)
            {
                // setPagingDataContext({...pagingDataContext, EMERGENCY_CALL_MAIN:Math.round(emergencyCallDataListContext.length/2)-1 });
                setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/MODIFY/g, 'MAIN'), stage:1});
            }
            if(screen === "EMERGENCY_CALL_MODIFY" && emergencyCallDataContext.title !== "" && emergencyCallDataContext.call.numBack !== "" && emergencyCallDataContext.call.numBack !== undefined)
            {
                setPagingDataContext({...pagingDataContext, EMERGENCY_CALL_MAIN:Math.round(emergencyCallDataListContext.length/2)-1 });
                setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/MODIFY/g, 'MAIN'), stage:1});
            }
            
        }else if(type === "ADD"){
            // setPagingDataContext({...pagingDataContext, EMERGENCY_CALL_MAIN:Math.round(emergencyCallDataListContext.length/2)-1 });
            
            if(screen === "PHOTO_MODIFY" && photoZoneDataContext.title !== "" && photoZoneDataContext.uri !== "" && photoZoneDataContext.uri !== undefined)
            {
                setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/ADD/g, 'MAIN'), stage:1});
            }
            if(screen === "HEALTH_INFO_MODIFY" && healthInfoDataContext.title !== "" && healthInfoDataContext.uri !== "" && healthInfoDataContext.uri !== undefined)
            {
                setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/ADD/g, 'MAIN'), stage:1});
            }
            if(screen === "EMERGENCY_CALL_MODIFY" && emergencyCallDataContext.title !== "" && emergencyCallDataContext.call.numBack !== "" && emergencyCallDataContext.call.numBack !== undefined)
            {
                console.log("TESTTEST");
                console.log(emergencyCallDataContext);
                setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/ADD/g, 'MAIN'), stage:1});
            }
        }
    }
    // type='INFO';
    return(
        <Whole screen={screen} >
            {type==='INFO' && <InfoTxt>총 {totalCount}개의 내용이 존재합니다.</InfoTxt>}
            {type=== ('MODIFY') && <DeleteIconBox onPress={()=>{deleteData();}}><FontAwesomeIcon icon={faTrashAlt} size={24} color={'#ffffff'} /></DeleteIconBox>}
            {type=== ('H_MODIFY') && <DeleteIconBox onPress={()=>{deleteData();}}><FontAwesomeIcon icon={faTrashAlt} size={24} color={'#ffffff'} /></DeleteIconBox>}
            {type !== ('INFO') && <EmptyBox></EmptyBox>}
            
            <FuncBtn onPress={()=>{
                screenMove();
                setData();
                
                }}>
                <BtnTxt>{text}</BtnTxt>
            </FuncBtn>
        </Whole>
    );
}

export default TopSectionInfo;