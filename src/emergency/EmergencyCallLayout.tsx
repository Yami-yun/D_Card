import React from 'react';
import styled from 'styled-components/native';
import MainFunctionLayout from '../base/MainFunctionLayout';
import TitleLayout from '../base/TitleLayout';
import {Linking} from 'react-native';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { StyleSheet } from 'react-native';

// Emergency Call & Description Box Layout
const Whole = styled.View``;

const EmergencyCallBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    height: 55px;
    background: #FFFFFF;
    border: 1px solid rgba(244, 239, 239, 0.5);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
`;

const EmergencyCallContentBox = styled.View`
    height: 100%;
    padding-left: 7.5%;
    padding-right: 4.5%;

    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
const EmergencyCallNum = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #555555;
`;

const EmergencyDescriptionBox = styled.Text`
    padding-top: 6.5%;
    padding-left: 7%;
    padding-right: 12%;

    border: 1px solid #9D9A9A;
    border-radius: 3px;
`;

const EmergencyCallDescription = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color:${props=>props.data === "true" ? 'rgba(34, 34, 34, 0.5)' : '#000000'};
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

interface Props{
    defaults?: string;
    title?:string;
    call?:{
        numFront:"",
        numMiddle:"",
        numBack:"",
    };
    importance?:string;
    description?:string;
    id?:string;
};

function EmergencyCallLayout({defaults, title, call, importance, description, id}:Props){
    const color = {
        0:"#ED3B3B",
        1:"#FE8C49",
        2:"#AAD462",
    };

    let fullCall = '';
    if(call !== undefined){
        fullCall = 'tel:' + call.numFront + call.numMiddle + call.numBack;
    }
    
    return(
        <>
        <Whole>
            <TitleLayout title={title} color={color[importance]} screen="EMERGENCY_CALL_MAIN" id={id} emergencyData={{title, call, importance, description, id}}/>
            <MainFunctionLayout>
                <EmergencyCallBox onPress={()=>{ if(call != undefined){Linking.openURL(fullCall); }}} style={[styles.CallBoxShadow, {flexGrow:1}]}>
                    <EmergencyCallContentBox>
                        {call ? <EmergencyCallNum> {call.numFront + " - " + call.numMiddle + " - " + call.numBack} </EmergencyCallNum>
                        : <EmergencyCallNum> {"연락처를 추가해주세요."} </EmergencyCallNum>}
                        <IconBox>
                            <FontAwesomeIcon icon={faPhoneAlt} size={22} color={"#FF6044"} />                    
                        </IconBox>
                    </EmergencyCallContentBox>
                </EmergencyCallBox>
                <EmergencyDescriptionBox style={{flexGrow:4}}>
                    <EmergencyCallDescription data={defaults}>
                        {description}
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