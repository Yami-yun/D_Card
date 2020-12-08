import React from 'react';
import styled, {css} from 'styled-components/native';
import Button from './button';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {widthCal, heightCal, getDeviceWidth, getDeviceHeight} from '../base/Tool';
// 기능 : main일 경우 내용 Count, Add, Modify 버튼 기능
// Health , Emergency, Photo page  상단 바 역할
const Whole = styled.View`
/* INFO Screen || Modify Screen || Add Screen */
    height: ${heightCal(90)}px;

    ${(props:{type?: 'INFO' | 'MODIFY' | 'ADD' | "H_MODIFY"})=>props.type === 'ADD' ? css`justify-content: flex-end` : css`justify-content: space-between`}

    height:75px;
    /* border: 1px; */
    flex-direction:row;
    align-items: center;
    
    ${(props:{type?: 'INFO' | 'MODIFY' | 'ADD' | "H_MODIFY"})=>(props.type !== "H_MODIFY") ? css`padding: 0 4%` : css`padding: 0%`};
    
    padding-top: 15px;

`;

const InfoTxt = styled.Text`
    margin-left: 4.3%;
    
    font-weight: bold;
    font-size: 15px;    
    color: #555555;
`;

const DeleteIconBox = styled.View`
    width:43px;
    height: 43px;
    justify-content:center;
    align-items:center;

    background: #2A65AF;
    border-radius: 30px;
`;

interface Props{
    totalCount?:number;
    type?: 'INFO' | 'MODIFY' | 'ADD' | 'H_MODIFY';
    text?: string;
    bottom?: number;
};

function TopSectionInfo({totalCount, type, text}:Props){

    return(
        <Whole type={type} >
            {type==='INFO' && <InfoTxt>총 {totalCount}개의 내용이 존재합니다.</InfoTxt>}
            {type=== ('MODIFY') && <DeleteIconBox><FontAwesomeIcon icon={faTrashAlt} size={24} color={'#ffffff'} /></DeleteIconBox>}
            {type=== ('H_MODIFY') && <DeleteIconBox><FontAwesomeIcon icon={faTrashAlt} size={24} color={'#ffffff'} /></DeleteIconBox>}

            <Button text={text}/>
        </Whole>
    );
}

export default TopSectionInfo;