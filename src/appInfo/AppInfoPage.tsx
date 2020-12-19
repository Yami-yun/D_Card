import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import {
    useSetScreenDisplayStateContext, 
    useAppInfoPageContext, DataSave, 
    useSetAppInfoPageContext,
} from '../base/context';

/*
ok
 App introduce page
*/

const Whole = styled.View`
    height : 100%;
    background: #ffffff;
`;

// Top Layout
const InfoTopLayout = styled.View`
    height: 57.5%;
    padding-bottom: 20%;

    justify-content: space-between;
    align-items:center;
    background: #164580;
`;

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
    font-size: 17px;
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

// Info Img on first page
const FirtInfoMainImg = styled.Image``;

const InfoMainImg = styled.Image`
    background: #ffffff;
    border-radius: 10px;

    height: 310px;
    width: 245px;
`;

// Bottom Layout
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
    margin-top: 8.8%;

    justify-content: center;
    align-items: center;

    border: 1px solid #9D9A9A;
    border-radius: 3px;
`;

//Paging Layout oooo
const InfoPagingLayout = styled.View`
    width: 18%;
    height: 17%;
    
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

// info img
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

// descripition text img
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
    const setAppInfoPageContext = useSetAppInfoPageContext();

    // change page per sliding
    const infoPagingCircleList = () => {
        let circle = [];
        for(let i=0; i<4; i++){
            i !== appInfoPageContext ? circle.push({id:i, active: false}) : circle.push({id:i, active: true});
        }
        return(
                circle.map((tmp)=>(<InfoPagingCircle id={tmp.id} active={tmp.active}/>))
        );
    };

    return(
        <Whole>
            <InfoTopLayout>
                <InfoHeader>
                    <InfoHeaderTxt>치매노인수첩(D- Card) App. 소개</InfoHeaderTxt>
                </InfoHeader>
                <View style={{justifyContent:"center"}}>
                    {appInfoPageContext ===0 ? <FirtInfoMainImg source={require('../img/logo.png')}/> 
                    : appInfoPageContext !==0 && <InfoMainImg source={imgSrc[appInfoPageContext-1]}/>}
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
export default AppInfoPage;