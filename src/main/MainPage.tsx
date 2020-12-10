/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';
import Test from '../Test';

import Header from '../base/Header'
import SelfInstructionLayout from '../base/SelfInstructionLayout';
import MainPhotoLayout from '../main/MainPhotoLayout';
import {getDeviceWidth, getDeviceHeight} from '../base/Tool';
import {useInstructionDataContext} from '../base/context';
// import {View} from 'react-native';

const Whole = styled.View`

    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeight()}px;
    
    flex-grow:1;
    padding: 4% 4%;
    justify-content: center;

    /* border: red; */
    /* justify-content: center; */
    /* margin-bottom: 5%; */
`;

// <View style={{position:'absolute'}}>
const MainPage = ()=> {

  const instructionDataContext = useInstructionDataContext();
  return (
    <>
    
        <Header text="치매노인수첩 [ D-Card ]" /> 
        <Whole>
            <SelfInstructionLayout {...instructionDataContext} />
            <MainPhotoLayout/>
        </Whole>

  </>
  );
};


export default MainPage;
