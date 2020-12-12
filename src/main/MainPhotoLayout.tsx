import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import {widthCal, heightCal} from '../base/Tool';
import {Alert, Linking} from 'react-native';
import { useSetScreenDisplayStateContext} from "../base/context";

/*
추가 구현 해야할 것 : 본인이미지 등록 되면 받아오기,  대표 포토 이미지와 제목 받아오기
*/

const Whole = styled.View`
    /* height: 260px; */
    flex-direction: row;
    /* border: 1px blue; */
    justify-content: space-between;
    margin: ${heightCal(38.8)}px 0;
    
`;

const MainPhotoLeftLayout = styled.View`
    /* padding: 19px; */
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

const PlusIconBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width: 40px;
    height: 40px;
    margin-top: 9px;
    margin-left: 29px;
`;

const MainPhotoPlusIcon = styled.Image`
    
`;

const MainPhotoRightLayout = styled.View`

`;

const MainPhotoImgBox = styled.View`
        /* width: 230px;
    height: 176px; */
    width: ${widthCal(230)}px;
    height: ${heightCal(176)}px;
    display:flex;
    justify-content: center;
    align-items: center;
    
    background: #FFFFFF;
    border: 1px #D0D0D0;
    border-radius: 3px;
`;

const MainPhotoImg = styled.Image`
    width: ${widthCal(90)}px;
    height: ${heightCal(80)}px;
    /* width: 80px;
    height: 60px; */

    margin-bottom: 15px;
`;

const MainPhotoHelpTxt = styled.Text`
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: rgba(51, 51, 51, 0.5);
`;

const MainPhotoDescriptionTxt = styled.Text`

    font-weight: normal;
    font-size: 12px;
    margin-top: 8px;
    color: #333333;
`;

const EmergencyIconBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    position: absolute;
    bottom: -20px;
    left: 1px;
    width: ${widthCal(70)}px;
    height: ${heightCal(70)}px;
`;

const MainPhotoEmergencyIcon = styled.Image`
    
    /* width: 70px;
    height: 70px; */
`;

interface Props{
    imgRoute?:string;
};

function MainPhotoLayout({imgRoute}: Props){
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();
    const url = 'tel:01031927469';
    // const handlePress = useCallback(async () => {
    //     // Checking if the link is supported for links with custom URL scheme.
    //     const supported = await Linking.canOpenURL(url);
    //     console.log("test");
    
    //     if (supported) {
    //       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    //       // by some browser in the mobile
    //       await Linking.openURL(url);
    //     } else {
    //       Alert.alert(`Don't know how to open this URL: ${url}`);
    //     }
    //   }, [url]);


    return(
        <Whole>
            <MainPhotoLeftLayout>
                <MainPhotoTextLine1>일상을 담는</MainPhotoTextLine1>
                <MainPhotoTextLine2>사진첩</MainPhotoTextLine2>
                <PlusIconBox onPress={()=>{setScreenDisplayStateContext("PHOTO_MAIN")}} >
                    <MainPhotoPlusIcon source={require("../img/plusIcon.png")}/>
                </PlusIconBox>
                <EmergencyIconBox onPress={()=>{setScreenDisplayStateContext("EMERGENCY_CALL_MAIN")}} >
                    <MainPhotoEmergencyIcon source={require("../img/emergencyCallIcon.png")}/>
                </EmergencyIconBox>
            </MainPhotoLeftLayout>
            <MainPhotoRightLayout>
                <MainPhotoImgBox >
                    <MainPhotoImg source={imgRoute === undefined ? require("../img/camera.png") : imgRoute}/>
                    {/* <MainPhotoHelpTxt>사진을 선택해주세요.</MainPhotoHelpTxt> */}
                </MainPhotoImgBox>
                <MainPhotoDescriptionTxt>[2020.08.30] 우리 가족사진을 찍다...</MainPhotoDescriptionTxt>
            </MainPhotoRightLayout>
            
        </Whole>
    );
}

export default MainPhotoLayout;