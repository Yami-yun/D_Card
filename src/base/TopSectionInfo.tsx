import React from 'react';
import styled, {css} from 'styled-components/native';
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
    usePagingDataContext,
    useHealthInfoDataContext,
    useSetHealthInfoDataContext,
    useSetHealthInfoDataListContext,
    useEmergencyCallDataContext,
    useSetEmergencyCallDataContext,
    useSetEmergencyCallDataListContext,
    initHealthInfoData,
    initEmergencyCallData,
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

const DeleteIconBox = styled.View`
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
};

function TopSectionInfo({totalCount, type, text, screen}:Props){
    const screenDisplayStateContext = useScreenDisplayStateContext();
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    const setPhotoZoneDataContext = useSetPhotoZoneDataContext();
    const setPhotoZoneDataListContext = useSetPhotoZoneDataListContext();
    const photoZoneDataContext = usePhotoZoneDataContext();
    
    const pagingDataContext = usePagingDataContext();

    const setHealthInfoDataContext = useSetHealthInfoDataContext();
    const healthInfoDataContext = useHealthInfoDataContext();
    const setHealthInfoDataListContext = useSetHealthInfoDataListContext()

    const emergencyCallDataContext = useEmergencyCallDataContext();
    const setEmergencyCallDataContext = useSetEmergencyCallDataContext();
    const setEmergencyCallDataListContext = useSetEmergencyCallDataListContext();


    const setData = () => {
        if(screen === "PHOTO_MODIFY"){
            console.log("TopSectionInfo, setData ");
            /* console.log(setPhotoZoneDataContext); */

            setPhotoZoneDataListContext({type:type, data:photoZoneDataContext, index:pagingDataContext.PHOTO_MAIN});
            // data init 함수 넣기
            setPhotoZoneDataContext({...initPhotoZoneData});
        }
        else if(screen === "EMERGENCY_CALL_MODIFY"){
            console.log("EMERGENCY_CALL_MODIFY!");

            setEmergencyCallDataListContext({type:type, data:emergencyCallDataContext, index:pagingDataContext.EMERGENCY_CALL_MAIN});
            // data init 함수 넣기
            setEmergencyCallDataContext({...initEmergencyCallData});
        }
        else if(screen === "HEALTH_INFO_MODIFY"){
            console.log("HEALTH_INFO_MODIFY!");

            setHealthInfoDataListContext({type:type, data:healthInfoDataContext, index:pagingDataContext.HEALTH_INFO_MAIN});
            // data init 함수 넣기
            setHealthInfoDataContext({...initHealthInfoData});
        }
    }

    const screenMove = () => {

        if(type === "INFO"){
            setPhotoZoneDataContext({...initPhotoZoneData});
            setEmergencyCallDataContext({...initEmergencyCallData});
            setHealthInfoDataContext({...initHealthInfoData});
            setScreenDisplayStateContext(screenDisplayStateContext.replace(/MAIN/g, 'ADD'));
            //console.log(screenDisplayStateContext.replace(/MAIN/g, 'MODIFY') );
        }else if(type === "MODIFY" || type === "H_MODIFY"){
            setScreenDisplayStateContext(screenDisplayStateContext.replace(/MODIFY/g, 'MAIN'));
        }else if(type === "ADD"){
            setScreenDisplayStateContext(screenDisplayStateContext.replace(/ADD/g, 'MAIN'));
        }
    }
    // type='INFO';
    return(
        <Whole screen={screen} >
            {type==='INFO' && <InfoTxt>총 {totalCount}개의 내용이 존재합니다.</InfoTxt>}
            {type=== ('MODIFY') && <DeleteIconBox><FontAwesomeIcon icon={faTrashAlt} size={24} color={'#ffffff'} /></DeleteIconBox>}
            {type=== ('H_MODIFY') && <DeleteIconBox><FontAwesomeIcon icon={faTrashAlt} size={24} color={'#ffffff'} /></DeleteIconBox>}
            {type=== ('ADD') && <EmptyBox></EmptyBox>}
            
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