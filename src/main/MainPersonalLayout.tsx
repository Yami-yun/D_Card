import React from "react";
import styled from "styled-components/native";
import {StyleSheet, Image, View} from "react-native";


const Whole = styled.View`
    height: 51%;
    display:flex;
    align-items:center;
    border: 1px;
`;

const MainPersonalImg = styled.Image`
    position:absolute;
    left: 111px;
    top: 34px;
    width: 141px;
    height: 141px;
    /* elevation: 7; */
`;

const MainPersonalDescriptionBox = styled.View`
    width: 315px;
    height: 196px;
    margin-top: 96px;
    background: #FFFFFF;
    border: 1px rgba(196, 196, 196, 0.8);
    padding-top: 89px;
    padding-left: 24px;
    /* box-sizing: border-box; */
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    /* elevation: 6; */

    border-radius: 5px;
`;

const MainPersonalDescriptionTxt = styled.Text`
    width: 265px;

    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 26px;
    

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
    guardianCall?:string;
    homeAddress?:string;
};



function MainPersonalLayout({imgRoute, name, guardianCall, homeAddress}:Props){
    console.log("test",imgRoute);


    return(
        <Whole>
            
            <View style={styles.MainPersonalDescriptionBox}>
                {/* <MainPersonalDescriptionBox> */}
                <MainPersonalDescriptionTxt>이름 : {name}</MainPersonalDescriptionTxt>
                <MainPersonalDescriptionTxt>보호자 연락처 : {guardianCall}</MainPersonalDescriptionTxt>
                <MainPersonalDescriptionTxt>집 주소 : {homeAddress}</MainPersonalDescriptionTxt>
                {/* </MainPersonalDescriptionBox> */}
            </View>

            <Image resizeMode="contain" source={imgRoute===undefined ? require('../img/defaultPersonalImg.png') : imgRoute} style={styles.MainPersonalImg}/>

            {/* <MainPersonalImg source={imgRoute===undefined ? require('../img/defaultPersonalImg.png') : imgRoute}/> */}
            <PencilIcon source={require('../img/pencilIcon.png')}/>
        </Whole>
    );
}


const styles = StyleSheet.create({

    MainPersonalImg:{
        position: 'absolute',
        left: 111,
        top: 34,
        width: 141,
        height: 141,
        elevation: 7,

    },
    MainPersonalDescriptionBox: {
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

  });

export default MainPersonalLayout;