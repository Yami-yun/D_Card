import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';

import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import EmergencyCallLayout from './EmergencyCallLayout';


const Whole = styled.View`
    flex-grow:1;
    padding: 0 22px;
    justify-content: space-around;
    /* border: 1px; */
`;

function EmergencyCallMainPage(){
    
    return(
        <>
            <Header text="사진첩"/>f
            <Whole>
                <TopSectionInfo totalCount={2} type="INFO" text="추가 하기" />
                
                <EmergencyCallLayout/>
                <EmergencyCallLayout/>
                <PagingBtnLayout/>
            
            </Whole>
        </>
    );
}


export default EmergencyCallMainPage;