import React from 'react';
import styled from 'styled-components/native';

const Whole = styled.View``;

// Main(Medicine photo, self Photo, Emergency call) Layout
const TitleBox = styled.View`
    height: 50px;
    padding: 0 20px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    background: ${props=>(props.color)};
    border: 1px;
    border-radius: 5px;
`;

const TitleTxt = styled.Text`
    font-weight: bold;
    font-size: 12px;
    color: #FFFFFF;
`;

const LeftBtn = styled.Image``;

interface Props{
    title: string;
    color: string;
};

function TitleLayout({title, color}:Props){

    return(
        <Whole>
            <TitleBox color={color}>
                <TitleTxt>{title}</TitleTxt>
                <LeftBtn source={require('../img/leftBtn.png')}/>
                
            </TitleBox>        
        </Whole>
    );
}

export default TitleLayout;