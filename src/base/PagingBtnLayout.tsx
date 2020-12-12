import React from 'react';
import styled from 'styled-components/native';
import {
    useSetPagingDataContext,
    usePagingDataContext,
    usePhotoZoneDataListContext,
    useSetPhotoZoneDataContext,
    useHealthInfoDataListContext,
    useSetHealthInfoDataContext,
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

    const pageLen = (screen === "PHOTO_MAIN") ? photoZoneDataListContext.length : healthInfoDataListContext.length;

    const pagingLeft = () =>{
        if(pagingDataContext[screen] !== 0){
            // console.log("1");
            if(screen === "PHOTO_MAIN"){
                // console.log("2");
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN: pagingDataContext.PHOTO_MAIN - 1}); 
                setPhotoZoneDataContext(photoZoneDataListContext[pagingDataContext.PHOTO_MAIN]);
            }
            else if(screen === "HEALTH_INFO_MAIN"){
                // console.log("3");
                setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN: pagingDataContext.HEALTH_INFO_MAIN - 1});
                setHealthInfoDataContext(healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN]);
            }
            else{
                setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN: pagingDataContext.EMERGENCY_CALL_MAIN - 1}); 
                // setHealthInfoDataContext({healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN]});
            }
            // setPagingDataContext({...pagingDataContext, :});
        }
        // console.log(pagingDataContext);
    };

    const pagingRight = () =>{
        if(pagingDataContext[screen] !== (pageLen - 1)){
            // console.log("4");
            if(screen === "PHOTO_MAIN"){
                // console.log("5");
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN: pagingDataContext.PHOTO_MAIN + 1}); 
                setPhotoZoneDataContext(photoZoneDataListContext[pagingDataContext.PHOTO_MAIN]);
            }
            else if(screen === "HEALTH_INFO_MAIN"){
                // console.log("6");
                setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN: pagingDataContext.HEALTH_INFO_MAIN + 1}); 
                setHealthInfoDataContext(healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN]);
            }
            else{
                setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN: pagingDataContext.EMERGENCY_CALL_MAIN + 1}); 
            }
            // setPagingDataContext({...pagingDataContext, :});
        }
        // console.log(pagingDataContext);
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