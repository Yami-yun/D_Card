import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';

import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import EmergencyCallLayout from './EmergencyCallLayout';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';

const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    /* border: 3px red; */
    flex-grow:1;
    padding: 0 4%;
    justify-content: space-around;
`;

function EmergencyCallMainPage(){
    
    return(
        <>
            <Header text="사진첩"/>
            <TopSectionInfo totalCount={2} type="INFO" text="추가 하기"/>
            <Whole>
                <EmergencyCallLayout/>
                <EmergencyCallLayout/>
                <PagingBtnLayout/>
            
            </Whole>
        </>
    );
}


export default EmergencyCallMainPage;