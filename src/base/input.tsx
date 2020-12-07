// import React from 'react';
import styled from 'styled-components/native';



const InputBox = styled.View`
    margin-top: 19px;
    
`;

const InputList = styled.View`
    flex-direction: row;
    justify-content:space-between;
    
`;

const InputSideTxt = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: #9D9A9A;
`;

const Input = styled.TextInput`
    border: 1px #9D9A9A;
    border-radius: 5px;

`;


const InputLabel = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: #222222;

    margin-left: 5px;
    margin-bottom: 5px;
`;


export {InputBox, InputList, InputSideTxt, Input, InputLabel};