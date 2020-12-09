import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { Animated, StyleSheet, View } from 'react-native';
import { useMenuStateContext, useSetMenuStateContext} from "./base/context";



const TopLayout = styled.View`

    height: 80px;
    padding-top: 22px;
    padding-left: 12px;
`;

const TopTextLayout = styled.View`
    margin-top : 5px;
    display:flex;
    flex-direction: row;
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

const MenuItemLayout = styled.View`
    height: 60px;
    padding-left: 13px;
    padding-right: 22px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom-width: 3px;
    border-bottom-color: #335C90;
`;

const MenuItemTxt = styled.Text`
    font-weight: normal;
    font-size: 12px;
    color: #000000;
`;

const MoveIcon = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const CopyrightBox = styled.View`
    width: 100%;
    height: 100%;
    padding-bottom: 17px;

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
    const [isCloseMenu, setIsCloseMenu] = useState(0);
    
    const aniRef = useRef(null);
    const fadeAnim = useRef(new Animated.Value(-300)).current
    
    const isClose = () => {
        // setIsCloseMenu(-100);
        setMenuStateContext(false);
        console.log("Okay");
    }
    // , (isCloseMenu===-100)&&styles.menuNoOpacity
    // React.useEffect(()=>{
    //     Animated.timing(
    //         fadeAnim, {toValue: isCloseMenu, duration: 300, useNativeDriver: true}).start();
    //     }, [fadeAnim, isCloseMenu])

    return(
    <>    
    
    {menuStateContext && <View  style={[styles.menu ]}>
        <TopLayout id="menu">
                
                <AppNameTxt>치매노인수첩 [ D-Card ]</AppNameTxt>
                <CloseBtnBox onPress={isClose}>
                    <CloseBtn source={require("./img/xicon2.png")} />
                </CloseBtnBox>
                <TopTextLayout>
                    <EnrollTxt>로그인</EnrollTxt>
                    <EnrollTxt>  |  </EnrollTxt>
                    <EnrollTxt>회원가입</EnrollTxt>
                </TopTextLayout>
                
            </TopLayout>
            <MenuItemLayout style={{borderTopWidth: 3, borderTopColor: '#335C90'}}>
                <MenuItemTxt>치매노인수첩 [ D- Card ]란?</MenuItemTxt>
                <MoveIcon>›</MoveIcon>
            </MenuItemLayout>
            <MenuItemLayout>
                <MenuItemTxt>자기소개</MenuItemTxt>
                <MoveIcon>›</MoveIcon>
            </MenuItemLayout>
            <MenuItemLayout>
                <MenuItemTxt>사진첩</MenuItemTxt>
                <MoveIcon>›</MoveIcon>
            </MenuItemLayout>
            <MenuItemLayout>
                <MenuItemTxt>긴급연락처</MenuItemTxt>
                <MoveIcon>›</MoveIcon>
            </MenuItemLayout>
            <MenuItemLayout>
                <MenuItemTxt>건강정보</MenuItemTxt>
                <MoveIcon>›</MoveIcon>
            </MenuItemLayout>
            <CopyrightBox>
                <CopyrightTxt>copyright © all rights reserved</CopyrightTxt>
            </CopyrightBox>
    </View>
}
    </>
    );
}

const styles = StyleSheet.create({
menu:{
    position:'absolute',
     left: 0,
     top:0,
     /* width: 55.55%; */
     width:'55.5%',
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
