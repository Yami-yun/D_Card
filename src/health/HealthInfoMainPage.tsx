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

// Health Main Page ok
const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    flex-grow:1;
    padding: 0 4%;
    justify-content: space-around;
`;

function HealthInfoMainPage(){
    const healthInfoDataListContext = useHealthInfoDataListContext();
    const pagingDataContext = usePagingDataContext();
    const curShowHealthData = healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN] || "";
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    // back btn click > move to MAIN page
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

    console.log(`[S] : HealthInfoMainPage.tsx, [F] : HealthInfoMainPage, [T] : HEALTH_INFO_MAIN, [D] : curShowHealthData, `);
    console.log(curShowHealthData);
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
                <View>  
                    <TitleLayout title={curShowHealthData.title === undefined ? "1. 약물 복용 관련" : curShowHealthData.title} color={color[curShowHealthData.importance]} screen="HEALTH_INFO_MAIN"/ >
                    <MainFunctionLayout>
                        <PhotoLayout defaultTypes= "pill" screen="HEALTH_INFO_MAIN"/>
                    </MainFunctionLayout>
                </View>
                <MainDescriptionLayout src={curShowHealthData} type="HEALTH_INFO_MAIN" />
                <PagingBtnLayout screen="HEALTH_INFO_MAIN"/>
            </Whole>
        </>
    );
}


export default HealthInfoMainPage;