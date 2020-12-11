import React from 'react';
import styled from 'styled-components/native';
import {useSetPagingDataContext, usePagingDataContext, usePhotoZoneDataListContext} from '../base/context';

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
    screen?: "PHOTO_MAIN" | "HEALTH_INFO_MAIN";
};

function PagingBtnLayout({screen}:Props){
    const setPagingDataContext = useSetPagingDataContext();
    const pagingDataContext = usePagingDataContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();

    const pagingLeft = () =>{
        if(pagingDataContext[screen] !== 0){
            console.log("1");
            if(screen === "PHOTO_MAIN"){
                console.log("2");
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN: pagingDataContext.PHOTO_MAIN - 1}); 
            }
            else{
                console.log("3");
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN: pagingDataContext.HEALTH_INFO_MAIN - 1}); 
            }
            // setPagingDataContext({...pagingDataContext, :});
        }
        console.log(pagingDataContext);
    };

    const pagingRight = () =>{
        if(pagingDataContext.[screen] !== photoZoneDataListContext.length - 1){
            console.log("4");
            if(screen === "PHOTO_MAIN"){
                console.log("5");
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN: pagingDataContext.PHOTO_MAIN + 1}); 
            }
            else{
                console.log("6");
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN: pagingDataContext.HEALTH_INFO_MAIN + 1}); 
            }
            // setPagingDataContext({...pagingDataContext, :});
        }
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