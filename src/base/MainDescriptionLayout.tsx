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
    title?: string;
    src?: any;
};

function MainDescriptionLayout({src}:Props){

    return(
        <Whole>
            <DescriptionTxt>
                {src.description}
            </DescriptionTxt>

        </Whole>
    );
}

export default MainDescriptionLayout;