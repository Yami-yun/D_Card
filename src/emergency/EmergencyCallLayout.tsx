import React from 'react';
import styled from 'styled-components/native';

import MainFunctionLayout from '../base/MainFunctionLayout';
import TitleLayout from '../base/titleLayout';

import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { StyleSheet } from 'react-native';


const Whole = styled.View`
    /* padding: 0 22px; */
`;



const EmergencyCallBox = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    padding-left: 29px;
    padding-right: 17px;

    background: #FFFFFF;
    border: 1px solid rgba(244, 239, 239, 0.5);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    
`;
const EmergencyCallNum = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;

    color: #555555;
`;

const EmergencyDescriptionBox = styled.Text`
    /* border: 1px; */
    padding-top: 23px;
    padding-left: 27px;
    padding-right: 54px;
`;

const EmergencyCallDescription = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #000000;
`;

const IconBox = styled.View`
    width: 39px;
    height: 39px;
    
    justify-content:center;
    align-items:center;
    background: #FFFFFF;
    border: 2.5px solid #FF6044;
    border-radius: 26px;
`;

function EmergencyCallLayout(){
    
    return(
        <>
        <Whole>
            <TitleLayout title="1.  저희  어머니가 자주가는 가게 연락처 입니다."/>
            <MainFunctionLayout>
                <EmergencyCallBox style={[styles.CallBoxShadow, {flexGrow:1}]}>
                    <EmergencyCallNum>062 - 550 - 3838 </EmergencyCallNum>
                    <IconBox>
                        <FontAwesomeIcon icon={faPhoneAlt} size={22} color={'#FF6044'} />                    
                    </IconBox>
                </EmergencyCallBox>
                <EmergencyDescriptionBox style={{flexGrow:3.5}}>
                    <EmergencyCallDescription>
                        광주광역시 남구 봉선동 00 가게 연락처 입니다.
                    </EmergencyCallDescription>
                </EmergencyDescriptionBox>
            </MainFunctionLayout>
        </Whole>
        </>
    );
}


const styles = StyleSheet.create({

    CallBoxShadow:{
        elevation: 6,
    },

  });

export default EmergencyCallLayout;