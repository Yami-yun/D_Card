/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {Alert, ToastAndroid ,BackHandler} from 'react-native';
import styled from 'styled-components/native';
import Test from '../Test';

import Header from '../base/Header'
import SelfInstructionLayout from '../base/SelfInstructionLayout';
import MainPhotoLayout from '../main/MainPhotoLayout';
import {getDeviceWidth, getDeviceHeight} from '../base/Tool';
import {useInstructionDataContext, ChekIsEmptyData} from '../base/context';
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
  let endCount = 0;
  let RNFS = require('react-native-fs');

  // console.log(RNFS);
  // RNFS.readDir(RNFS.ExternalCachesDirectoryPath) 
  // .then((result) => {
  //   console.log('GOT RESULT', result);

  //   // stat the first file
  //   return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  // })
  // .then((statResult) => {
  //   if (statResult[0].isFile()) {
  //     // if we have a file, read it
  //     console.log('Read it :');
  //     console.log(statResult);
  //     return RNFS.readFile(statResult[1], 'utf8');
  //   }

  //   return 'no file';
  // })
  // .catch((err) => {
  //   console.log(err.message, err.code);
  // });

  // writeFile(filepath: string, contents: string, encoding?: string)
  // let rpath = RNFS.ExternalDirectoryPath + '/test.txt';
  RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  .then((result) => {
    // console.log('GOT RESULT', result);

    // stat the first file
    return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  })
  .then((statResult) => {
    console.log('GOT RESULT');
    console.log(statResult);
    if (statResult[0].isFile()) {
      // if we have a file, read it
      return RNFS.readFile(statResult[1], 'utf8');
    }

    return 'no file';
  })
  .then((contents) => {
    // log the file contents
    console.log(contents);
  })


// RNFS.copyFile('/storage/emulated/0/Android/data/com.d_card/files/0_rn_image_picker_lib_temp_689d1da4-d3a1-42d8-abe5-781d260c1191.jpg', `${RNFS.DocumentDirectoryPath}/img.png`)
//     .then(res => {
//         console.log(`[S] : context.tsx, [F] : ImgProcss, [T] : ADD, [D] : IMG_WRITE_COMPLETE,`);
//     })
//     .catch(err => {
//         console.log(`[S] : context.tsx, [F] : ImgProcss, [T] : ADD, [D] : IMG_WRITE_ERROR`);
        
//     });

  // .catch((err) => {
  //   console.log(err.message, err.code);
  // });

  
  useEffect(() => {

    const backAction = () => {
      let timeout;
      if(endCount === 0){
        ToastAndroid.show('한번 더 누르시면 종료됩니다.',ToastAndroid.SHORT);
        endCount += 1;
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
