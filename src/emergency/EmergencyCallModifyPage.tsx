import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';
import Header from '../base/Header';
import CategorySelectorLayout from '../base/CategorySelectorLayout';
import {InputBox, Input, BigInput, InputLabel, InputList, InputSideTxt} from '../base/input';
import { ScrollView } from 'react-native';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';

// Emenrgecy Call Book Modeify Screen
const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    /* border: 3px red; */
    flex-grow:1;
    padding: 0 4%;
    /* justify-content: space-around; */
`;

const holderTxt = "긴급연락처에 대한 자세한 내용을 적어주세요.\n\n작성 예시)\n기관명\n주소 ( 서울특별시 동대문구 00 도로명 00 아파트 )"

function EmergencyCallModifyPage(){
    holderTxt.replace(/\n/g, '<br/>');
    return(
        <>
            <Header text="긴급연락처 | 수정하기"/>
            <ScrollView>
                <TopSectionInfo totalCount={2} type="MODIFY" text="수정 완료"/>
                <Whole>
                    <CategorySelectorLayout />

                    <InputBox>
                        <InputLabel>제목</InputLabel>
                        <Input style={{height:40}}/>
                    </InputBox>
                    <InputBox>
                        <InputLabel>연락처</InputLabel>
                        <InputList style={{alignItems: 'center'}}>
                            <Input style={{flexGrow:9, height:40}}/>
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <Input style={{flexGrow:9, height:40}}/>
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <Input style={{flexGrow:9, height:40}}/>
                            
                        </InputList>
                    </InputBox>
                    <InputBox>
                        <InputLabel >내용</InputLabel>
                        <BigInput placeholder={holderTxt} placeholderTextColor="rgba(34, 34, 34, 0.5);" style={{height:194, fontSize:10}}/>
                    </InputBox>       
                </Whole>
            </ScrollView>
        </>

    );
}

export default EmergencyCallModifyPage;