import React from 'react';
import styled from 'styled-components/native';

const Whole = styled.View`
    display:flex;
    flex-direction: row;
    /* height: 0px; */

    /* padding-left: 18px;
    padding-right: 218px; */
    border: 1px blue;
`;

const MainPhotoLeftLayout = styled.View`

    padding: 19px;
`;

const MainPhotoTextLine1 = styled.Text`
    font-style: normal;
    font-weight: 100;
    font-size: 12px;
    line-height: 16px;
    padding-left: 4px;

    color: rgba(51, 51, 51, 0.8);
`;

const MainPhotoTextLine2 = styled.Text`
    /* font-family: Noto Sans; */
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 34px;

    color: #222222;
`;

const MainPhotoPlusIcon = styled.Image`
    width: 40px;
    height: 40px;
    margin-top: 9px;
    margin-left: 29px;
`;

const MainPhotoRightLayout = styled.View`

`;

const MainPhotoImgBox = styled.View`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    height: 176px;
    
    background: #FFFFFF;
    border: 1px #D0D0D0;
    /* box-sizing: border-box; */
    border-radius: 3px;
`;

const MainPhotoImg = styled.Image`
    width: 80px;
    height: 60px;
    margin-bottom: 15px;
`;

const MainPhotoHelpTxt = styled.Text`

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: rgba(51, 51, 51, 0.5);
`;

const MainPhotoDescriptionTxt = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    /* line-height: 16px; */
    margin-top: 8px;


    color: #333333;
`;

const MainPhotoEmergencyIcon = styled.Image`
    position: absolute;
    width: 70px;
    height: 70px;
    top: 165px;
    left: 23px;
`;

interface Props{
    imgRoute?:string;
};

function MainPhotoLayout({imgRoute}: Props){




    return(
        <Whole>
            <MainPhotoLeftLayout>
                <MainPhotoTextLine1>일상을 담는</MainPhotoTextLine1>
                <MainPhotoTextLine2>사진첩</MainPhotoTextLine2>
                <MainPhotoPlusIcon source={require("../img/plusIcon.png")}/>
                <MainPhotoEmergencyIcon source={require("../img/emergencyCallIcon.png")}/>
            </MainPhotoLeftLayout>
            <MainPhotoRightLayout>
                <MainPhotoImgBox >
                    <MainPhotoImg source={imgRoute === undefined ? require("../img/camera.png") : imgRoute}/>
                    <MainPhotoHelpTxt>사진을 선택해주세요.</MainPhotoHelpTxt>
                </MainPhotoImgBox>
                <MainPhotoDescriptionTxt>[2020.08.30] 우리 가족사진을 찍다...</MainPhotoDescriptionTxt>
            </MainPhotoRightLayout>
            
        </Whole>
    );
}

export default MainPhotoLayout;