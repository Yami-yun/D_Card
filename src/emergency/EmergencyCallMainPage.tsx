import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {BackHandler} from 'react-native';
import TopSectionInfo from '../base/TopSectionInfo';

import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import EmergencyCallLayout from './EmergencyCallLayout';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';
import { 
    useEmergencyCallDataListContext, 
    usePagingDataContext, 
    useSetScreenDisplayStateContext
} from '../base/context';

// Emergency Call Main Page
const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    padding: 0 4%;
    padding-bottom: 5%;
    
    flex-grow:1;
    justify-content: space-between;
`;

function EmergencyCallMainPage(){
    const emergencyCallDataListContext = useEmergencyCallDataListContext();
    const pagingDataContext = usePagingDataContext();
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    useEffect(() => {
        const backAction = () => {
            setScreenDisplayStateContext({screen:"MAIN",stage:0});
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

    const defaultDescription = "긴급연락처에 대한 자세한 내용을 적어주세요.\n\n작성 예시)\n이름 또는 기관명\n주소 (서울특별시 동대문구 00 도로명 00 아파트 )";

    return(
        <>
            <Header text="긴급 연락처"/>
            <TopSectionInfo totalCount={emergencyCallDataListContext.length} type="INFO" text="추가 하기" screen="EMERGENCY_CALL_MAIN"/>
            <Whole>
                {/* 0: default value */}
                {emergencyCallDataListContext.length === 0 ? <EmergencyCallLayout defaults="true" title="제목을 입력해주세요." importance="0" description={defaultDescription} /> : 
                <EmergencyCallLayout {...emergencyCallDataListContext[2*pagingDataContext.EMERGENCY_CALL_MAIN]} />}

                {emergencyCallDataListContext[2*pagingDataContext.EMERGENCY_CALL_MAIN+1] !== undefined 
                && <EmergencyCallLayout {...emergencyCallDataListContext[2*pagingDataContext.EMERGENCY_CALL_MAIN+1]} />}
                <PagingBtnLayout screen="EMERGENCY_CALL_MAIN"/>
            
            </Whole>
        </>
    );
}


export default EmergencyCallMainPage;