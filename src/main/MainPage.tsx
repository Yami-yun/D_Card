
import React, {useEffect} from 'react';
import { ToastAndroid ,BackHandler} from 'react-native';
import styled from 'styled-components/native';

import Header from '../base/Header'
import SelfInstructionLayout from '../base/SelfInstructionLayout';
import MainPhotoLayout from '../main/MainPhotoLayout';
import {getDeviceWidth, getDeviceHeight} from '../base/Tool';
import {
  useInstructionDataContext, 
} from '../base/context';

const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeight()}px;
    padding: 4% 4%;
    
    flex-grow:1;
    justify-content: center;
`;

const MainPage = ()=> {
  let endCount = 0;

  useEffect(() => {
    // check user back key twice.
      const backAction = () => {
      let timeout;

      if(endCount === 0){
        ToastAndroid.show('한번 더 누르시면 종료됩니다.',ToastAndroid.SHORT);
        endCount += 1;
        // 2초 안에 안누르면 초기화
        timeout = setTimeout(()=>{
        endCount = 0;
        }, 2000);
      }
      else {
        clearTimeout(timeout);
        BackHandler.exitApp();
      }
      return true;
  };

    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );
    return () => backHandler.remove();
}, []);

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
