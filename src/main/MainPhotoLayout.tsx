import React from 'react';
import styled from 'styled-components/native';
import {widthCal, heightCal} from '../base/Tool';
import { 
    useSetScreenDisplayStateContext, 
    useSetPhotoZoneDataContext, 
    usePhotoZoneDataListContext, 
    useSetPagingDataContext, 
    usePagingDataContext,
} from "../base/context";

const Whole = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: ${heightCal(38.8)}px 0;
`;

const MainPhotoLeftLayout = styled.View``;

const MainPhotoTextLine1 = styled.Text`
    font-style: normal;
    font-weight: 100;
    font-size: 12px;
    line-height: 16px;
    padding-left: 4px;
    color: rgba(51, 51, 51, 0.8);
`;

const MainPhotoTextLine2 = styled.Text`
    /* font-family: Noto Sans; */
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 34px;
    color: #222222;
`;

const PlusIconBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width: 40px;
    height: 40px;
    margin-top: 9px;
    margin-left: 29px;
`;

const MainPhotoPlusIcon = styled.Image``;

const MainPhotoRightLayout = styled.View``;

const MainPhotoImgBox = styled.View`
        /* width: 230px;
    height: 176px; */
    width: ${widthCal(230)}px;
    height: ${heightCal(176)}px;
    display:flex;
    justify-content: center;
    align-items: center;
    
    background: #FFFFFF;
    border: 1px #D0D0D0;
    border-radius: 3px;
`;

const MainPhotoImg = styled.Image`
    width :${props=>props.id === "" ? 65 : 100}%;
    height :${props=>props.id === "" ? 65 : 100}%;
`;

const MainPhotoDescriptionTxt = styled.Text`

    font-weight: normal;
    font-size: 12px;
    margin-top: 8px;
    color: #333333;
`;

const EmergencyIconBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    position: absolute;
    bottom: -20px;
    left: 1px;
    width: ${widthCal(70)}px;
    height: ${heightCal(70)}px;
`;

const MainPhotoEmergencyIcon = styled.Image``;

interface Props{};

function MainPhotoLayout({}: Props){
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    const setPhotoZoneDataContext = useSetPhotoZoneDataContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();

    const setPagingDataContext = useSetPagingDataContext();
    const pagingDataContext = usePagingDataContext();

    let {title, id, uri} = photoZoneDataListContext.length !== 0 ? photoZoneDataListContext[photoZoneDataListContext.length-1] : {title:"", id:"", uri:""};

    return(
        <Whole>
            <MainPhotoLeftLayout>
                <MainPhotoTextLine1>일상을 담는</MainPhotoTextLine1>
                <MainPhotoTextLine2>사진첩</MainPhotoTextLine2>
                <PlusIconBox onPress={()=>{
                    setScreenDisplayStateContext({screen:"PHOTO_MAIN", stage:1});
                    if(photoZoneDataListContext[photoZoneDataListContext.length-1] !== undefined){
                        setPhotoZoneDataContext({...photoZoneDataListContext[photoZoneDataListContext.length-1]});
                    }
                    setPagingDataContext({...pagingDataContext, "PHOTO_MAIN" :photoZoneDataListContext.length-1});
                    }} >
                    <MainPhotoPlusIcon source={require("../img/plusIcon.png")}/>
                </PlusIconBox>
                <EmergencyIconBox onPress={()=>{
                    setScreenDisplayStateContext({screen:"EMERGENCY_CALL_MAIN", stage:1});
                    setPagingDataContext({...pagingDataContext, "EMERGENCY_CALL_MAIN" :0});
                    }} >
                    <MainPhotoEmergencyIcon source={require("../img/emergencyCallIcon.png")}/>
                </EmergencyIconBox>
            </MainPhotoLeftLayout>

            <MainPhotoRightLayout>
                <MainPhotoImgBox >
                    <MainPhotoImg 
                    resizeMode='contain' 
                    id={id}
                    source={id === "" ? require("../img/camera.png") : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${id}_${uri}`} }
                    />

                </MainPhotoImgBox>
                <MainPhotoDescriptionTxt> {title}</MainPhotoDescriptionTxt>
            </MainPhotoRightLayout>
            
        </Whole>
    );
}

export default MainPhotoLayout;