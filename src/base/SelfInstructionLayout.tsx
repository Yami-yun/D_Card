import React from "react";
import styled from "styled-components/native";
import {StyleSheet, Image, View} from "react-native";
import {widtCal, heightCal} from '../base/Tool';


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

const PencilIcon = styled.Image`
    position : absolute;
    right : 1px;
    top: 40px;
    width: 45px;
    height: 45px;
`;

const ImageBox = styled.Image`
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
    birthday?:string;
    guardianCall?:string;
    myCall?:string;
    homeAddress?:string;
    page: "instruction" | "main";
};

function SelfInstructionLayout({imgRoute, name, birthday, guardianCall, myCall, homeAddress, page}:Props){

    return(
        <Whole page={page}>
            
            <DescriptionBox style={styles.SelfInstructionDescriptionBoxMain}>

                <DescriptionTxt>이름 : {name}</DescriptionTxt>
                {birthday && <DescriptionTxt>생일 : {birthday}</DescriptionTxt>}
                <DescriptionTxt>보호자 연락처 : {guardianCall}</DescriptionTxt>
                {myCall && <DescriptionTxt>연락처 : {myCall}</DescriptionTxt>}
                <DescriptionTxt>집 주소 : {homeAddress}</DescriptionTxt>
                
            </DescriptionBox>

            <ImageBox resizeMode="contain" source={imgRoute===undefined ? require('../img/defaultPersonalImg.png') : imgRoute} style={styles.SelfInstructionImg}/>

            <PencilIcon source={require('../img/pencilIcon.png')}/>
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