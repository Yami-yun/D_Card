import React from 'react';
import styled from 'styled-components/native';

import {widthCal, heightCal} from '../base/Tool';

const Whole= styled.View`
    align-items:center;

    margin: ${heightCal(30)}px 0;
    
`;

const InstructionDetailBox = styled.View`
    /* width: ${widthCal(315)}%;*/
    height: ${heightCal(216)}px;
    width: 100%;
    /* height: 288px; */

    /* border: 1px; */
`;

const InstructionDetailHeader = styled.View`
    /* width: 315px; */
    /* height: 42px; */
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
    border : 1px red;
    padding : 22px 20px 20px 20px;
`;
const InstructionDetailBodyTxt = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: rgba(0, 0, 0, 0.5);
`;

function InstructionDetail(){

    
    return(<Whole>
        <InstructionDetailBox>
            <InstructionDetailHeader><InstructionDetailHeaderTxt>자세한 내용</InstructionDetailHeaderTxt></InstructionDetailHeader>
            <InstructionDetailBody>
                <InstructionDetailBodyTxt>
                    사진에 대한 내용이 들어갑니다.
                    사진에 대한 내용이 들어갑니다.
                    사진에 대한 내용이 들어갑니다.
                    사진에 대한 내용이 들어갑니다.
                    사진에 대한 내용이 들어갑니다.
                    사진에 대한 내용이 들어갑니다.
                    사진에 대한 내용이 들어갑니다.
                    사진에 대한 내용이 들어갑니다.
                    
                       데이터 길이 제한
                </InstructionDetailBodyTxt>
            </InstructionDetailBody>
        </InstructionDetailBox>
    </Whole>);
}


export default InstructionDetail;