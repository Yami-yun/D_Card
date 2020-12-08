import React from 'react';
import styled from 'styled-components/native';

const Whole = styled.View`
     position:absolute;
     width: 55.55%;
     height: 100%;
     background: #8EB9E1;
`;

const TopLayout = styled.View`
    height: 80px;
    padding-top: 22px;
    padding-left: 12px;
`;

const TopTextLayout = styled.View`
    margin-top : 5px;
    display:flex;
    flex-direction: row;
`;

const AppNameTxt = styled.Text`
    font-weight: bold;
    font-size: 12px;
    color: #222222;
`;

const EnrollTxt = styled.Text`
    font-weight: 100;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
`;

const CloseBtn = styled.Image`
    position: absolute;
    top:21px;
    right:12px;
    width: 38px;
    height: 38px;
`;

const MenuItemLayout = styled.View`
    height: 60px;
    padding-left: 13px;
    padding-right: 22px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom-width: 3px;
    border-bottom-color: #335C90;
`;

const MenuItemTxt = styled.Text`
    font-weight: normal;
    font-size: 12px;
    color: #000000;
`;

const MoveIcon = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const CopyrightBox = styled.View`
    width: 100%;
    height: 100%;
    padding-bottom: 17px;

    justify-content: center;
    align-items: center;
`;

const CopyrightTxt = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
`;

function SideMenu(){

    return(
        <Whole>
            <TopLayout>
                
                <AppNameTxt>치매노인수첩 [ D-Card ]</AppNameTxt>
                <CloseBtn source={require("./img/xicon2.png")}/>
                
                <TopTextLayout>
                    <EnrollTxt>로그인</EnrollTxt>
                    <EnrollTxt>  |  </EnrollTxt>
                    <EnrollTxt>회원가입</EnrollTxt>
                </TopTextLayout>
                
            </TopLayout>
            <MenuItemLayout style={{borderTopWidth: 3, borderTopColor: '#335C90'}}>
                <MenuItemTxt>치매노인수첩 [ D- Card ]란?</MenuItemTxt>
                <MoveIcon>›</MoveIcon>
            </MenuItemLayout>
            <MenuItemLayout>
                <MenuItemTxt>자기소개</MenuItemTxt>
                <MoveIcon>›</MoveIcon>
            </MenuItemLayout>
            <MenuItemLayout>
                <MenuItemTxt>사진첩</MenuItemTxt>
                <MoveIcon>›</MoveIcon>
            </MenuItemLayout>
            <MenuItemLayout>
                <MenuItemTxt>긴급연락처</MenuItemTxt>
                <MoveIcon>›</MoveIcon>
            </MenuItemLayout>
            <MenuItemLayout>
                <MenuItemTxt>건강정보</MenuItemTxt>
                <MoveIcon>›</MoveIcon>
            </MenuItemLayout>
            <CopyrightBox>
                <CopyrightTxt>copyright © all rights reserved</CopyrightTxt>
            </CopyrightBox>

            
        </Whole>
    

    );
}


export default SideMenu;