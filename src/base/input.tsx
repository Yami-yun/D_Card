// import React from 'react';
import styled from 'styled-components/native';
import {heightCal} from '../base/Tool';

// input component
//ok
const InputBox = styled.View`
    margin-top: ${heightCal(19)}px;
`;

const InputList = styled.View`
    flex-direction: row;
    justify-content:space-between;
`;

// -, 년, 월, 일
const InputSideTxt = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #9D9A9A;
`;

const NumInput = styled.TextInput.attrs({
    keyboardType:"number-pad",
    
})`
    width: 28%;
    padding-left: 6%;

    border: 1px #9D9A9A;
    border-radius: 5px;

    line-height: 16px;
    color: rgba(34, 34, 34, 0.5);
`;

// base input
const Input = styled.TextInput`
    padding-left: 6%;

    border: 1px #9D9A9A;
    border-radius: 5px;

    line-height: 16px;
    color: rgba(34, 34, 34, 0.5);
`;

// base big size input
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

export {InputBox, InputList, InputSideTxt, Input, BigInput, InputLabel, NumInput};