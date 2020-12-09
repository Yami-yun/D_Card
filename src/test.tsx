
import React, { useRef, useState } from "react";
import styled from "styled-components/native";

import { StyleSheet, DrawerLayoutAndroid, View, Button, TouchableHighlight, Text  } from 'react-native';
// 기능 : 메뉴 클릭 시, 좌단에 메뉴바 생성


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

const CloseBtnBox = styled.TouchableHighlight`
    position: absolute;
    top:21px;
    right:12px;
    width: 38px;
    height: 38px;
`;

const CloseBtn = styled.Image`
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

//App 최상단 제목 요소
const Whole = styled.View`
    width: 100%;
    /* height: 8%; */
    height: 50px;
    background: #164580;
    display: flex;
    justify-content : center;
    align-items : center;
    

    
`;

const HeaderTxt = styled.Text`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
`;

const MenuIconBox = styled.TouchableHighlight`
    /* position:absolute;
    width: 37px;
    height: 37px;
    
    top: 14%;
    left: 6%; */
    /* top: 14px; */
    /* left: 14px; */
`;

const MenuIcon = styled.Image`

`;

interface Props{
 text: string;
};

function Test({text}:Props){

  const drawer = useRef(null);

  const navigationView = () => (
      <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph} >I'm in the Drawer!</Text>
      <Button
          title="Close drawer"
          onPress={() => drawer.current.closeDrawer()}
      />
      </View>
  );

  const isOpen = () => {
      // setMenuStateContext(true);
      console.log(document.getElementById("menu"));
  };
  
  function SideMenu(){
      

    return(
      // onPress={isClose}
    <View style={styles.menu}>
        <TopLayout id="menu">
                
                <AppNameTxt>치매노인수첩 [ D-Card ]</AppNameTxt>
                <CloseBtnBox >
                    <CloseBtn source={require("./img/xicon2.png")} />
                </CloseBtnBox>
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
    </View>

    );
  }


    

    // ()=> drawer.current.openDrawer()
    return(

     <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={SideMenu}

    >
        <Whole>
            <TouchableHighlight style={styles.test} onPress={()=> drawer.current.openDrawer() }>
                <MenuIcon source={require("./img/menuIcon.png")}/>
            </TouchableHighlight>
            <HeaderTxt>
                {text}
            </HeaderTxt>
            
        </Whole>
        </DrawerLayoutAndroid>   

    );
}

const styles = StyleSheet.create({


    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 16
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    },

    test:{
    position:'absolute',
    width: 37,
    height: 37,
    
    top: '14%',
    left: '6%', 
    },

    menu:{
      position:'absolute',
      left: 0,
      top:0,
      /* width: 55.55%; */
      width:'55.5%',
      height: '100%',
       
       backgroundColor: '#8EB9E1',
    }

  });

export default Test;

