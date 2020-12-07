import React from 'react';
import styled, {css} from 'styled-components/native';
import Button from './button';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

// 기능 : main일 경우 내용 Count, Add, Modify 버튼 기능
// Health , Emergency, Photo page  상단 바 역할
const Whole = styled.View`

    ${(props:{type?: 'INFO' | 'MODIFY' | 'ADD'})=>props.type === 'ADD' ? css`justify-content: flex-end` : css`justify-content: space-between`}

    flex-direction:row;
    align-items: center;

    /* margin-top: 29px; */
    /* margin-bottom: 18px; */
    /* margin-top: 8.3%; */
`;

const InfoTxt = styled.Text`
    
    font-weight: bold;
    font-size: 15px;
    margin-left: 4.3%;
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
    type?: 'INFO' | 'MODIFY' | 'ADD';
    text?: string;
};

function TopSectionInfo({totalCount, type, text}:Props){

    return(
        <Whole type={type}>
            {type==='INFO' && <InfoTxt>총 {totalCount}개의 내용이 존재합니다.</InfoTxt>}
            {type==='MODIFY' && <DeleteIconBox><FontAwesomeIcon icon={faTrashAlt} size={24} color={'#ffffff'} /></DeleteIconBox>}

            <Button text={text}/>
        </Whole>
    );
}

export default TopSectionInfo;