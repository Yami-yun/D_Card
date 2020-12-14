import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';

import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import TitleLayout from '../base/TitleLayout';
import MainFunctionLayout from '../base/MainFunctionLayout';
import MainDescriptionLayout from '../base/MainDescriptionLayout';
import PhotoLayout from '../base/PhotoLayout';
import {View, BackHandler} from 'react-native';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';
import {useHealthInfoDataListContext, usePagingDataContext, useSetScreenDisplayStateContext} from '../base/context';


const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    /* border: 3px red; */
    flex-grow:1;
    padding: 0 4%;
    justify-content: space-around;
`;

function HealthInfoMainPage(){
    const healthInfoDataListContext = useHealthInfoDataListContext();
    const pagingDataContext = usePagingDataContext();
    const curShowHealthData = healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN] || "";

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

    console.log(curShowHealthData.title);
    const color = {
        0:"#ED3B3B",
        1:"#FE8C49",
        2:"#AAD462",
    };

    return(
        <>
            <Header text="건강 정보"/>
            <TopSectionInfo totalCount={healthInfoDataListContext.length} type="INFO" text="추가 하기" screen="HEALTH_INFO_MAIN"/>
            <Whole>
                {/* 여기부터 */}
                <View>  
                    <TitleLayout title={curShowHealthData.title === undefined ? "1. 약물 복용 관련" : curShowHealthData.title} color={color[curShowHealthData.importance]} screen="HEALTH_INFO_MAIN"/ >
                    <MainFunctionLayout>
                        <PhotoLayout src={curShowHealthData} defaultTypes= "pill" text="복용하는 약물 사진을 넣어주세요." screen="HEALTH_INFO_MAIN"/>
                    </MainFunctionLayout>
                </View>
                <MainDescriptionLayout src={curShowHealthData}/>
                <PagingBtnLayout screen="HEALTH_INFO_MAIN"/>
            </Whole>
        </>
    );
}


export default HealthInfoMainPage;