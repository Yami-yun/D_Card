import React from 'react';
import styled from 'styled-components/native';
import Button from '../base/button';
import {InputBox, InputList, InputSideTxt, Input, InputLabel} from '../base/input';
import {Text} from 'react-native';

const Whole = styled.ScrollView`
    /* height: 92%; */
    border: 1px blue;
    padding: 0 22px;
    /* height: 900px; */

`;

const BtnLayout = styled.View`
    /* height: 10%; */
    /* border-bottom-width: 1px; */
    margin-top: 27px;
    align-items:flex-end;
`;

const ImgLayout = styled.View`
    /* height: 40%; */
    height: 244px;
    /* border-bottom-width: 1px; */
    justify-content: center;
    align-items: center;
`;

const PersonalImgBox = styled.View`
    width: 150px;
    height: 150px;
    /* border: 1px; */
    margin-bottom: 12px;
`;

const PersonalImg = styled.Image`
    width: 150px;
    height: 150px;
`;

const ImgAddIcon = styled.Image`
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 0.2px;
    right: 0.2px;
    

`;


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


function InstructionModify(){

    return(
        // <Whole style={{flex:1}}>
            <Whole >

                <BtnLayout><Button text="수정 완료"/></BtnLayout>
                <ImgLayout>
                    <PersonalImgBox>
                        <PersonalImg source={require('../img/defaultPersonalModify.png')}/>
                        <ImgAddIcon source={require('../img/imgAddIcon.png')}/>
                    </PersonalImgBox>
                    <ImgAddDescription>사용자 사진을 선택해주세요.</ImgAddDescription>
                </ImgLayout>
                <InputLayout >
                    <InputBox>
                        <InputLabel >이름</InputLabel>
                        <Input />
                    </InputBox>
                    <InputBox>
                        
                        <InputLabel>생일</InputLabel>
                        <InputList style={{alignItems: 'flex-end'}}>
                            <Input style={{flexGrow:9}}/>
                            <InputSideTxt style={{marginLeft:3, marginRight:3}}>년</InputSideTxt>
                            <Input style={{flexGrow:9}}/>
                            <InputSideTxt style={{marginLeft:3, marginRight:3}}>월</InputSideTxt>
                            <Input style={{flexGrow:9}}/>
                            <InputSideTxt style={{marginLeft:3, marginRight:3}}>일</InputSideTxt>
                        </InputList>
                        
                    </InputBox>
                    <InputBox>
                        <InputLabel>보호자 연락처</InputLabel>
                        <InputList style={{alignItems: 'center'}}>
                        <Input style={{flexGrow:9}}/>
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <Input style={{flexGrow:9}}/>
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <Input style={{flexGrow:9}}/>
                            
                        </InputList>
                    </InputBox>
                    <InputBox>
                        <InputLabel>연락처</InputLabel>
                        <InputList style={{alignItems: 'center'}}>
                            <Input style={{flexGrow:9}}/>
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <Input style={{flexGrow:9}}/>
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <Input style={{flexGrow:9}}/>
                            
                        </InputList>
                    </InputBox>
                    <InputBox>
                        <InputLabel>집 주소</InputLabel>
                        <Input/>
                    </InputBox>
                    <InputBox style={{marginBottom: 51}}>
                        <InputLabel>자세한 내용</InputLabel>
                        <Input style={{height:285}}/>
                    </InputBox>
                    
                
                </InputLayout>

            </Whole>
        // </Whole>
        
    );
}

export default InstructionModify;