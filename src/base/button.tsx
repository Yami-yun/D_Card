import React from 'react';
import styled from 'styled-components/native';
import {useSetInstructionDataContext, useSetScreenDisplayStateContext} from './context';
import {ToastAndroid} from 'react-native';

// Instruction Modify page Btn ok
const Whole = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0.9)"}
)`
    width: 100px;
    height: 40px;

    justify-content:center;
    align-items:center;

    background: #8EB9E1;
    border-radius: 3px;    
`;

const BtnText = styled.Text`
    font-weight: bold;
    font-size: 12px;

    color: #222222;
`;

interface Props{
    text:string;
    processType:string;
    data: any;
    screenType: any;
};

// screenType : move to screen if click,  data : instruction input data,  proccessType: setinstructionDatacontext process type, text : btn text
function Button({text, processType, data, screenType}:Props){
    const setInstructionDataContext = useSetInstructionDataContext();
    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    const clickEvent = () =>{
        if(data.guardCall.numFront !== "" && data.guardCall.numMiddle !== "" && data.guardCall.numBack !== "" && data.address !== "" && data.name !== undefined)
        {
            setInstructionDataContext({type:processType ,data:data});
            setScreenDisplayStateContext(screenType);
        }
        else{
            ToastAndroid.show('주소, 보호자 번호, 이름을 넣어주세요.',ToastAndroid.SHORT);
        }
    }

    return(
        <Whole onPress={()=>{clickEvent()}}>
            <BtnText>{text}</BtnText>
        </Whole>
    );
}

export default Button;