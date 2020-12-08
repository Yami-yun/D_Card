import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';

import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import TitleLayout from '../base/TitleLayout';
import MainFunctionLayout from '../base/MainFunctionLayout';
import MainDescriptionLayout from '../base/MainDescriptionLayout';
import PhotoLayout from '../base/PhotoLayout';
import {View} from 'react-native';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';


const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    /* border: 3px red; */
    flex-grow:1;
    padding: 0 4%;
    justify-content: space-around;
`;

function HealthInfoMainPage(){
    
    return(
        <>
            <Header text="건강 정보"/>
            <TopSectionInfo totalCount={2} type="INFO" text="추가 하기"/>
            <Whole>
                {/* 여기부터 */}
                <View>  
                    <TitleLayout title='1. 약물 복용 관련' color="#ED3B3B"/ >
                    <MainFunctionLayout>
                        <PhotoLayout src= "pill" text="복용하는 약물 사진을 넣어주세요." />
                    </MainFunctionLayout>
                </View>
                <MainDescriptionLayout/>
                <PagingBtnLayout/>
            </Whole>
        </>
    );
}


export default HealthInfoMainPage;