
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import Button from '../base/button';
import Header from '../base/Header'
import {InputBox, InputList, InputSideTxt, Input, InputLabel, NumInput} from '../base/input';
import {widthCal, heightCal, getDeviceWidth, getDeviceHeight} from '../base/Tool';
import * as ImagePicker from '../imagePicker/index';

import {useInstructionDataContext, ChekIsEmptyData} from '../base/context';
// import { Button, StyleSheet } from "react-native";


/* 카메라 버튼 클릭시 갤러리에서 이미지 받아오기 */

const Whole = styled.ScrollView`
    padding: 0 4%;
`;

const BtnLayout = styled.View`
    /* height: 10%; */
    /* border-bottom-width: 1px; */
    height: ${heightCal(90)}px;
    /* border: 1px blue; */
    
    padding-top: 25px;
    align-items:flex-end;
`;

const ImgLayout = styled.View`
    /* height: 40%; */
    height: 200px;
    /* border : 1px; */
    /* border-bottom-width: 1px; */
    justify-content: center;
    align-items: center;
`;

const PersonalImgBox = styled.View`
    width: 150px;
    height: 150px;
    /* border-radius: 5px; */
    /* border: 1px; */
    margin-bottom: 12px;
`;

const PersonalImg = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 256px;
    border: 2px solid #164580;
`;

const ImgAddIconBox = styled.TouchableOpacity`
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 0px;
    right: 0px;
`;

const ImgAddIcon = styled.Image``;


const ImgAddDescription = styled.Text`
    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;

    color: #333333;
`;

const InputLayout = styled.View`
    /* height: 50%; */
    /* border-bottom-width: 1px; */
    
`;

const inputForm = {
    name:"",
    birth:{
        y:"",
        m:"",
        d:"",
    },
    guardCall:{
        numFront:"",
        numMiddle:"",
        numBack:"",
    },
    myCall:{
        numFront:"",
        numMiddle:"",
        numBack:"",
    },
    address:"",
    detail:"",
    uri:"",
};


// empty: undefined   no empty : true  16


function InstructionModify(){

    const instructionDataContext = useInstructionDataContext();

    const [form, setForm] = useState(instructionDataContext);

    const HeaderTxt = ChekIsEmptyData(instructionDataContext) === undefined ? "자기소개 등록" : "자기소개  |  수정하기"; 
    const BtnTxt = ChekIsEmptyData(instructionDataContext) === undefined ? "등록 하기" : "수정 완료"; 


    const pickImg = () =>{ 
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 1200,
                maxWidth: 1200,
            },
                (response) => {
                    setForm({...form, uri:response.uri })

                },
            )
    };
    // {response === null ? <PersonalImg source={require('../img/defaultPersonalModify.png')}/> : <PersonalImg source={{uri:response}}/>}
    return(
        // <Whole style={{flex:1}}>
        <>
        <Header text={HeaderTxt}/>
            <Whole >

                <BtnLayout><Button screenType="INSTRUCTION_MAIN" processType="MODIFY" text={BtnTxt} data={form}/></BtnLayout>
                <ImgLayout>
                    <PersonalImgBox>
                        <PersonalImg source={ form.uri === "" ? require('../img/defaultPersonalModify.png') : {uri:form.uri} }/>
                        <ImgAddIconBox onPress={()=>{pickImg()}}>
                            <ImgAddIcon source={require('../img/imgAddIcon.png')}/>
                        </ImgAddIconBox>
                    </PersonalImgBox>
                    <ImgAddDescription>사용자 사진을 선택해주세요.</ImgAddDescription>
                </ImgLayout>
                <InputLayout >
                    <InputBox>
                        <InputLabel >이름</InputLabel>
                        <Input maxLength={15} onChangeText={text=>setForm({...form, name:text})} value={form.name} />
                    </InputBox>
                    <InputBox>
                        
                        <InputLabel>생일</InputLabel>
                        <InputList style={{alignItems: 'flex-end'}}>
                            <NumInput maxLength={4} onChangeText={text=>setForm({...form, birth:{ ...form.birth, y:text} })} value={form.birth.y} />
                            <InputSideTxt style={{marginLeft:3, marginRight:3}}>년</InputSideTxt>
                            <NumInput maxLength={2} onChangeText={text=>setForm({...form, birth:{ ...form.birth, m:text} })} value={form.birth.m} />
                            <InputSideTxt style={{marginLeft:3, marginRight:3}}>월</InputSideTxt>
                            <NumInput maxLength={2} onChangeText={text=>setForm({...form, birth:{ ...form.birth, d:text} })} value={form.birth.d} />
                            <InputSideTxt style={{marginLeft:3, marginRight:3}}>일</InputSideTxt>
                        </InputList>
                        
                    </InputBox>
                    <InputBox>
                        <InputLabel>보호자 연락처</InputLabel>
                        <InputList style={{alignItems: 'center'}}>
                            <NumInput maxLength={3} onChangeText={text=>setForm({...form, guardCall:{ ...form.guardCall, numFront:text} })} value={form.guardCall.numFront}/>
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <NumInput maxLength={4} onChangeText={text=>setForm({...form, guardCall:{ ...form.guardCall, numMiddle:text} })} value={form.guardCall.numMiddle}/>
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <NumInput maxLength={4} onChangeText={text=>setForm({...form, guardCall:{ ...form.guardCall, numBack:text} })} value={form.guardCall.numBack}/>
                            
                        </InputList>
                    </InputBox>
                    <InputBox>
                        <InputLabel>연락처</InputLabel>
                        <InputList style={{alignItems: 'center'}}>
                            <NumInput maxLength={3} onChangeText={text=>setForm({...form, myCall:{ ...form.myCall, numFront:text} })} value={form.myCall.numFront}/>
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <NumInput maxLength={4} onChangeText={text=>setForm({...form, myCall:{ ...form.myCall, numMiddle:text} })} value={form.myCall.numMiddle}/>
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <NumInput maxLength={4} onChangeText={text=>setForm({...form, myCall:{ ...form.myCall, numBack:text} })} value={form.myCall.numBack}/>
                            
                        </InputList>
                    </InputBox>
                    <InputBox>
                        <InputLabel >집 주소</InputLabel>
                        <Input maxLength={50} onChangeText={text=>setForm({...form, address:text})} value={form.address}/>
                    </InputBox>
                    <InputBox style={{marginBottom: 51}}>
                        <InputLabel>자세한 내용</InputLabel>
                        <Input multiline
                        style={{paddingRight:20, height:285, textAlignVertical:'top', paddingTop:20}}
                        placeholder={"치매노인환자 분에 대한 평소 옷차림 및 특이사항이 있다면 입력해주세요."}
                        onChangeText={text=>setForm({...form, detail:text})} value={form.detail}
                        maxLength={200}
                        />
                    </InputBox>
                    
                
                </InputLayout>

            </Whole>
        </>
        
    );
}



export default InstructionModify;