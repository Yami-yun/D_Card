
import React from 'react';
import styled from 'styled-components/native';


import Header from '../base/Header'
import SelfInstructionLayout from '../base/SelfInstructionLayout';
import InstructionDetail from './InstructionDetail';
import {getDeviceWidth, getDeviceHeight} from '../base/Tool';
import {useInstructionDataContext} from '../base/context';

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
  const instructionDataContext = useInstructionDataContext();

  return (
    <>
        <Header text="자기소개"/> 
        <Whole>
            <SelfInstructionLayout {...instructionDataContext} />
            <InstructionDetail {...instructionDataContext}/>
        </Whole>
    </>

  );
};


export default InstructionMainPage;
