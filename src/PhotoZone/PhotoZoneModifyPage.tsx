import React from 'react';
import styled from 'styled-components/native';
import MainFunctionLayout from '../base/MainFunctionLayout';
import MainDescriptionLayout from '../base/MainDescriptionLayout';
import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import TopSectionInfo from '../base/TopSectionInfo';
import TitleLayout from '../base/titleLayout';
import {InputBox, InputList, InputSideTxt, Input, InputLabel} from '../base/input';

const Whole = styled.View`
    padding: 0 22px;
`;

const PhotoLayout = styled.View`
    height: 100%;
    border: 1px;
    justify-content: center;
    align-items: center;
`;

const DefaultPhotoBox = styled.View`

`;

const PhotoBoxImg = styled.Image``;

const PhotoBoxDefaultTxt = styled.Text`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: rgba(51, 51, 51, 0.5);
`;

function PhotoZoneModifyPage(){
    
    return(
        <>
        <Header text="사진첩 | 수정하기"/>
        <Whole>
            <TopSectionInfo type="MODIFY" text="수정 완료" />
             
            <MainFunctionLayout >
                <PhotoLayout>
                    {/* 이거아니면 && 이미지 */}
                    <DefaultPhotoBox>
                        <PhotoBoxImg source={require("../img/camera.png")}/>
                        <PhotoBoxDefaultTxt>사진을 선택해주세요.</PhotoBoxDefaultTxt>
                        
                    </DefaultPhotoBox>
                </PhotoLayout>
                </MainFunctionLayout>
            
            <InputBox>
                <InputLabel>제목</InputLabel>
                <Input/>
            </InputBox>

            <InputBox>
                <InputLabel>내용</InputLabel>
                <Input style={{height:189}}/>
            </InputBox>
            


        
        </Whole>
        </>
    );
}

export default PhotoZoneModifyPage;