import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from './TopSectionInfo';
import MainFunctionLayout from './MainFunctionLayout';
import PagingBtnLayout from './PagingBtnLayout';
import Header from './Header';
import TitleLayout from './titleLayout';
// import EmergencyCallLayout from './EmergencyCallLayout';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';


const Whole = styled.View`
    height : 70px;
    /* border: 1px; */
    justify-content: space-around;
    
`;

const CategoryTitle = styled.Text`
    padding-left: 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;


    color: #222222;
`;

const CategoryList = styled.View`

`;

const CategoryItem = styled.View`
    height: 44px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #ED3B3B;
    border: 1px solid #9D9A9A;
    
    border-radius: 5px;
    padding : 0 16px;
`;

const CategoryItemTxt = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;

    color: #FFFFFF;
`;

function CategorySelectorLayout(){
    
    return(
        <Whole>
            <CategoryTitle>구분</CategoryTitle>
            <CategoryList>
                <CategoryItem>
                    <CategoryItemTxt>필수 : 상대방이 반드시 알아야 할 내용</CategoryItemTxt>
                    <FontAwesomeIcon icon={faChevronDown} size={22} color={'#ffffff'} />
                </CategoryItem>
            </CategoryList>

        </Whole>
    );
}


export default CategorySelectorLayout;