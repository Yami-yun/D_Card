import React, {useEffect, useState, useRef} from 'react';
import { View, Image, BackHandler } from 'react-native';
import styled, {css} from 'styled-components/native';
import {useSetScreenDisplayStateContext, useAppInfoPageContext} from '../base/context';
// Close 기능
// Paging 기능



const Whole = styled.View`
    height : 100%;
    background: #ffffff;
`;

// 상단 레이아웃
const InfoTopLayout = styled.View`
    height: 57.5%;
    justify-content: space-between;
    align-items:center;
    background: #164580;
    padding-bottom: 20%;
`;

// App 소개 상단 타이틀 레이아웃
const InfoHeader = styled.View`
    width: 88%;
    height: 35%;
    flex-direction: row;
    justify-content:center;
    align-items: center;
`;

const InfoHeaderTxt = styled.Text`
    margin-right: 4.166%;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
`;

const InfoHeaderCloseIconBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    position: absolute;
    right: 0.01px;
`;

const InfoHeaderCloseIcon = styled.Image``;

const FirtInfoMainImg = styled.Image``;

const InfoMainImg = styled.Image`
    background: #ffffff;
    border-radius: 10px;

    height: 310px;
    width: 245px;
`;

// App 소개 하단 레이아웃 (Description 부분)
const InfoBottomLayout = styled.View`
    height: 42.5%;
    align-items: center;
`;

// Question Box
const InfoQuestionBox = styled.View`
    position: absolute;
    top: -26px;
    width: 88%;
    height: 52px;
    justify-content: center;
    align-items: center;

    border: 2px #FFFFFF;
    border-radius: 5px;
`;
const InfoQuestionTxt = styled.Text`
    font-weight: bold;
    font-size: 12px;
`;

// Answer Box
const InfoAnswerBox = styled.View`
    width: 87.3%;
    height: 73%;
    justify-content: center;
    align-items: center;

    /* margin-top: 27.5px; */
    margin-top: 8.8%;
    border: 1px solid #9D9A9A;
    border-radius: 3px;
`;
const InfoAnswerTxt = styled.Text`
    /* width: 249px; */

    ${props=>props.data === 0 && css`
        text-align:center;
    `}
    ${props=>props.data === 2 && css`
        text-align:center;
    `}
    width: 100%;
    /* height: 100%; */
    padding: 4px 32px;
    /* border: 1px black; */

    /* text-align: center; */
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.8);
    
`;

//Paging Layout oooo
const InfoPagingLayout = styled.View`
    width: 18%;
    height: 25%;
    
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const InfoPagingCircle = styled.View`
    width: 10px;
    height: 10px;

    background: ${props=>props.active ? '#164580' : '#C4C4C4'};
    border-radius: 16px;
`;

const swipeDirections = {
    SWIPE_UP: "SWIPE_UP",
    SWIPE_DOWN: "SWIPE_DOWN",
    SWIPE_LEFT: "SWIPE_LEFT",
    SWIPE_RIGHT: "SWIPE_RIGHT"
};

const imgSrc = [
    require("../img/infoImg1.png"),
    require("../img/infoImg2.png"),
    require("../img/infoImg3.png"),
];

const titleSrc = [
    {
        title:"치매노인수첩 [ D- card ] 이란? 무엇인가요?",
        background:"#AAD462",
        color:"#000000",
    },
    {
        title:"치매노인수첩 [ D- card ]이 만들어진 이유는 무엇인가요?",
        background:"#AAD462",
        color:"#000000",
    },
    {
        title:"치매노인수첩 [ D- card ]의 포함 내용",
        background:"#F28D53",
        color:"#000000",
    },
    {
        title:"치매노인수첩 [ D- card ] 주의사항",
        background:"#ED3B3B",
        color:"#FFFFFF",
    },
];

const descriptionSrc = [
    {
        width:249,
        uri: require("../img/infoDescription1.png"),
    },
    {
        width:297,
        uri: require("../img/infoDescription2.png"),
    },
    {
        width:340,
        uri: require("../img/infoDescription3.png"),
    },
    {
        width:296,
        uri: require("../img/infoDescription4.png"),
    },
    
];

function AppInfoPage(){
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();
    const appInfoPageContext = useAppInfoPageContext();

    useEffect(() => {    
        const backAction = () => {
            setScreenDisplayStateContext({screen:"MAIN",stage:0});
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

    const infoPagingCircleList = () => {
        let circle = [];
        for(let i=0; i<4; i++){
            if(i !== appInfoPageContext){
                circle.push(false);
            }else{ circle.push(true); }
        }
        return(
                circle.map((tmp)=>(
                <InfoPagingCircle active={tmp}/>))
        );
    };

    return(
        <Whole>
            <InfoTopLayout>
                <InfoHeader>
                    <InfoHeaderTxt>치매노인수첩(D- Card) App. 소개</InfoHeaderTxt>
                    <InfoHeaderCloseIconBox onPress={()=>{setScreenDisplayStateContext({screen : "MAIN", stage:0});}}>
                        <InfoHeaderCloseIcon source={require('../img/xicon2.png')} />
                    </InfoHeaderCloseIconBox>
                </InfoHeader>
                <View style={{justifyContent:"center"}}>
                    {appInfoPageContext ===0 && <FirtInfoMainImg source={require('../img/logo.png')}/>}
                    {appInfoPageContext !==0 && <InfoMainImg source={imgSrc[appInfoPageContext-1]}/>}
                </View>
                
            </InfoTopLayout>
            <InfoBottomLayout>
                <InfoQuestionBox style={{backgroundColor:titleSrc[appInfoPageContext].background}}>
                    <InfoQuestionTxt style={{color:titleSrc[appInfoPageContext].color}}>{titleSrc[appInfoPageContext].title}</InfoQuestionTxt>
                </InfoQuestionBox>
                <InfoAnswerBox data={appInfoPageContext}>
                    <Image style={{width:descriptionSrc[appInfoPageContext].width,height:200}} resizeMode="contain" source={descriptionSrc[appInfoPageContext].uri} />
                </InfoAnswerBox>

                <InfoPagingLayout>
                    
                    {infoPagingCircleList()}
                </InfoPagingLayout>

            </InfoBottomLayout>

        </Whole>

    );
}
// resizeMode='contain' cover contain stretch repeat center
export default AppInfoPage;