import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';
import Header from '../base/Header';
import CategorySelectorLayout from '../base/CategorySelectorLayout';
import PhotoLayout from '../base/PhotoLayout';

import {InputBox, Input, BigInput, InputLabel} from '../base/input';
import { ScrollView } from 'react-native';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';

// Health Info Modify Page  건강 정보 변경 페이지
const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    /* border: 3px red; */
    flex-grow:1;
    padding: 0 4%;
    /* justify-content: space-around; */
`;

let holderTxt = "치매노인환자분에 대한 건강과 관련된 자세한 내용을 적어주세요.\n- 약물 복용 관련\n작성예시)\n진단명 :\n복용약:\n혈액형 :\n\n특이사항:\n\n- 기타 약물 관련\n작성예시)\n눈이 자주 건조하셔서 00 안약을 넣어 주시면 좋습니다";

function HealthInfoModifyPage(){
    holderTxt.replace(/\n/g, '<br/>');
    return(
        <>
            <Header text="건강정보 | 수정하기"/>
            <Whole>
                <ScrollView>
                    <TopSectionInfo totalCount={2} type="H_MODIFY" text="수정 완료" />

                    <PhotoLayout text="복용하는 약물 사진을 넣어주세요." src="pill"/>
                    
                    <CategorySelectorLayout />
                    <InputBox style={{marginTop:15}}>
                        <InputLabel>제목</InputLabel>
                        <Input style={{height:40}}/>
                    </InputBox>

                    <InputBox style={{marginTop:15}}>
                        <InputLabel >내용</InputLabel>
                        <BigInput placeholder={holderTxt} placeholderTextColor="rgba(34, 34, 34, 0.5);" style={{height:194, fontSize:10, marginBottom:31}}/>
                    </InputBox>  

                </ScrollView>
            </Whole>
        </>
    );
}



export default HealthInfoModifyPage;