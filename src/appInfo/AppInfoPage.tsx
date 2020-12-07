import React from 'react';
import styled from 'styled-components/native';

// Close 기능
// Paging 기능

const Whole = styled.View`
    height : 100%;
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
const InfoHeaderCloseIcon = styled.Image`
    position: absolute;
    right: 0.01px;
`;

const InfoMainImg = styled.Image`
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

    background: #AAD462;
    border: 2px #FFFFFF;
    border-radius: 5px;
`;
const InfoQuestionTxt = styled.Text`
    font-weight: bold;
    font-size: 12px;
    color: #000000;
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
    width: 79%;
    height: 50%;
    border: 1px black;

    text-align: center;
    font-weight: bold;
    font-size: 13px;
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

    background: #164580;
    border-radius: 16px;
`;

function AppInfoPage(){
    
    return(
        <Whole>
            <InfoTopLayout>
                <InfoHeader>
                    <InfoHeaderTxt>치매노인수첩(D- Card) App. 소개</InfoHeaderTxt>
                    <InfoHeaderCloseIcon source={require('../img/xicon2.png')} />
                </InfoHeader>
                <InfoMainImg source={require('../img/logo.png')}/>

            </InfoTopLayout>
            <InfoBottomLayout>
                <InfoQuestionBox>
                    <InfoQuestionTxt>치매노인수첩 [ D- card ] 이란? 무엇인가요?</InfoQuestionTxt>
                </InfoQuestionBox>
                <InfoAnswerBox>
                    <InfoAnswerTxt>치매노인수첩 [ D- card ]이란? 소지자에 대한 정보와
                    소지자에 보호 연락처 및 긴급 연락처, 
                    건강에 대한 정보
                    등이 기록된 곳입니다.
                    </InfoAnswerTxt>
                </InfoAnswerBox>

                <InfoPagingLayout>
                    <InfoPagingCircle />
                    <InfoPagingCircle />
                    <InfoPagingCircle />
                    <InfoPagingCircle />
                </InfoPagingLayout>

            </InfoBottomLayout>

        </Whole>
    );
}

export default AppInfoPage;