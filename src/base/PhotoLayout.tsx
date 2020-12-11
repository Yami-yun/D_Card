import React from 'react';
import styled from 'styled-components/native';
import * as ImagePicker from '../imagePicker/index';
import {usePhotoZoneDataContext, useSetPhotoZoneDataContext} from '../base/context';


const Whole = styled.View`

    height : ${props=>(props.height) || 176}px;
    /* height: 186px; */
    /* padding: 0 22px; */
    justify-content: center;
    align-items: center;

    border: 1px #9D9A9A;;
`;


const PhotoBox = styled.View`
    height: 100%;
    padding: 0.5px
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
    screen?: string;
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
    console.log(src);

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
                    if(screen === "PHOTO_MODIFY"){
                        setPhotoZoneDataContext({...photoZoneDataContext, uri:response.uri, width:response.width, height:response.height });
                        console.log("test");
                        console.log(response);
                    }
                    else if(screen === "HEALTH_INFO_MODIFY"){
                        console.log("PhotoLayout.tsx, pickImg : ");
                    }
                },
            )
        }
    };

    // cover contain stretch repeat center
    return(
        <Whole height={height}>

            <PhotoBoxBtnLayout onPress={()=>{pickImg()}}>
                <PhotoBox>
                    {(screen === "PHOTO_MODIFY" || screen === "HEALTH_INFO_MODIFY") && <PhotoBoxImg resizeMode='stretch' source={photoZoneDataContext.uri === "" ? imgSrc[defaultTypes] : {uri:photoZoneDataContext.uri}}/>}
                    {(screen === "PHOTO_MAIN" || screen === "HEALTH_INFO_MAIN") && <PhotoBoxImg resizeMode='stretch' source={src.uri === "" ? imgSrc[defaultTypes] : {uri:src.uri}}/>}
                    {(photoZoneDataContext.uri === "" && src.uri === "" ) && <PhotoBoxDefaultTxt>{text}</PhotoBoxDefaultTxt>}
                </PhotoBox>         
            </PhotoBoxBtnLayout>
        </Whole>
    );
}

export default PhotoLayout;

{/* <PhotoBoxImg source={{uri:photoZoneDataContext.uri}}/>
                    <PhotoBoxImg source={{uri:"content://media/external/images/media/12076"}}/> */}