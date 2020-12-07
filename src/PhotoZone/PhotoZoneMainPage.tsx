import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';
import MainFunctionLayout from '../base/MainFunctionLayout';
import MainDescriptionLayout from '../base/MainDescriptionLayout';
import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import TitleLayout from '../base/titleLayout';

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

function PhotoZoneMainPage(){
    
    return(
        <>
        <Header text="사진첩"/>
        <Whole>
            <TopSectionInfo totalCount={2} type="INFO" text="수정 완료" />
            
            <TitleLayout title="[2020.08.30] 우리 가족사진을 찍다..."/>
            <MainFunctionLayout>
                <PhotoLayout>
                    {/* 이거아니면 && 이미지 */}
                    <DefaultPhotoBox>
                        <PhotoBoxImg source={require("../img/camera.png")}/>
                        <PhotoBoxDefaultTxt>사진을 선택해주세요.</PhotoBoxDefaultTxt>
                        
                    </DefaultPhotoBox>
                </PhotoLayout>
            </MainFunctionLayout>
            <MainDescriptionLayout/>
            <PagingBtnLayout/>
        
        </Whole>
        </>
    );
}

export default PhotoZoneMainPage;