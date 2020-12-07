import React from 'react';
import styled from 'styled-components/native';


const Whole = styled.View`
    padding: 0 22px;
    height: 176px;
    border: 1px;
    justify-content: center;
    align-items: center;
`;


const DefaultPhotoBox = styled.View`
    justify-content: space-around;
    align-items: center;
    /* border: 1px; */
`;

const PhotoBoxImg = styled.Image`
    margin-bottom: 17px;
`;

const PhotoBoxDefaultTxt = styled.Text`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: rgba(51, 51, 51, 0.5);
`;

interface Props{
    src?:string;
    text?:string;
};


//"../img/camera.png"
function PhotoLayout({src, text}: Props){
    let test = "../img/pillIcon.png";
    // let test = src;
    console.log(src===test);
    
    
    return(
        <Whole>

            {/* 이거아니면 && 이미지 */}
            <DefaultPhotoBox>
                <PhotoBoxImg source={require(test)}/>
                <PhotoBoxDefaultTxt>{text}</PhotoBoxDefaultTxt>
                
            </DefaultPhotoBox>

        </Whole>
    );
}

export default PhotoLayout;