
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {BackHandler, View} from 'react-native';
import Button from '../base/button';
import Header from '../base/Header'
import {InputBox, InputList, InputSideTxt, Input, InputLabel, NumInput} from '../base/input';
import { heightCal} from '../base/Tool';
import * as ImagePicker from '../imagePicker/index';

import {useInstructionDataContext, ChekIsEmptyData, useSetScreenDisplayStateContext} from '../base/context';

const Whole = styled.ScrollView`
    padding: 0 4%;
`;

const BtnLayout = styled.View`
    height: ${heightCal(90)}px;
    
    padding-top: 25px;
    align-items:flex-end;
`;

const ImgLayout = styled.View`
    height: 200px;

    justify-content: center;
    align-items: center;
`;

const PersonalImgBox = styled.View`
    width: 150px;
    height: 150px;
    justify-content:center;
    align-items:center;

    margin-bottom: 12px;
    border-radius: 256px;
`;

const PersonalImg = styled.Image`
    width: 145px;
    height: 145px;
    border-radius: 256px;
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

const InputLayout = styled.View``;

function InstructionModify(){
    const instructionDataContext = useInstructionDataContext();
    const [form, setForm] = useState(instructionDataContext);                       // input form

    const HeaderTxt = ChekIsEmptyData(instructionDataContext) === undefined ? "자기소개 등록" : "자기소개  |  수정하기"; 
    const BtnTxt = ChekIsEmptyData(instructionDataContext) === undefined ? "등록 하기" : "수정 완료"; 
    
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();
    const [cmpURI, setCmpURI] = useState("");                                   // cmpURI is photo uri when get photo from user gallery

    useEffect(() => {
        const backAction = () => {
            setScreenDisplayStateContext({screen:"INSTRUCTION_MAIN",stage:1});
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

    const pickImg = () =>{ 
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: true,
                maxHeight: 300,
                maxWidth: 300,
            },
                (response) => {
                    setForm({...form, uri:response.fileName })
                    setCmpURI(response.uri);
                },
            )
    };

    return(
        <>
        <Header text={HeaderTxt}/>
            <Whole >
                <BtnLayout><Button screenType={{screen:"INSTRUCTION_MAIN", stage:1}} processType="MODIFY" text={BtnTxt} data={form}/></BtnLayout>
                <ImgLayout>
                    <PersonalImgBox>
                        {(cmpURI == "" || cmpURI == undefined) ? <PersonalImg source={instructionDataContext.uri === "" ? require('../img/defaultPersonalModify.png') : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${instructionDataContext.id}_${instructionDataContext.uri}`}}/>
                        : <PersonalImg source={ form.uri === "" ? require('../img/defaultPersonalModify.png') : {uri:cmpURI} }/>}
                        <ImgAddIconBox onPress={()=>{pickImg()}}>
                            <ImgAddIcon source={require('../img/imgAddIcon.png')}/>
                        </ImgAddIconBox>
                    </PersonalImgBox>
                    <ImgAddDescription>사용자 사진을 선택해주세요.</ImgAddDescription>
                </ImgLayout>

                {/* input area */}
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
                    <View style={{width:200, height: 25}}></View>
                </InputLayout>

            </Whole>
        </>
    );
}



export default InstructionModify;