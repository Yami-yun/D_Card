import React from "react";
import styled from "styled-components/native";
import {StyleSheet, Image, View} from "react-native";
import {heightCal} from '../base/Tool';
import { useSetMenuStateContext, useSetScreenDisplayStateContext} from "../base/context";

const Whole = styled.View`

    /* margin-bottom: ${(props: { page: string; }) => props.page === "instruction" ? 30 : 33}px; */
    
    /* border: 1px; */
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

const ImageView = styled.Image``;

const ImageBox = styled.View`
    position: absolute;
    top: ${heightCal(36)}px;

    width: 100%;
    height: ${heightCal(141)}px;

    align-items:center;
    justify-content: center;

    /* border : 1px blue; */
`;

interface Props{
    imgRoute?:string;
    name?:string;
    birth?:string;
    guardCall?:string;
    myCall?:string;
    address?:string;
    
};



function SelfInstructionLayout({imgRoute, name, birth, guardCall, myCall, address}:Props){

    const setMenuStateContext = useSetMenuStateContext();
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    

    const screenChange =(screenName:string) => {

        setScreenDisplayStateContext(screenName);
        
    }

    return(
        <Whole>
            
            <DescriptionBox style={styles.SelfInstructionDescriptionBoxMain}>

                <DescriptionTxt>이름 : {name}</DescriptionTxt>
                { birth !== "" && <DescriptionTxt>생일 : {birth}</DescriptionTxt> }
                <DescriptionTxt>보호자 연락처 : {guardCall}</DescriptionTxt>
                {myCall !== "" && <DescriptionTxt>연락처 : {myCall}</DescriptionTxt>}
                <DescriptionTxt>집 주소 : {address}</DescriptionTxt>
                
            </DescriptionBox>

            <ImageBox style={styles.SelfInstructionImg}>
                <ImageView resizeMode="contain" source={imgRoute===undefined ? require('../img/defaultPersonalImg.png') : imgRoute} />
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