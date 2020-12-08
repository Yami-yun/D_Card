// import React from 'react';
import styled from 'styled-components/native';
import {heightCal} from '../base/Tool';

const InputBox = styled.View`
    margin-top: ${heightCal(19)}px;
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
    padding-left: 6%;

    border: 1px #9D9A9A;
    border-radius: 5px;
`;

const BigInput = styled.TextInput`
    padding-left: 6%;

    border: 1px #9D9A9A;
    border-radius: 5px;
`;


const InputLabel = styled.Text`
    margin-left: 5px;
    margin-bottom: 7px;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #222222;
`;


export {InputBox, InputList, InputSideTxt, Input, BigInput, InputLabel};