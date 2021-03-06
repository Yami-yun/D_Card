import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {heightCal} from '../base/Tool';

const Whole= styled.View`
    align-items:center;
    margin: ${heightCal(30)}px 0;
`;

const InstructionDetailBox = styled.View`
    height: ${heightCal(216)}px;
    width: 100%;

    border-radius: 5px;
    background: #ffffff;
`;

const InstructionDetailHeader = styled.View`
    height: 18%;
    background: #2A65AF;
    border-radius: 5px;

    justify-content: center;
    padding-left: 29px;
`;
const InstructionDetailHeaderTxt = styled.Text`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #FFFFFF;
`;
const InstructionDetailBody = styled.View`
    height: 82%;
    padding : 22px 20px 20px 20px;
`;
const InstructionDetailBodyTxt = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: rgba(0, 0, 0, 0.5);
`;

interface Props{
    detail?:string;
}

function InstructionDetail({detail}:Props){

    
    return(<Whole >
        <InstructionDetailBox style={styles.BoxShadow}>
            <InstructionDetailHeader><InstructionDetailHeaderTxt>자세한 내용</InstructionDetailHeaderTxt></InstructionDetailHeader>
            <InstructionDetailBody>
                <InstructionDetailBodyTxt>
                    {detail}
                </InstructionDetailBodyTxt>
            </InstructionDetailBody>
        </InstructionDetailBox>
    </Whole>);
}

const styles = StyleSheet.create({
    BoxShadow:{
        elevation: 4,
    },
});

export default InstructionDetail;