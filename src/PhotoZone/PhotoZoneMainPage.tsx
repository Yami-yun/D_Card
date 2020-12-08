import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';
import MainFunctionLayout from '../base/MainFunctionLayout';
import MainDescriptionLayout from '../base/MainDescriptionLayout';
import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import TitleLayout from '../base/TitleLayout';
import PhotoLayout from '../base/PhotoLayout';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';

const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    /* border: 3px red; */
    flex-grow:1;
    padding: 0 4%;
    justify-content: space-around;
`;

const TView = styled.View``;


function PhotoZoneMainPage(){
    
    return(
        <>
        <Header text="사진첩"/>
        <TopSectionInfo totalCount={2} type="INFO" text="추가 하기"/>
        <Whole>
            
            <TView >  
                <TitleLayout title='[2020.08.30] 우리 가족사진을 찍다...' color="#2A65AF"/ >
                <MainFunctionLayout>
                    <PhotoLayout src= "camera" text="사진을 선택해주세요." />
                </MainFunctionLayout>
            </TView>
            <MainDescriptionLayout/>
            <PagingBtnLayout/>
        </Whole>
        </>
    );
}

export default PhotoZoneMainPage;