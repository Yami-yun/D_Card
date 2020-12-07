import React from "react";
import styled from "styled-components/native";

// 기능 : 메뉴 클릭 시, 좌단에 메뉴바 생성

//App 최상단 제목 요소
const Whole = styled.View`
    width: 100%;
    height: 8%;
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

const MenuIcon = styled.Image`
    position:absolute;
    width: 37px;
    height: 37px;

    /* top: 14px; */
    /* left: 14px; */
    top: 22%;
    left: 6%;
`;

interface Props{
 text: string;
};

function Header({text}:Props){
    return(
    <Whole>

        <MenuIcon source={require("../img/menuIcon.png")}/>
        <HeaderTxt>
            {text}
        </HeaderTxt>
        
    </Whole>
    );
}


export default Header;