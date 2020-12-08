import React from 'react';
import styled from 'styled-components/native';
import {widthCal, heightCal, getDeviceWidth, getDeviceHeight} from '../base/Tool';

const Whole = styled.View`

    height: ${heightCal(197)}px;
    border: 1px solid #9D9A9A;
    border-radius: 5px;
    padding: 30px 21px;
    margin-bottom:11px;
`;


const DescriptionTxt = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: rgba(0, 0, 0, 0.5);

`;



interface Props{
    children?: JSX.Element | Array<JSX.Element>;
    title?: string;
};

function MainDescriptionLayout({children, title}:Props){

    return(
        <Whole>
            <DescriptionTxt>
            사진에 대한 내용이 들어갑니다.
사진에 대한 내용이 들어갑니다.
사진에 대한 내용이 들어갑니다.
사진에 대한 내용이 들어갑니다.
사진에 대한 내용이 들어갑니다.
사진에 대한 내용이 들어갑니다.
사진에 대한 내용이 들어갑니다.
사진에 대한 내용이 들어갑니다.
            </DescriptionTxt>

        </Whole>
    );
}

export default MainDescriptionLayout;