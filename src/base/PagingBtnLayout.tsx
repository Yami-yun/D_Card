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

// Paging Btn Layout ok
const Whole = styled.View`
    height: 10%;
    margin-right: 2px;
    flex-direction: row;
    justify-content:flex-end;
    align-items:flex-start;
`;

const IconBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width : 38px;
    height: 38px;
    margin : 0 2.5%;

    justify-content:center;
    align-items:center; 
`;

const IconImg = styled.Image`
    width: 100%;
    height: 100%;
`;
interface Props{
    screen: "PHOTO_MAIN" | "HEALTH_INFO_MAIN" | "EMERGENCY_CALL_MAIN";
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

    // paging 하면 해당 page의 보여주는 정보를 갱신한다.
    const pagingLeft = () =>{
        if(pagingDataContext[screen] !== 0){
            console.log(`[S] : PagingBtnLayout.tsx, [F] : PagingBtnLayout, [T] : PAGING LEFT BEFORE, [D] : pagingDataContext, `);
            console.log(pagingDataContext);
            if(screen === "PHOTO_MAIN"){
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN: pagingDataContext.PHOTO_MAIN - 1}); 
                setPhotoZoneDataContext(photoZoneDataListContext[pagingDataContext.PHOTO_MAIN - 1]);    
            }
            else if(screen === "HEALTH_INFO_MAIN"){
                setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN: pagingDataContext.HEALTH_INFO_MAIN - 1});
                setHealthInfoDataContext(healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN - 1]);
            }
            else{
                // emergency page는 해당 페이지에 정보가 두개 이므로 다른 main script에서 갱신한다.
                setPagingDataContext({...pagingDataContext, EMERGENCY_CALL_MAIN: pagingDataContext.EMERGENCY_CALL_MAIN - 1}); 
            }
            console.log(`[S] : PagingBtnLayout.tsx, [F] : PagingBtnLayout, [T] : PAGING LEFT AFTER, [D] : pagingDataContext, `);
            console.log(pagingDataContext);
        }
    };

    const pagingRight = () =>{
        console.log(`[S] : PagingBtnLayout.tsx, [F] : PagingBtnLayout, [T] : PAGING RIGHT BEFORE, [D] : pagingDataContext, `);
        console.log(pagingDataContext);
        if(pagingDataContext[screen] !== (pageLen - 1)){
            if(screen === "PHOTO_MAIN"){
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN: pagingDataContext.PHOTO_MAIN + 1}); 
                setPhotoZoneDataContext(photoZoneDataListContext[pagingDataContext.PHOTO_MAIN + 1]);
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
        console.log(`[S] : PagingBtnLayout.tsx, [F] : PagingBtnLayout, [T] : PAGING RIGHT AFTER, [D] : pagingDataContext, `);
        console.log(pagingDataContext);
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