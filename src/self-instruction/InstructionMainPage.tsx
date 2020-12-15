
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {BackHandler} from 'react-native';

import Header from '../base/Header'
import SelfInstructionLayout from '../base/SelfInstructionLayout';
import InstructionDetail from './InstructionDetail';
import {getDeviceWidth, getDeviceHeight} from '../base/Tool';
import {useInstructionDataContext, useSetScreenDisplayStateContext} from '../base/context';


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

    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    useEffect(() => {
        const backAction = () => {
            setScreenDisplayStateContext({screen:"MAIN",stage:0});
            return true;
        };
        
        const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction);
        return () => backHandler.remove();
    }, []);

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
