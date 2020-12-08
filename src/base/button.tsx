import React from 'react';
import styled from 'styled-components/native';

const Whole = styled.View`
    width: 100px;
    height: 40px;

    justify-content:center;
    align-items:center;

    background: #8EB9E1;
    border-radius: 3px;    
`;

const BtnText = styled.Text`
    font-weight: bold;
    font-size: 12px;

    color: #222222;
`;

interface Props{
    text:string;
};

function Button({text}:Props){

    return(
        <Whole>
            <BtnText>{text}</BtnText>
        </Whole>
    );
}

export default Button;