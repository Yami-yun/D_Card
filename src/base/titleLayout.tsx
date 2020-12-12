import React, {useState} from 'react';
import styled from 'styled-components/native';
import {
    usePagingDataContext,
    useSetPhotoZoneDataListContext,
    usePhotoZoneDataListContext,
    useSetScreenDisplayStateContext,
    useScreenDisplayStateContext,
    useSetHealthInfoDataListContext,
    useSetEmergencyCallDataListContext,
} from '../base/context';

const Whole = styled.View`
`;

// Main(Medicine photo, self Photo, Emergency call) Layout
const TitleBox = styled.View`
    width: 100%;
    height: 50px;
    padding-left : 20px;

    flex-direction: row;
    /* justify-content: space-between; */
    justify-content: space-between;
    align-items: center;
    
    background: ${props=>(props.color)};
    border: 1px;
    border-radius: 5px;
`;

const TitleTxt = styled.Text`
    font-weight: bold;
    font-size: 12px;
    color: #FFFFFF;
`;

const BtnList = styled.View`
    position:absolute;
    right:0px;
    width: ${props=>(props.wide ? 150 : 50)}px;
    /* width: ${props=>(props.wide && 50)}px; */
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;

    /* border: 1px yellow; */
`;

const LeftBtnBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width: 50px;
    height: 48px;

    justify-content:center;
    align-items:center;
`;

const HideBtnBoxList = styled.View`
    width: 100px;
    height: 48px;
    flex-direction: row;
`;

const HideBtnBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width: 50px;
    height: 48px;

    justify-content:center;
    align-items:center;

    background: #FFFFFF;
    border: 1px solid #164580;
    border-radius: 5px;
`;

const LeftBtn = styled.Image``;

interface Props{
    title?: string;
    color?: string;
    screen?: string;
};

function TitleLayout({title, color, screen}:Props){
    const pagingDataContext = usePagingDataContext();
    const setPhotoZoneDataListContext = useSetPhotoZoneDataListContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();
    const screenDisplayStateContext = useScreenDisplayStateContext();
    const [isShowIcon, setIsShowIcon] = useState(false);
    const setHealthInfoDataListContext = useSetHealthInfoDataListContext();

    const setEmergencyCallDataListContext = useSetEmergencyCallDataListContext();

    if(color === undefined){
        if(screen === "PHOTO_MAIN"){
            color = "#2A65AF";
        }
        else if(screen === "HEALTH_INFO_MAIN"){
            color = "#ED3B3B";
        }
    }

    //click > show delete & modify icon
    const showIcon = () => {
        setIsShowIcon(!isShowIcon);
    }

    // click > show PhotoZone Modify Page about current shown photo data
    const editPhoto = () => {
        setScreenDisplayStateContext(screenDisplayStateContext.replace(/MAIN/g, 'MODIFY'));
    }

    // current shown photo data delete
    const deletePhoto = () => {
        if(screen === "PHOTO_MAIN"){
            setPhotoZoneDataListContext({type:"DELETE", data:pagingDataContext[screen]});
        }
        else if(screen === "HEALTH_INFO_MAIN"){
            setHealthInfoDataListContext({type:"DELETE", data:pagingDataContext[screen]})
        }
        else{
            // 지우는 거 생각하기 다시.... 하...
            setEmergencyCallDataListContext({type:"DELETE", data:pagingDataContext[screen]})
        }
        
    }

    return(
        <Whole>
            <TitleBox color={color}>
                <TitleTxt>{title}</TitleTxt>
                <BtnList wide={isShowIcon}>
                    <LeftBtnBox onPress={()=>{showIcon();}}>
                        <LeftBtn source={require('../img/leftBtn.png')}/>
                    </LeftBtnBox>
                    {isShowIcon &&<HideBtnBoxList>
                        <HideBtnBox onPress={()=>{editPhoto();}}>
                            <LeftBtn source={require('../img/pencilIcon.png')}/>
                        </HideBtnBox>
                        <HideBtnBox onPress={()=>{deletePhoto();}}>
                            <LeftBtn source={require('../img/trashIcon.png')}/>
                        </HideBtnBox>
                    </HideBtnBoxList>}
                </BtnList>
            </TitleBox>        
        </Whole>
    );
}

export default TitleLayout;