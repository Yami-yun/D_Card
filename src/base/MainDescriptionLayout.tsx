import React from 'react';
import styled from 'styled-components/native';
import {heightCal} from '../base/Tool';

// Write Photo desciption component, Ok

const Whole = styled.View`
    height: ${heightCal(197)}px;
    border: 1px solid #9D9A9A;
    border-radius: 5px;
    padding: 30px 21px;
    margin-bottom:11px;
`;

const DescriptionTxt = styled.Text`
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.5);
`;

interface Props{
    type: string;
    src: any;
};

function MainDescriptionLayout({type, src}:Props){
    // No input data from user > default text show screen 
    const text = type === "PHOTO_MAIN" ? "사진에 대한 이야기를 적어주세요." : "진단명:\n복용약:\n혈액형:";
    return(
        <Whole>
            <DescriptionTxt>
                {src.description === undefined ? text : src.description}
            </DescriptionTxt>
        </Whole>
    );
}

export default MainDescriptionLayout;