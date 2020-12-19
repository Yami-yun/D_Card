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
    useSetEmergencyCallDataContext,
    useSetPagingDataContext,
    useEmergencyCallDataListContext,
    useHealthInfoDataListContext,
} from '../base/context';

// Title above Photo Layout, ok
const Whole = styled.View``;

// Main(Medicine photo, self Photo, Emergency call) Layout
const TitleBox = styled.View`
    width: 100%;
    height: 50px;
    padding-left : 20px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    background: ${props=>(props.color)};
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

    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
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
    id?: string;
    emergencyData?:any;
};

function TitleLayout({title, color, screen, id, emergencyData}:Props){
    const pagingDataContext = usePagingDataContext();
    const setPagingDataContext = useSetPagingDataContext();

    const setPhotoZoneDataListContext = useSetPhotoZoneDataListContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();

    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();
    const screenDisplayStateContext = useScreenDisplayStateContext();

    // show (delete, modify icon) if click
    const [isShowIcon, setIsShowIcon] = useState(false);
    const setHealthInfoDataListContext = useSetHealthInfoDataListContext();
    const healthInfoDataListContext = useHealthInfoDataListContext();

    const setEmergencyCallDataListContext = useSetEmergencyCallDataListContext();
    const setEmergencyCallDataContext = useSetEmergencyCallDataContext();
    const emergencyCallDataListContext = useEmergencyCallDataListContext();

    if(color === undefined){
        if(screen === "PHOTO_MAIN"){
            color = "#2A65AF";
        }
        else if(screen === "HEALTH_INFO_MAIN"){
            color = "#ED3B3B";
        }
        else{
            color = "#ED3B3B";
        }
    }

    // click > show Modify Page about current shown data
    const moveEditPage = () => {
        if(screen === "EMERGENCY_CALL_MAIN"){
            if(emergencyCallDataListContext.length !== 0){          // 데이터가 없을 경우 modify 방지
                console.log("EMERGENCY_CALL_MAIN");
                console.log(emergencyData);
                setEmergencyCallDataContext({...emergencyData});
                setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/MAIN/g, 'MODIFY'), stage:2});
            }
        }
        else{
            if(photoZoneDataListContext.length !== 0 && screen === "PHOTO_MAIN"){
                setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/MAIN/g, 'MODIFY'), stage:2});
            }

            if(healthInfoDataListContext.length !== 0 && screen === "HEALTH_INFO_MAIN"){
                setScreenDisplayStateContext({screen:screenDisplayStateContext.screen.replace(/MAIN/g, 'MODIFY'), stage:2});
            }
        }
    }

    // current shown data delete
    const deleteData = () => {
        if(screen === "PHOTO_MAIN"){
            setPhotoZoneDataListContext({type:"DELETE", data:pagingDataContext[screen]});
            // 삭제했을때 페이지 갱신
            // setPhotoZoneDataContext({...photoZoneDataListContext[pagingDataContext.PHOTO_MAIN+1]});
            if(pagingDataContext.PHOTO_MAIN === 0){
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN:pagingDataContext.PHOTO_MAIN});
            }else{
                setPagingDataContext({...pagingDataContext, PHOTO_MAIN:pagingDataContext.PHOTO_MAIN-1});
            }
            
        }
        else if(screen === "HEALTH_INFO_MAIN"){
            setHealthInfoDataListContext({type:"DELETE", data:pagingDataContext[screen]});

            if(pagingDataContext.HEALTH_INFO_MAIN === 0){
                setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN:pagingDataContext.HEALTH_INFO_MAIN});
            }else{
                setPagingDataContext({...pagingDataContext, HEALTH_INFO_MAIN:pagingDataContext.HEALTH_INFO_MAIN-1});
            }
        }
        else{
            let cmp = emergencyCallDataListContext.length;
            console.log("PLEASE!!!!!!!!!!!!!!!!!!!");
            console.log(cmp);

            // 맨 마지막에 하나 연락처 삭제하면 마지막 페이지로 넘기기
            setEmergencyCallDataListContext({type:"DELETE", data:id});
            // 삭제요소가 홀수번째이고 마지막 페이지 요소 이며, 요소 개수가 하나가 아닐때
            if((pagingDataContext.EMERGENCY_CALL_MAIN ===  Math.round(cmp/2)-1) && (cmp%2 !== 0) && (cmp !== 1)){
                setPagingDataContext({...pagingDataContext, EMERGENCY_CALL_MAIN: Math.round(cmp/2)-2});
            }
        }
        setIsShowIcon(false);
    }

    return(
        <Whole>
            <TitleBox color={color}>
                <TitleTxt>{title}</TitleTxt>
                <BtnList wide={isShowIcon}>
                    <LeftBtnBox onPress={()=>{setIsShowIcon(!isShowIcon);}}>
                        <LeftBtn source={require('../img/leftBtn.png')}/>
                    </LeftBtnBox>
                    {isShowIcon &&<HideBtnBoxList>
                        <HideBtnBox onPress={()=>{moveEditPage();}}>
                            <LeftBtn source={require('../img/pencilIcon.png')}/>
                        </HideBtnBox>
                        <HideBtnBox onPress={()=>{deleteData();}}>
                            <LeftBtn source={require('../img/trashIcon.png')}/>
                        </HideBtnBox>
                    </HideBtnBoxList>}
                </BtnList>
            </TitleBox>        
        </Whole>
    );
}

export default TitleLayout;