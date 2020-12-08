/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';

import Header from '../base/Header'
import SelfInstructionLayout from '../base/SelfInstructionLayout';
import MainPhotoLayout from '../main/MainPhotoLayout';
import {getDeviceWidth, getDeviceHeight} from '../base/Tool';

const Whole = styled.View`
    
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeight()}px;
    
    flex-grow:1;
    padding: 4% 4%;
    justify-content: center;

    border: red;
    /* justify-content: center; */
    /* margin-bottom: 5%; */
`;

interface Props{

};

const MainPage = ({}:Props)=> {

  
  return (
    <>
        <Header text="치매노인수첩 [ D-Card ]"/> 
        <Whole>
            <SelfInstructionLayout homeAddress="광주광역시 남구 봉선동 라인하이츠 
                    아파트  109동 110호" page="main"/>
            <MainPhotoLayout/>
        </Whole>
    </>

  );
};


export default MainPage;
