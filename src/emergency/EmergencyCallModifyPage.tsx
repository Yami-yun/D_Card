import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';
import MainFunctionLayout from '../base/MainFunctionLayout';
import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import TitleLayout from '../base/titleLayout';
import EmergencyCallLayout from './EmergencyCallLayout';
import CategorySelectorLayout from '../base/CategorySelectorLayout';
import {InputBox, InputList, InputSideTxt, Input, InputLabel} from '../base/input';


import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { StyleSheet } from 'react-native';


const Whole = styled.View`
    flex-grow:1;
    padding: 0 22px;
    justify-content: space-around;
    /* border: 1px; */
`;

function EmergencyCallMainPage(){
    
    return(
        <>
        <Header text="긴급연락처 | 수정하기"/>
        <Whole>
            <TopSectionInfo totalCount={2} type="MODIFY" text="수정 완료" />

            <CategorySelectorLayout/>

            <InputBox>
                <InputLabel>연락처</InputLabel>
                <InputList style={{alignItems: 'center'}}>
                    <Input style={{flexGrow:9}}/>
                    <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                    <Input style={{flexGrow:9}}/>
                    <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                    <Input style={{flexGrow:9}}/>
                    
                </InputList>
            </InputBox>

            <InputBox style={{marginBottom: 51}}>
                <InputLabel>내용</InputLabel>
                <Input style={{height:285}}/>
            </InputBox>
            
        
        </Whole>
        </>
    );
}


export default EmergencyCallMainPage;