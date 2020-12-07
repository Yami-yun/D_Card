import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';
import MainFunctionLayout from '../base/MainFunctionLayout';
import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import TitleLayout from '../base/titleLayout';

import CategorySelectorLayout from '../base/CategorySelectorLayout';
import {InputBox, InputList, InputSideTxt, Input, InputLabel} from '../base/input';
import PhotoLayout from '../base/PhotoLayout';


import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { StyleSheet } from 'react-native';


const Whole = styled.View`
    /* flex-grow:1; */
    padding: 0 22px;
    
    /* border: 1px; */
`;

function HealthInfoModifyPage(){
    
    return(
        <>
        <Header text="건강정보 | 수정하기"/>
        <Whole>
            <TopSectionInfo totalCount={2} type="MODIFY" text="수정 완료" />
            <PhotoLayout text="복용하는 약물 사진을 넣어주세요."/>

            <CategorySelectorLayout/>

            <InputBox>
                <InputLabel>제목</InputLabel>
                <Input style={{height:40}}/>
            </InputBox>

            <InputBox >
                <InputLabel>내용</InputLabel>
                <Input style={{height:194}}/>
            </InputBox>
            
        
        </Whole>
        </>
    );
}


export default HealthInfoModifyPage;