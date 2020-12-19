import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { heightCal } from '../base/Tool';
import { useSetScreenDisplayStateContext} from "../base/context";

// main, instruction page show data layout, ok
const Whole = styled.View`
    align-items: center;
`;

const DescriptionBox = styled.View`
    width: 100%;
    height: ${heightCal(240)}px;
    margin-top: ${heightCal(96)}px;
    padding-top: ${heightCal(74)}px;
    padding-left: 24px;

    background: #ffffff;
    border: 1px rgba(196, 196, 196, 0.8);
`;

const DescriptionTxt = styled.Text`
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

const PencilIcon = styled.Image``;

const ImageView = styled.Image`
    width: 150px;
    height: 150px;

    border-radius: 75px;
`;

const ImageBox = styled.View`
    position: absolute;
    top: ${heightCal(36)}px;
    width: 134px;
    height: 134px;

    align-items:center;
    justify-content: center;
    
    border-radius: 67px;
`;

interface Props{
    name?:string;
    birth?:any;
    guardCall?:any;
    myCall?:any;
    address?:string;
    uri?:string;
    id?:any;
};

// process birth data and show instruction page
const SetBirth = (birth:any) =>{
    if(birth.y !== "" && birth.m !== "" && birth.d !== ""){
        return birth.y + "." + birth.m + "." + birth.d;
    }
    return "";
}

// process call data and show instruction page
const SetCall = (call:any) =>{
    if(call.numFront !== "" && call.numMiddle !== "" && call.numBack !== ""){
        return call.numFront + " - " + call.numMiddle + " - " + call.numBack;
    }
    return "";
};

function SelfInstructionLayout({id, name, birth, guardCall, myCall, address, uri}:Props){
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

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
                <ImageView 
                style={{width:140, height:140}}
                source={uri ==="" ? require('../img/defaultPersonalImg.png') : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${id}_${uri}`} } />
            </ImageBox>

            <IconBox onPress={ ()=>{setScreenDisplayStateContext({screen:"INSTRUCTION_MODIFY", stage:2})} }  >
                <PencilIcon source={require('../img/pencilIcon.png')}/>
            </IconBox>
        </Whole>
    );
}

const styles = StyleSheet.create({
    SelfInstructionImg:{
        elevation: 3,
    },

    SelfInstructionDescriptionBoxMain: {
        elevation: 2,    
    },
});

export default SelfInstructionLayout;