import React from "react";
import styled from "styled-components/native";
import {StyleSheet, Image, View} from "react-native";
import {heightCal} from '../base/Tool';
import { useSetMenuStateContext, useSetScreenDisplayStateContext} from "../base/context";

const Whole = styled.View`

    /* margin-bottom: ${(props: { page: string; }) => props.page === "instruction" ? 30 : 33}px; */
    
    /* border: 1px; */

    align-items: center;
`;

const DescriptionBox = styled.View`
    /* width: 360px; */
    width: 100%;
    height: ${heightCal(240)}px;
    margin-top: ${heightCal(96)}px;
    padding-top: ${heightCal(74)}px;
    padding-left: 24px;

    background: #ffffff;
    border: 1px rgba(196, 196, 196, 0.8);
`;

const DescriptionTxt = styled.Text`
    /* width: 230px; */
    width: 80%;

    font-weight: normal;
    font-size: 12px;
    line-height: 26px;
    color: #333333;
`;

const IconBox = styled.TouchableOpacity`
    position : absolute;
    right : 1px;
    top: 40px;
    width: 45px;
    height: 45px;
`;

const PencilIcon = styled.Image`
    
`;

const ImageView = styled.Image`
    width: 150px;
    height: 150px;

    /* border: 2px solid #164580; */
    border-radius: 256px;
    
    
`;

const ImageBox = styled.View`
    position: absolute;
    top: ${heightCal(36)}px;

    /* width: 100%; */
    /* height: ${heightCal(141)}px; */

    width: 150px;
    height: 150px;


    border-radius: 256px;

    align-items:center;
    justify-content: center;

    

    /* border : 1px blue; */
`;

interface Props{
    name?:string;
    birth?:any;
    guardCall?:any;
    myCall?:any;
    address?:string;
    uri?:string;
};

const SetBirth = (birth:any) =>{
    if(birth.y !== "" && birth.m !== "" && birth.d !== ""){
        return birth.y + "." + birth.m + "." + birth.d;
    }
    return "";
}

const SetCall = (call:any) =>{
    if(call.numFront !== "" && call.numMiddle !== "" && call.numBack !== ""){
        return call.numFront + " - " + call.numMiddle + " - " + call.numBack;
    }
    return "";
    
};

function SelfInstructionLayout({name, birth, guardCall, myCall, address, uri}:Props){

    const setMenuStateContext = useSetMenuStateContext();
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    const screenChange =(screenName:string) => {

        setScreenDisplayStateContext(screenName);
        
    }

    (()=>{

    })();
    let _birth = SetBirth(birth);
    let _guardCall = SetCall(guardCall);
    let _myCall = SetCall(myCall);


    return(
        <Whole>
            
            <DescriptionBox style={styles.SelfInstructionDescriptionBoxMain}>

                <DescriptionTxt>이름 : {name}</DescriptionTxt>
                { (_birth !== "") && <DescriptionTxt>생일 : {_birth}</DescriptionTxt> }
                <DescriptionTxt>보호자 연락처 : {_guardCall}</DescriptionTxt>
                {(_myCall !== "") && <DescriptionTxt>연락처 : {_myCall}</DescriptionTxt>}
                <DescriptionTxt>집 주소 : {address}</DescriptionTxt>
                
            </DescriptionBox>

            <ImageBox style={styles.SelfInstructionImg}>
                <ImageView source={uri ==="" ? require('../img/defaultPersonalImg.png') : {uri} } />
            </ImageBox>

            <IconBox onPress={ ()=>{screenChange("INSTRUCTION_MODIFY")} }  >
                <PencilIcon source={require('../img/pencilIcon.png')}/>
            </IconBox>
        </Whole>
    );
}

const styles = StyleSheet.create({

    SelfInstructionImg:{
       
        elevation: 7,
    },

    SelfInstructionDescriptionBoxMain: {
        elevation: 5,    
    },
  });

export default SelfInstructionLayout;