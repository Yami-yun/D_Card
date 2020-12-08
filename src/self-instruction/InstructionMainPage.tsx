
import React from 'react';
import styled from 'styled-components/native';

import Header from '../base/Header'
import SelfInstructionLayout from '../base/SelfInstructionLayout';
import InstructionDetail from './InstructionDetail';
import {getDeviceWidth, getDeviceHeight} from '../base/Tool';

const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeight()}px;
    
    flex-grow:1;
    padding: 4% 4% ;
    justify-content: center;
    

`;

interface Props{

};

const InstructionMainPage = ({}:Props)=> {
  return (
    <>
        <Header text="자기소개"/> 
        <Whole>
            <SelfInstructionLayout homeAddress="광주광역시 남구 봉선동 라인하이츠 
                    아파트  109동 110호" page="instruction"/>
            <InstructionDetail/>
        </Whole>
    </>

  );
};


export default InstructionMainPage;
