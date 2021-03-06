import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';
import MainFunctionLayout from '../base/MainFunctionLayout';
import MainDescriptionLayout from '../base/MainDescriptionLayout';
import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import TitleLayout from '../base/TitleLayout';
import PhotoLayout from '../base/PhotoLayout';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';
import {
    usePhotoZoneDataListContext, 
    usePagingDataContext, 
    useSetScreenDisplayStateContext
} from '../base/context';

// Photo Main Page Ok
const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    flex-grow:1;
    padding: 0 4%;
    justify-content: space-around;
`;

const TView = styled.View``;

function PhotoZoneMainPage(){
    const photoZoneDataListContext = usePhotoZoneDataListContext();
    const pagingDataContext = usePagingDataContext();
    const curShowPhotoData = photoZoneDataListContext[pagingDataContext.PHOTO_MAIN] || "";
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();
    console.log(`[S] : PhotoZoneMainPage.tsx, [F] : PhotoZoneMainPage, [T] : PHOTO_MAIN, [D] : curShowPhotoData, `);
    console.log(curShowPhotoData);

    // back btn click > move to MAIN page
    useEffect(() => {
        const backAction = () => {
            setScreenDisplayStateContext({screen:"MAIN",stage:0});
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

    return(
        <>
            <Header text="사진첩"/>
            <TopSectionInfo totalCount={photoZoneDataListContext.length} type="INFO" text="추가 하기" screen="PHOTO_MAIN"/>
            <Whole>
                <TView >  
                    <TitleLayout title={curShowPhotoData.title} color="#2A65AF" screen="PHOTO_MAIN"/ >
                    <MainFunctionLayout>
                        <PhotoLayout screen="PHOTO_MAIN" defaultTypes= "camera" />
                    </MainFunctionLayout>
                </TView>
                <MainDescriptionLayout src={curShowPhotoData} type="PHOTO_MAIN"/>
                <PagingBtnLayout screen="PHOTO_MAIN"/>
            </Whole>
        </>
    );
}

export default PhotoZoneMainPage;