import React from "react";
import styled from "styled-components/native";
import {StyleSheet, Image, View} from "react-native";
import {widthCal, heightCal} from '../base/Tool';


const Whole = styled.View`
    /* height: 45%; */
    height: ${heightCal(310)}%;
    display:flex;
    align-items:center;
    border: 1px;
    /* margin-bottom: 33px; */
    margin-bottom: ${(props: { page: string; }) => props.page === "instruction" ? 60 : 33}px;
`;

const SelfInstructionDescriptionTxt = styled.Text`
    width: ${widthCal(290)}%;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 26px;
    /* border: 1px; */

    color: #333333;
`;

const PencilIcon = styled.Image`
    
    width: 40px;
    height: 40px;
    position : absolute;
    left : 290px;
    top: 40px;
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
    console.log("test",imgRoute);


    return(
        <Whole page={page}>
            
            <View style={[styles.SelfInstructionDescriptionBox, page === "main" && styles.SelfInstructionDescriptionBoxMain]} >
                {/* <MainPersonalDescriptionBox> */}
                <SelfInstructionDescriptionTxt>이름 : {name}</SelfInstructionDescriptionTxt>
                {birthday && <SelfInstructionDescriptionTxt>생일 : {birthday}</SelfInstructionDescriptionTxt>}
                <SelfInstructionDescriptionTxt>보호자 연락처 : {guardianCall}</SelfInstructionDescriptionTxt>
                {myCall && <SelfInstructionDescriptionTxt>연락처 : {myCall}</SelfInstructionDescriptionTxt>}
                <SelfInstructionDescriptionTxt>집 주소 : {homeAddress}</SelfInstructionDescriptionTxt>
                {/* </MainPersonalDescriptionBox> */}
            </View>

            <Image resizeMode="contain" source={imgRoute===undefined ? require('../img/defaultPersonalImg.png') : imgRoute} style={styles.SelfInstructionImg}/>

            {/* <MainPersonalImg source={imgRoute===undefined ? require('../img/defaultPersonalImg.png') : imgRoute}/> */}
            <PencilIcon source={require('../img/pencilIcon.png')}/>
        </Whole>
    );
}
//141

const styles = StyleSheet.create({

    SelfInstructionImg:{
        position: 'absolute',
        left: 109,
        top: 34,
        // width: widthCal(991),
        // height: heightCal(991),
        width: 141,
        height: 141,
        elevation: 7,

    },
    SelfInstructionDescriptionBoxMain: {
        width: 315,
        height: 196,
        marginTop: 96,
        backgroundColor: "#ffffff",
        borderColor: "rgba(196, 196, 196, 0.8)",
        borderWidth: 1,
        paddingTop: 74,
        paddingLeft: 24,
        // shadowColor: 'rgba(0, 0, 0, 0.25)',
        elevation: 5,

        
    },
    
    SelfInstructionDescriptionBox: {
        width: 315,
        height: 240,
        marginTop: 96,
        backgroundColor: "#ffffff",
        borderColor: "rgba(196, 196, 196, 0.8)",
        borderWidth: 1,
        paddingTop: 74,
        paddingLeft: 24,
        // shadowColor: 'rgba(0, 0, 0, 0.25)',
        elevation: 5,

        
    },

  });

export default SelfInstructionLayout;