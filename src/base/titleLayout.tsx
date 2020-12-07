import React from 'react';
import styled from 'styled-components/native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Whole = styled.View`
`;

const TitleLayout = styled.View`

    height: 48px;
    /* height: 100%; */
    background: ${props=>(props.color)};
    border: 1px;
    border-radius: 5px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

`;

const TitleTxt = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;

    color: #FFFFFF;
`;



interface Props{
    title: string;
    color: string;
};

function titleLayout({title, color}:Props){

    return(
        <Whole>
            <TitleLayout color={color}>
                <TitleTxt>{title}</TitleTxt>
                <FontAwesomeIcon icon={faChevronLeft} size={22} color={'#ffffff'} />
            </TitleLayout>
            
        </Whole>
    );
}

export default titleLayout;