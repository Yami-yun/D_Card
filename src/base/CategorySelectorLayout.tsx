import React from 'react';
import styled from 'styled-components/native';

// Modify & Add Screen >  Category item

const Whole = styled.View`
    height : 70px;
    margin-top:4.5%;
    
    justify-content: space-around;
`;

const CategoryTitle = styled.Text`
    padding-left: 1.5%;
    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #222222;
`;

const CategoryList = styled.View``;

const CategoryItem = styled.View`
    height: 44px;
    padding : 0 18px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    background: #ED3B3B;
    border: 1px solid #9D9A9A;
    border-radius: 5px;    
`;

const CategoryItemTxt = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;

    color: #FFFFFF;
`;

const BelowBtn = styled.Image``;

function CategorySelectorLayout(){
    
    return(
        <Whole>
            <CategoryTitle>구분</CategoryTitle>
            <CategoryList>
                <CategoryItem>
                    <CategoryItemTxt>필수 : 상대방이 반드시 알아야 할 내용</CategoryItemTxt>
                    {/* <FontAwesomeIcon icon={faChevronDown} size={22} color={'#ffffff'} /> */}
                    <BelowBtn source={require("../img/belowBtn.png")}/>
                </CategoryItem>
            </CategoryList>

        </Whole>
    );
}


export default CategorySelectorLayout;