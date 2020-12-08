import React from 'react';
import styled from 'styled-components/native';
import Header from '../base/Header';
import TopSectionInfo from '../base/TopSectionInfo';
import PhotoLayout from '../base/PhotoLayout';
import {InputBox, Input, InputLabel} from '../base/input';
import { ScrollView } from 'react-native';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';

const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    /* border: 3px red; */
    flex-grow:1;
    padding: 0 4%;
    /* justify-content: space-around; */
`;

function PhotoZoneModifyPage(){
    return(
        <>
            <Header text="사진첩 | 수정하기"/>
            <ScrollView>
                <TopSectionInfo type="MODIFY" text="수정 완료"/>
                <Whole>
                    <PhotoLayout text="사진을 선택해주세요." src="camera" height={180}/>

                    <InputBox>
                        <InputLabel>제목</InputLabel>
                        <Input style={{height:40}}/>
                    </InputBox>
                    <InputBox>
                        <InputLabel >내용</InputLabel>
                        <Input placeholder="사진에 대한 이야기를 적어주세요." placeholderTextColor="rgba(34, 34, 34, 0.5);" style={{height:189, fontSize:10}}/>
                    </InputBox>
                </Whole>
            </ScrollView>
        </>
    );
}
export default PhotoZoneModifyPage;