import React from "react";
import styled from "styled-components/native";
import { 
    useSetMenuStateContext,
    useSetAppInfoPageContext,
} from "./context";
// ok
//App Header component on All page

const Whole = styled.View`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content : center;
    align-items : center;
    background: #164580;
`;

const HeaderTxt = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
`;

const MenuIconBox = styled.TouchableHighlight`
    position:absolute;
    top: 14%;
    left: 6%;
    width: 37px;
    height: 37px;
`;

const MenuIcon = styled.Image``;

interface Props{
 text: string;
};

// text : Header text
function Header({text}:Props){
    const setMenuStateContext = useSetMenuStateContext();
    const setAppInfoPageContext = useSetAppInfoPageContext();

    const isOpen = () => {
        setMenuStateContext(true);  // side menu open
        setAppInfoPageContext(0);
    };

    return(
    <>
        <Whole>
            <MenuIconBox onPress={isOpen} >
                <MenuIcon source={require("../img/menuIcon.png")}/>
            </MenuIconBox>
            <HeaderTxt>
                {text}
            </HeaderTxt>
            
        </Whole>
    </>
    );
}

export default Header;