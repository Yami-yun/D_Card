import React from 'react';
import styled from 'styled-components/native';
import {
    useSetPagingDataContext,
    usePagingDataContext,
    usePhotoZoneDataListContext,
    useSetPhotoZoneDataContext,
    useHealthInfoDataListContext,
    useSetHealthInfoDataContext,
    useEmergencyCallDataListContext,
} from '../base/context';

// Paging Btn Layout
const Whole = styled.View`
    height: 40px;
    /* height: 5%; */

    flex-direction: row;
    justify-content:flex-end;
    align-items:center;
`;

const IconBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width : 36px;
    height: 36px;
    margin : 0 2%;

    justify-content:center;
    align-items:center;
    
`;

const IconImg = styled.Image`
    width: 100%;
    height: 100%;
`;

interface Props{
    screen?: "PHOTO_MAIN" | "HEALTH_INFO_MAIN" | "EMERGENCY_CALL_MAIN";
};

function PagingBtnLayout({screen}:Props){
    const setPagingDataContext = useSetPagingDataContext();
    const pagingDataContext = usePagingDataContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();
    const setPhotoZoneDataContext = useSetPhotoZoneDataContext();
    const healthInfoDataListContext = useHealthInfoDataListContext();
    const setHealthInfoDataContext = useSetHealthInfoDataContext();
    const emergencyCallDataListContext = useEmergencyCallDataListContext();

    const pageLen = (screen === "PHOTO_MAIN") ? photoZoneDataListContext.length : healthInfoDataListContext.length;
    const emergencyPageLen = emergencyCallDataListContext.length;

    const pagingLeft = () =>{
        if(pagingDataContext[screen] !== 0){
            if(screen === "PHOTO_MAIN"){
                console.log("PAGING LEFT BEFORE :");
                console.log(pagingDataContext);

                setPagingDataContext({...pagingDataContext, PHOTO_MAIN: pagingDataContext.PHOTO_MAIN - 1}); 

                console.log("PAGING LEFT AFTER :");
                console.log(pagingDataContext);
                // ??????????? why update pagingdatacontext?
                setPhotoZoneDataContext(photoZoneDataListContext[pagingDataContext.PHOTO_MAIN - 1]);
                
            }
            else if(screen === "HEALTH_INFO_MAIN"){
                // paging 하면 해당 page의 보여주는 정보를 갱신한다.
                setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN: pagingDataContext.HEALTH_INFO_MAIN - 1});
                setHealthInfoDataContext(healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN - 1]);
                
            }
            else{
                // emergency page는 해당 페이지에 정보가 두개 이므로 다른 main script에서 갱신한다.
                setPagingDataContext({...pagingDataContext, EMERGENCY_CALL_MAIN: pagingDataContext.EMERGENCY_CALL_MAIN - 1}); 
            }
        }
    };

    const pagingRight = () =>{
        console.log("Test!!!!!!!!!");
        console.log(pageLen - 1);
        // console.log(pageLen - 1);
        if(pagingDataContext[screen] !== (pageLen - 1)){
            if(screen === "PHOTO_MAIN"){
                console.log("PAGING RIGHT BEFORE :");
                console.log(pagingDataContext);
                
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN: pagingDataContext.PHOTO_MAIN + 1}); 
                console.log("PAGING RIGHT AFTER :");
                console.log(pagingDataContext);
                setPhotoZoneDataContext(photoZoneDataListContext[pagingDataContext.PHOTO_MAIN + 1]);
                console.log("test!!!");
                
            }
            else if(screen === "HEALTH_INFO_MAIN"){
                
                setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN: pagingDataContext.HEALTH_INFO_MAIN + 1}); 
                setHealthInfoDataContext(healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN + 1]);
            }
        }

        if(screen === "EMERGENCY_CALL_MAIN"){
            if(pagingDataContext[screen] !== Math.round(emergencyPageLen/2) - 1){
                setPagingDataContext({...pagingDataContext, EMERGENCY_CALL_MAIN: pagingDataContext.EMERGENCY_CALL_MAIN + 1}); 
            }
        }
    };


    return(
        <Whole>
            <IconBox onPress={()=>{pagingLeft()}}>
                <IconImg source={require("../img/pagingLeft.png")}/>
            </IconBox>
            <IconBox onPress={()=>{pagingRight()}}>
                <IconImg source={require("../img/pagingRight.png")}/>
            </IconBox>
        </Whole>
    );
}

export default PagingBtnLayout;