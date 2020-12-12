import React, {useState} from 'react';
import styled from 'styled-components/native';
import Header from '../base/Header';
import TopSectionInfo from '../base/TopSectionInfo';
import PhotoLayout from '../base/PhotoLayout';
import {InputBox, Input, InputLabel} from '../base/input';
import { ScrollView } from 'react-native';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';
import {usePhotoZoneDataContext, useSetPhotoZoneDataContext} from '../base/context';

const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    /* border: 3px red; */
    flex-grow:1;
    padding: 0 4%;
    /* justify-content: space-around; */
`;


// id:"",
// title:"",
// description:"",

function PhotoZoneAddPage(){
    const photoZoneDataContext = usePhotoZoneDataContext();
    const setPhotoZoneDataContext = useSetPhotoZoneDataContext();

    

    return(
        <>
            <Header text="사진첩 | 추가하기"/>
            <ScrollView>
                <TopSectionInfo type="ADD" text="등록 하기" screen="PHOTO_MODIFY"/>
                <Whole>

                    <PhotoLayout src="" defaultTypes="camera" height={180} screen="PHOTO_MODIFY"/>


                    <InputBox>
                        <InputLabel>제목</InputLabel>
                        <Input onChangeText={text=>setPhotoZoneDataContext({...photoZoneDataContext, title:text})} value={photoZoneDataContext.title} style={{height:40}}/>
                    </InputBox>
                    <InputBox>
                        <InputLabel >내용</InputLabel>
                        <Input 
                        onChangeText={text=>setPhotoZoneDataContext({...photoZoneDataContext, description:text})} 
                        value={photoZoneDataContext.description} 
                        placeholder="사진에 대한 이야기를 적어주세요." 
                        placeholderTextColor="rgba(34, 34, 34, 0.5);" 
                        style={{height:189, fontSize:10}}
                        />
                    </InputBox>
                </Whole>
            </ScrollView>
        </>
    );
}
export default PhotoZoneAddPage;