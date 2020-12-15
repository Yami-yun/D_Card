import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import * as ImagePicker from '../imagePicker/index';
import {
    usePhotoZoneDataContext, 
    useSetPhotoZoneDataContext, 
    useSetHealthInfoDataContext, 
    useHealthInfoDataContext, 
    useHealthInfoDataListContext, 
    usePagingDataContext, 
    usePhotoZoneDataListContext,
    baseSRC,
    useSetPhotoZoneDataListContext,
} from '../base/context';


const Whole = styled.View`

    height : ${props=>(props.height) || 180}px;
    /* height: 186px; */
    /* padding: 0 22px; */
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

    /* border: 1px blue; */
    
`;

const PhotoBoxLayout = styled.View`
    width: 100%;
    height: 100%;
`;

const PhotoBoxBtnLayout = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width: 100%;
    height: 100%;
`;

const PhotoBoxImg = styled.Image`
    width: ${props=>(props.uri === "" || props.uri === undefined) ? 55 : 100}%;
    height: ${props=>(props.uri === "" || props.uri === undefined)? 55 : 100}%;
`;

const PhotoBoxImg2 = styled.Image`
    width: 65%;
    height: 65%;

`;

const DefaultPhotoBoxImg = styled.Image`
    width: 100%;
    height: 100%;
    
    /* border: 1px blue; */
`;

const PhotoBoxDefaultTxt = styled.Text`

    margin-top: 4.5%;
    font-family: Noto Sans;
    font-weight: normal;
    font-size: 12px;
    color: rgba(51, 51, 51, 0.5);
`;

interface Props{
    defaultTypes?:string;
    text?:string;
    height?: number;
    screen: string;
    src?:any;
};

const imgSrc = {
    camera: require("../img/camera.png"),
    pill: require("../img/pillIcon.png"),
    
}

//"../img/camera.png"
function PhotoLayout({defaultTypes, text, height, screen, src}: Props){    
    const setPhotoZoneDataContext = useSetPhotoZoneDataContext();
    const photoZoneDataContext = usePhotoZoneDataContext();
    const setPhotoZoneDataListContext = useSetPhotoZoneDataListContext();

    const setHealthInfoDataContext = useSetHealthInfoDataContext();
    const healthInfoDataContext = useHealthInfoDataContext();

    const healthInfoDataListContext = useHealthInfoDataListContext();
    const pagingDataContext = usePagingDataContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();
    // const [isPhotoUpload, setIsPhotoUpload] = useState(false);

    const [cmpURI, setCmpURI] = useState("");

    
    
    // console.log(healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN.uri]);
    const pickImg = () =>{ 
        if(screen !== "PHOTO_MAIN" && screen !== "HEALTH_INFO_MAIN"){
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 1200,
                maxWidth: 1200,
            },
                (response) => {
                    console.log(response);
                    // setIsPhotoUpload(true);
                    if(screen === "PHOTO_MODIFY"){
                        setPhotoZoneDataContext({...photoZoneDataContext, uri:response.fileName, width:response.width, height:response.height });
                        
                    }
                    else if(screen === "HEALTH_INFO_MODIFY"){
                        setHealthInfoDataContext({...healthInfoDataContext, uri:response.fileName, width:response.width, height:response.height });
                    }
                    setCmpURI(response.uri);

                    console.log(cmpURI);
                },
            )
        }
    };

    let isEmpty = useRef(false);
    if(photoZoneDataContext === undefined || healthInfoDataContext === undefined){
        isEmpty.current = true;
    }
    else{
        isEmpty.current = false;
    }
    console.log("TEST : ");
    // console.log(test.uri === );
    console.log(isEmpty);

    useEffect(()=>{
        // if data add, modify, remove => render
        setPhotoZoneDataContext({...photoZoneDataListContext[pagingDataContext.PHOTO_MAIN]});
        setHealthInfoDataContext({...healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN]});
        
    }, [photoZoneDataListContext.length, healthInfoDataListContext.length]);

    return(
        <Whole height={height}>

            <PhotoBoxBtnLayout onPress={()=>{pickImg()}}>
                <PhotoBox>
                {/* photoZoneDataListContext.length pagingDataContext.PHOTO_MAIN */}
                    {((screen === "PHOTO_MODIFY") && (photoZoneDataContext.uri === "" || photoZoneDataContext.uri === undefined || photoZoneDataListContext === 0)) && <PhotoBoxImg uri={photoZoneDataContext.uri} resizeMode='contain' source={imgSrc[defaultTypes]} />}
                    {((screen === "PHOTO_MODIFY") && (photoZoneDataContext.uri !== "" && photoZoneDataContext.uri !== undefined && photoZoneDataListContext !== 0)) && <PhotoBoxImg uri={photoZoneDataContext.uri} resizeMode='contain' source={cmpURI != "" ? {uri:cmpURI} : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${photoZoneDataContext.id}_${photoZoneDataContext.uri}`} } />}

                    
                    {(!isEmpty.current && screen === "PHOTO_MAIN") && 
                    <PhotoBoxImg 
                    uri={photoZoneDataContext.uri} 
                    resizeMode='contain' 
                    source={photoZoneDataContext.uri === "" || photoZoneDataContext.uri === undefined ? imgSrc[defaultTypes] : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${photoZoneDataContext.id}_${photoZoneDataContext.uri}`} }/>}

                    {isEmpty.current && screen !== "PHOTO_MODIFY" && <PhotoBoxImg2 resizeMode='contain' source={imgSrc[defaultTypes]}/>}


                    {((screen === "HEALTH_INFO_MODIFY") && (healthInfoDataContext.uri === "" || healthInfoDataContext.uri === undefined)) && <PhotoBoxImg uri={healthInfoDataContext.uri} resizeMode='contain' source={imgSrc[defaultTypes]} />}
                    {((screen === "HEALTH_INFO_MODIFY") && (healthInfoDataContext.uri !== "" && healthInfoDataContext.uri !== undefined)) && <PhotoBoxImg uri={healthInfoDataContext.uri} resizeMode='contain' source={cmpURI != "" ? {uri:cmpURI} : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${healthInfoDataContext.id}_${healthInfoDataContext.uri}`} } />}
                    
                    {(!isEmpty.current && screen === "HEALTH_INFO_MAIN") && 
                    <PhotoBoxImg 
                    uri={healthInfoDataContext.uri} 
                    resizeMode='contain' 
                    source={healthInfoDataContext.uri === "" || healthInfoDataContext.uri === undefined ? imgSrc[defaultTypes] : {uri:`file:///storage/emulated/0/Android/data/com.d_card/files/${healthInfoDataContext.id}_${healthInfoDataContext.uri}`} }/>}
                    
                    {/* {(screen === "PHOTO_MAIN" || screen === "HEALTH_INFO_MAIN") && <PhotoBoxImg uri={src.uri} resizeMode='contain' source={src.uri === "" || src.uri === undefined? imgSrc[defaultTypes] : require(src.uri) }/>} */}
                    {/* {(screen === "PHOTO_MAIN" || screen === "HEALTH_INFO_MAIN") && <PhotoBoxImg uri={src.uri} resizeMode='contain' source={src.uri === "" || src.uri === undefined? imgSrc[defaultTypes] : {uri:src.uri}}/>} */}
                    {/* <PhotoBoxImg uri={src.uri} resizeMode='contain' source={require('/storage/emulated/0/Android/data/com.d_card/files/rn_image_picker_lib_temp_8110cd13-f3dc-4a6b-adac-297b3f8aaf7a.jpg')}/> */}
                    {/* `/storage/emulated/0/Folder_name/${File_name}` */}

                    {/* {(screen === "PHOTO_MODIFY" || screen === "PHOTO_MAIN") && ((photoZoneDataContext.uri === "" && (src.uri === "" || src.uri === undefined)) && <PhotoBoxDefaultTxt>{text}</PhotoBoxDefaultTxt>)} */}

                    {/* {(screen === "PHOTO_MODIFY" || screen === "PHOTO_MAIN") &&
                    ((photoZoneDataListContext[pagingDataContext.PHOTO_MAIN].uri === "" ||  photoZoneDataListContext[pagingDataContext.PHOTO_MAIN].uri === undefined || src.uri === "" || src.uri === undefined) &&
                    <PhotoBoxDefaultTxt>{text}</PhotoBoxDefaultTxt>)} */}

                    {/* {(screen === "HEALTH_INFO_MODIFY" || screen === "HEALTH_INFO_MAIN") &&
                    ((healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN].uri === "" ||  healthInfoDataListContext[pagingDataContext.HEALTH_INFO_MAIN].uri === undefined || src.uri === "" || src.uri === undefined) &&
                    <PhotoBoxDefaultTxt>{text}</PhotoBoxDefaultTxt>)} */}
                    
                </PhotoBox>         
            </PhotoBoxBtnLayout>
        </Whole>
    );
}

export default PhotoLayout;

{/* <PhotoBoxImg source={{uri:photoZoneDataContext.uri}}/>
                    <PhotoBoxImg source={{uri:"content://media/external/images/media/12076"}}/> */}