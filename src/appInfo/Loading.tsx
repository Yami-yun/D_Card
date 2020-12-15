import React from 'react'
import styled from 'styled-components/native';

const Whole = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items:center;
`;

const LoadingImgBox = styled.View`
    width: 100%;
    height: 80%;
    border : 1px;
`;

const LoadingImg = styled.Image`
    width: 142px;
    height: 154.65px;
`;

const LogoTxt = styled.Text`
    position: absolute;
    bottom: 35px;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    /* border : 1px; */

    color: #164580;
`;



function Loading(){

    return(
        <Whole>

            <LoadingImg source={require("../img/first.png")}/>

            <LogoTxt>
            copyright smunal © all rights reserved
            </LogoTxt>
        
        </Whole>
    );
}

export default Loading;