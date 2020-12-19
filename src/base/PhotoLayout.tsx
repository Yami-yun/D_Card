import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import * as ImagePicker from '../imagePicker/index';
import {
    usePhotoZoneDataContext, 
    useSetPhotoZoneDataContext, 
    useSetHealthInfoDataContext, 
    useHealthInfoDataContext, 
    useHealthInfoDataListContext, 
    usePagingDataContext, 
    usePhotoZoneDataListContext,
} from '../base/context';

// PhotoZone, Health Info page Photo Layout, ok
const Whole = styled.View`
    height : ${props=>(props.height) || 180}px;

    justify-content: center;
    align-items: center;

    border: 1px #9D9A9A;;
    border-radius: 5px;
`;

const PhotoBox = styled.View`
    height: 100%;
    padding: 0.5px;

    justify-content: center;
    align-items: center;
`;

const PhotoBoxBtnLayout = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width: 100%;
    height: 100%;
`;

// default img > width, height = 55%
const PhotoBoxImg = styled.Image`
    width: ${props=>(props.uri === "" || props.uri === undefined) ? 55 : 100}%;
    height: ${props=>(props.uri === "" || props.uri === undefined)? 55 : 100}%;
`;

const PhotoBoxImg2 = styled.Image`
    width: 65%;
    height: 65%;
`;

interface Props{
    defaultTypes:string;
    height?: number;
    screen: string;
};

//default img source
const imgSrc = {
    camera: require("../img/camera.png"),
    pill: require("../img/pillIcon.png"),
}

function PhotoLayout({defaultTypes, height, screen}: Props){    
    const setPhotoZoneDataContext = useSetPhotoZoneDataContext();
    const photoZoneDataContext = usePhotoZoneDataContext();

    const setHealthInfoDataContext = useSetHealthInfoDataContext();
    const healthInfoDataContext = useHealthInfoDataContext();

    const healthInfoDataListContext = useHealthInfoDataListContext();
    const pagingDataContext = usePagingDataContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();

    const [cmpURI, setCmpURI] = useState("");           //  cmpURI is modify page img uri when get img from the user gallery

    const pickImg = () =>{ 
        if(screen !== "PHOTO_MAIN" && screen !== "HEALTH_INFO_MAIN"){
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: true,
                maxHeight: 300,
                maxWidth: 300,
            },
                (response) => {
                    console.log("");
                    console.log("################################## PHOTO LAYOUT LOG START ##################################");
                    console.log(response.fileName);
                    console.log("################################## PHOTO LAYOUT LOG END ##################################");
                    console.log("");
                    if(screen === "PHOTO_MODIFY"){
                        setPhotoZoneDataContext({...photoZoneDataContext, uri:response.fileName, width:response.width, height:response.height });
                        
                    }
                    else if(screen === "HEALTH_INFO_MODIFY"){
                        setHealthInfoDataContext({...healthInfoDataContext, uri:response.fileName, width:response.width, height:response.height });
                    }
                    setCmpURI(response.uri);
                },
            )
        }
    };

    // check if cur photo or health page data is (empty == undefined)
    let isEmpty = useRef(false);
    if(photoZoneDataContext === undefined || healthInfoDataContext === undefined){
        isEmpty.current = true;
    }
    else{
        isEmpty.current = false;
    }
    
    useEffect(()=>{
        // if data add, modify, remove => render
        setPhotoZoneDataContext({...photoZoneDataListContext[pagingDataContext.PHOTO_MAIN]});
        setHealthInfoDataContext({...healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN]});
        
    }, [photoZoneDataListContext.length, healthInfoDataListContext.length]);

    return(
        <Whole height={height}>

            <PhotoBoxBtnLayout onPress={()=>{pickImg()}}>
                <PhotoBox>
                    {/* PhotoLayout in PHOTO MODIFY page */}
                    {((screen === "PHOTO_MODIFY") && (photoZoneDataContext.uri === "" || photoZoneDataContext.uri === undefined || photoZoneDataListContext === 0)) && <PhotoBoxImg uri={photoZoneDataContext.uri} resizeMode='contain' source={imgSrc[defaultTypes]} />}
                    {((screen === "PHOTO_MODIFY") && (photoZoneDataContext.uri !== "" && photoZoneDataContext.uri !== undefined && photoZoneDataListContext !== 0)) && <PhotoBoxImg uri={photoZoneDataContext.uri} resizeMode='contain' source={cmpURI != "" ? {uri:cmpURI} : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${photoZoneDataContext.id}_${photoZoneDataContext.uri}`} } />}

                    {/* PhotoLayout in PHOTO MAIN page */}
                    {(!isEmpty.current && screen === "PHOTO_MAIN") && 
                    <PhotoBoxImg 
                    uri={photoZoneDataContext.uri} 
                    resizeMode='contain' 
                    source={photoZoneDataContext.uri === "" || photoZoneDataContext.uri === undefined ? imgSrc[defaultTypes] : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${photoZoneDataContext.id}_${photoZoneDataContext.uri}`} }/>}

                    {/* {isEmpty.current && screen !== "PHOTO_MODIFY" && <PhotoBoxImg2 resizeMode='contain' source={imgSrc[defaultTypes]}/>} */}

                    {/* PhotoLayout in HEALTH_INFO MODIFY page */}
                    {((screen === "HEALTH_INFO_MODIFY") && (healthInfoDataContext.uri === "" || healthInfoDataContext.uri === undefined)) && <PhotoBoxImg uri={healthInfoDataContext.uri} resizeMode='contain' source={imgSrc[defaultTypes]} />}
                    {((screen === "HEALTH_INFO_MODIFY") && (healthInfoDataContext.uri !== "" && healthInfoDataContext.uri !== undefined)) && <PhotoBoxImg uri={healthInfoDataContext.uri} resizeMode='contain' source={cmpURI != "" ? {uri:cmpURI} : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${healthInfoDataContext.id}_${healthInfoDataContext.uri}`} } />}
                    
                    {/* PhotoLayout in HEALTH_INFO MODIFY page */}
                    {(!isEmpty.current && screen === "HEALTH_INFO_MAIN") && 
                    <PhotoBoxImg 
                    uri={healthInfoDataContext.uri} 
                    resizeMode='contain' 
                    source={healthInfoDataContext.uri === "" || healthInfoDataContext.uri === undefined ? imgSrc[defaultTypes] : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${healthInfoDataContext.id}_${healthInfoDataContext.uri}`} }/>}
                    
                </PhotoBox>         
            </PhotoBoxBtnLayout>
        </Whole>
    );
}

export default PhotoLayout;