import React from 'react';
import styled from 'styled-components/native';


const Whole = styled.View`
    height : ${props=>(props.height) || 176}px;
    /* height: 186px; */
    padding: 0 22px;
    justify-content: center;
    align-items: center;

    border: 1px #9D9A9A;;
`;


const DefaultPhotoBox = styled.View`
    justify-content: space-around;
    align-items: center;
`;

const PhotoBoxImg = styled.Image`
    margin-bottom: 4.5%;
`;

const PhotoBoxDefaultTxt = styled.Text`
    font-family: Noto Sans;
    font-weight: normal;
    font-size: 12px;
    color: rgba(51, 51, 51, 0.5);
`;

interface Props{
    src?:string;
    text?:string;
    height?: number;
};

const imgSrc = {
    camera: require("../img/camera.png"),
    pill: require("../img/pillIcon.png"),
    
}

//"../img/camera.png"
function PhotoLayout({src, text, height}: Props){    
    return(
        <Whole height={height}>

            {/* 이거아니면 && 이미지 */}
            <DefaultPhotoBox>
                <PhotoBoxImg source={imgSrc[src]}/>
                <PhotoBoxDefaultTxt>{text}</PhotoBoxDefaultTxt>
                
            </DefaultPhotoBox>

        </Whole>
    );
}

export default PhotoLayout;