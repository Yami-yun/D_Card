import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Header from '../base/Header';
import TopSectionInfo from '../base/TopSectionInfo';
import PhotoLayout from '../base/PhotoLayout';
import {InputBox, Input, InputLabel} from '../base/input';
import { ScrollView, BackHandler } from 'react-native';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';
import {
    usePhotoZoneDataContext,
    useSetPhotoZoneDataContext,
    useSetPhotoZoneDataListContext,
    usePhotoZoneDataListContext,
    usePagingDataContext,
    useSetScreenDisplayStateContext,
} from '../base/context';

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

function PhotoZoneModifyPage(){
    
    const setPhotoZoneDataContext = useSetPhotoZoneDataContext();
    const setPhotoZoneDataListContext = useSetPhotoZoneDataListContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();
    const pagingDataContext = usePagingDataContext();

    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    useEffect(() => {
        setPhotoZoneDataContext(photoZoneDataListContext[pagingDataContext.PHOTO_MAIN]);
        const backAction = () => {
            // 뒤로 갈때 이전 페이지 정보 갱신
            setPhotoZoneDataContext({...photoZoneDataListContext[pagingDataContext.PHOTO_MAIN]});
            setScreenDisplayStateContext({screen:"PHOTO_MAIN",stage:1});
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

    
    // useEffect(()=>{
    //     setPhotoZoneDataContext(photoZoneDataListContext[pagingDataContext.PHOTO_MAIN]);
    // },[])
    
    const photoZoneDataContext = usePhotoZoneDataContext();

    return(
        <>
            <Header text="사진첩 | 수정하기"/>
            <ScrollView>
                <TopSectionInfo type="MODIFY" text="수정 완료" screen="PHOTO_MODIFY"/>
                <Whole>
                    <PhotoLayout text="사진을 선택해주세요." defaultTypes="camera" height={180} screen="PHOTO_MODIFY" src={photoZoneDataContext.uri}/>

                    <InputBox>
                        <InputLabel>제목</InputLabel>
                        <Input maxLength={20} onChangeText={text=>setPhotoZoneDataContext({...photoZoneDataContext, title:text})} value={photoZoneDataContext.title} style={{height:40}}/>
                    </InputBox>
                    <InputBox>
                        <InputLabel >내용</InputLabel>
                        <Input 
                        multiline
                        maxLength={150}
                        onChangeText={text=>setPhotoZoneDataContext({...photoZoneDataContext, description:text})} 
                        value={photoZoneDataContext.description} 
                        placeholder="사진에 대한 이야기를 적어주세요." 
                        placeholderTextColor="rgba(34, 34, 34, 0.5);" 
                        style={{height:189, fontSize:11.2, paddingRight:20}}
                        />
                    </InputBox>
                </Whole>
            </ScrollView>
        </>
    );
}
export default PhotoZoneModifyPage;