import { stringify } from 'querystring';
import React from "react";
import { Interface } from 'readline';
import styled from "styled-components/native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Whole = styled.View`
    width: 100%;
    height: 8%;
    background: #164580;
    display: flex;
    justify-content : center;
    align-items : center;

    
`;

// position 기기 마다 다를 수 있으므로 확인
const MenuIcon = styled.View`
    position:absolute;
    width: 37px;
    height: 37px;

    top: 8px;
    left: 20px;

    display: flex;
    justify-content : center;
    align-items : center;

    /* border : 1px solid */
    background: #ffffff;

    font-size: 22px;
    color: #164580;
`;

const HeaderTxt = styled.Text`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
`;

interface Props{
 text: string;
};

function Header({text}:Props){


    return(
    <Whole>
        <MenuIcon>
            <FontAwesomeIcon icon={faBars} size={28}/>
        </MenuIcon>
        <HeaderTxt>
            {text}
        </HeaderTxt>
        
    </Whole>
    );
}


export default Header;