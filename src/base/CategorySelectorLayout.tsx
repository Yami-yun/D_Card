import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

// Modify & Add Screen >  Category item

const Whole = styled.View`
    height : 70px;
    margin-top:4.5%;
    
    justify-content: space-around;

    /* border : 1px blue; */
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

const SelectBtnBoxList = styled.View`
    position:absolute;
    /* top: 0px; */
    left: 0px;

    width: 100%;
    height: 126px;

`;

const SelectBtnBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    height: 42px;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    

    background: #ED3B3B;
    border: 1px solid #9D9A9A;
    border-radius: 5px;  

`;
const SelectBtnTxt = styled.Text`

`;

function CategorySelectorLayout(){
    
    return(
        <Whole styles={styles.list}>
            <CategoryTitle>구분</CategoryTitle>
            <CategoryList>
                <CategoryItem>
                    <CategoryItemTxt>필수 : 상대방이 반드시 알아야 할 내용</CategoryItemTxt>
                    {/* <FontAwesomeIcon icon={faChevronDown} size={22} color={'#ffffff'} /> */}
                    <BelowBtn source={require("../img/belowBtn.png")}/>
                </CategoryItem>

                <SelectBtnBoxList >
                    <SelectBtnBox>
                        <CategoryItemTxt>필수 : 상대방이 반드시 알아야 할 내용</CategoryItemTxt>
                    </SelectBtnBox>
                    <SelectBtnBox>
                        <CategoryItemTxt>중요: 당사자에게 매우 중요한 내용</CategoryItemTxt>
                    </SelectBtnBox>
                    <SelectBtnBox>
                        <CategoryItemTxt>선호: 나의 선호에 관한 내용</CategoryItemTxt>
                    </SelectBtnBox>
                </SelectBtnBoxList>
            </CategoryList>
            

        </Whole>
    );
}

const styles = StyleSheet.create({
    list:{
       
        elevation: 7,
    },
  });


export default CategorySelectorLayout;