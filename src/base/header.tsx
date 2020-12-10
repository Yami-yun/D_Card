import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import SideMenu from '../SideMenu';

import { useMenuStateContext, useSetMenuStateContext} from "./context";
import { StyleSheet, Button } from 'react-native';
// 기능 : 메뉴 클릭 시, 좌단에 메뉴바 생성

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
    position:absolute;
    width: 37px;
    height: 37px;
    
    top: 14%;
    left: 6%;
    /* top: 14px; */
    /* left: 14px; */
`;

const MenuIcon = styled.Image`

`;

interface Props{
 text: string;
};

function Header({text }:Props){

    const setMenuStateContext = useSetMenuStateContext();
    const menuStateContext = useMenuStateContext();

    
    const isOpen = () => {
        
        setMenuStateContext(true);
    };
    
    

    return(
    <>

        <Whole>
            <MenuIconBox onPress={isOpen} >
                <MenuIcon source={require("../img/menuIcon.png")}/>
            </MenuIconBox>
            <HeaderTxt>
                {text}
            </HeaderTxt>
            
        </Whole>
    </>
    );
}

const styles = StyleSheet.create({

    test2:{
        elevation: 13,
    },

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
    }
  });

export default Header;