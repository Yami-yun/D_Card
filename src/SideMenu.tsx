import React, {useState, useRef, useEffect} from 'react';
import styled, {css} from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { Animated, StyleSheet, View, BackHandler } from 'react-native';
import { 
    useMenuStateContext, 
    useSetMenuStateContext, 
    useScreenDisplayStateContext, 
    useSetScreenDisplayStateContext, 
    usePhotoZoneDataListContext, 
    useSetPhotoZoneDataContext, 
    useSetPagingDataContext, 
    usePagingDataContext,
    useSetHealthInfoDataContext,
    useHealthInfoDataListContext,
} from "./base/context";
import 'react-native-gesture-handler';

const TopLayout = styled.View`
    height: 80px;
    padding-top: 22px;
    padding-left: 12px;
`;

const TopTextLayout = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    width: 80px;
    margin-top : 5px;
    flex-direction: row;
    ${props => {props.txtColor === "hover" && css`color: #222222`}};
`;

const AppNameTxt = styled.Text`

    font-weight: bold;
    font-size: 12px;
    color: #222222;
`;

const EnrollTxt = styled.Text`
    font-weight: 100;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
`;

const CloseBtnBox = styled.TouchableHighlight`
    position: absolute;
    top:21px;
    right:12px;
    width: 38px;
    height: 38px;
`;

const CloseBtn = styled.Image`
`;

const MenuItemBox = styled.View`
    height: 60px;
    padding-left: 13px;
    padding-right: 22px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom-width: 3px;
    border-bottom-color: #335C90;
`;

const MenuItemLayoutBtn = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0.9)"}
)``;

const MenuItemTxt = styled.Text`
    font-weight: normal;
    font-size: 12px;
    color: #000000;
    ${props => {props.txtColor === "hover" && css`color: #222222`}};
`;

const MoveIcon = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 5px;
`;

// 저작권 표시 Section
const CopyrightBox = styled.View`
    width: 100%;
    height: 100%;
    padding-bottom: 55px;
    

    justify-content: center;
    align-items: center;
`;

const CopyrightTxt = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
`;

interface Props{
    isClose: boolean;
    children: JSX.Element | Array<JSX.Element>;

};

// const Test = ({isClose, children}: Props) => (
//         <Whole animation={isClose ? 'bounceInRight' : 'bounceInLeft'} iterationCount={2} >
//             {children}
//         </Whole>
// )
// {menuStateContext && <Animated.View  style={[{translateX: fadeAnim}, styles.menu ]}></Animated.View>

function SideMenu(){
    const menuStateContext = useMenuStateContext();
    const setMenuStateContext = useSetMenuStateContext();
    const screenDisplayStateContext = useScreenDisplayStateContext();
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();
    const photoZoneDataListContext = usePhotoZoneDataListContext();
    const setPhotoZoneDataContext = useSetPhotoZoneDataContext();
    const setPagingDataContext = useSetPagingDataContext();
    const pagingDataContext = usePagingDataContext();
    const setHealthInfoDataContext = useSetHealthInfoDataContext();
    const healthInfoDataListContext = useHealthInfoDataListContext();

    const aniRef = useRef(null);

    let txtColor:"basic" | "press" = "basic";

    const screenChange =(screenName) => {
        setMenuStateContext(false);
        setScreenDisplayStateContext(screenName);
        txtColor = "press";
    }
    
    const isClose = () => {
        setMenuStateContext(false);
    }

    return(
    <>    
        {menuStateContext && <View  style={[styles.menu]}>
            <TopLayout>
                    
                <AppNameTxt>치매노인수첩 [ D-Card ]</AppNameTxt>
                <CloseBtnBox onPress={isClose}>
                    <CloseBtn source={require("./img/xicon2.png")} />
                </CloseBtnBox>
                <TopTextLayout onPress={()=>{screenChange({screen:"MAIN", stage:0})}}>
                    <EnrollTxt txtColor={txtColor}>홈으로 가기</EnrollTxt>
                </TopTextLayout>
                    
            </TopLayout>
                <MenuItemLayoutBtn name="치매노인수첩 [ D- Card ]란?" onPress={()=>{screenChange({screen:"APP_INFO", stage:1}); }}>
                    <MenuItemBox style={{borderTopWidth: 3, borderTopColor: '#335C90'}}>
                        <MenuItemTxt>치매노인수첩 [ D- Card ]란?</MenuItemTxt>
                        <MoveIcon>›</MoveIcon>
                    </MenuItemBox>
                </MenuItemLayoutBtn>

            <MenuItemLayoutBtn name="자기소개" onPress={()=>{screenChange({screen:"INSTRUCTION_MAIN", stage:1}); }}>
                    <MenuItemBox>
                        <MenuItemTxt txtColor={txtColor}>자기소개</MenuItemTxt>
                        <MoveIcon>›</MoveIcon>
                    </MenuItemBox>
                </MenuItemLayoutBtn>
                <MenuItemLayoutBtn name="사진첩" onPress={()=>{
                    screenChange({screen : "PHOTO_MAIN", stage:1});
                    if(photoZoneDataListContext[0] !== undefined){
                        setPhotoZoneDataContext({...photoZoneDataListContext[0]});
                    }
                    setPagingDataContext({...pagingDataContext, "PHOTO_MAIN" :0});
                }}>
                    <MenuItemBox>
                        <MenuItemTxt txtColor={txtColor}>사진첩</MenuItemTxt>
                        <MoveIcon>›</MoveIcon>
                    </MenuItemBox>
                </MenuItemLayoutBtn>
                <MenuItemLayoutBtn name="긴급연락처" onPress={()=>{
                    screenChange({screen : "EMERGENCY_CALL_MAIN", stage:1});
                    setPagingDataContext({...pagingDataContext, "EMERGENCY_CALL_MAIN" :0});
                }}>
                    <MenuItemBox>
                        <MenuItemTxt txtColor={txtColor}>긴급연락처</MenuItemTxt>
                        <MoveIcon>›</MoveIcon>
                    </MenuItemBox>
                </MenuItemLayoutBtn>
                <MenuItemLayoutBtn name="건강정보" onPress={()=>{
                    screenChange({screen : "HEALTH_INFO_MAIN", stage:1});
                    if(healthInfoDataListContext[0] !== undefined){
                        setHealthInfoDataContext({...healthInfoDataListContext[0]});
                    }
                    setPagingDataContext({...pagingDataContext, "HEALTH_INFO_MAIN" :0});
                }}>
                    <MenuItemBox>
                        <MenuItemTxt txtColor={txtColor}>건강정보</MenuItemTxt>
                        <MoveIcon>›</MoveIcon>
                    </MenuItemBox>
                </MenuItemLayoutBtn>
                <CopyrightBox>
                    <CopyrightTxt>copyright smunal © all rights reserved </CopyrightTxt>
                </CopyrightBox>
        </View>}
    </>
    );
}

const styles = StyleSheet.create({
menu:{
    position:'absolute',
    left: 0,
    top:0,
    width:'57%',
    height: '100%',
    
    backgroundColor: '#8EB9E1',
    elevation: 9,
},
menuNoOpacity:{
    display:'none',
    opacity:0,
    width:'85.5%',
}

});



export default SideMenu;
