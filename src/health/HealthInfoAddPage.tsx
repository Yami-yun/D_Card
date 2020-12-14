import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';
import TopSectionInfo from '../base/TopSectionInfo';
import Header from '../base/Header';
import CategorySelectorLayout from '../base/CategorySelectorLayout';
import PhotoLayout from '../base/PhotoLayout';

import {InputBox, Input, BigInput, InputLabel} from '../base/input';
import { ScrollView, BackHandler } from 'react-native';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';
import {useHealthInfoDataContext, useSetHealthInfoDataContext, useSetScreenDisplayStateContext, useHealthInfoDataListContext, usePagingDataContext, initHealthInfoData} from '../base/context';

// Health Info Modify Page  건강 정보 변경 페이지
const Whole = styled.View`
    width: ${getDeviceWidth()}px;

    /* height: ${props => (getDeviceHeightNoInfo() + props.isFocus)}px; */
    /* height: ${props=>props.isFocus && 1500}px; */
    /* border: 3px red; */
    flex-grow:1;
    padding: 0 4%;
    /* justify-content: space-around; */
`;

const CategoryLayout = styled.View`
    /* height : 70px; */
    /* height: 45px; */
    margin-top:4.5%;
    
    justify-content: space-around;

    /* border : 1px blue; */
`;

const CategoryTitle = styled.Text`
    padding-left: 1.5%;
    margin-bottom: 5px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #222222;
`;

const CategoryList = styled.View`
    
`;

const SelectedCategoryItem = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    height: 44px;
    

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    
    border: 1px solid #9D9A9A;
    border-radius: 5px;    
`;

const SelectedBox = styled.View`
    width: 100%;
    height: 100%;

    padding : 0 18px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #ED3B3B;
`;

const CategoryItemTxt = styled.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;

    color: #FFFFFF;
`;

const BelowBtnBox = styled.View``;

const BelowBtn = styled.Image``;

const SelectBtnBoxList = styled.View`
    /* position:absolute; */
    /* top: 0px; */
    /* left: 0px; */

    width: 100%;
    height: 126px;

`;

const SelectBtnBox = styled.TouchableHighlight.attrs({
    activeOpacity: 0.6,
    underlayColor:"rgba(255, 255, 255, 0)"}
)`
    height: 44px;
    padding : 0 18px;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    border-radius: 5px;  
    
`;
const SelectBtnTxt = styled.Text`

`;

let holderTxt = "치매노인환자분에 대한 건강과 관련된 자세한 내용을 적어주세요.\n- 약물 복용 관련\n작성예시)\n진단명 :\n복용약:\n혈액형 :\n\n특이사항:\n\n- 기타 약물 관련\n작성예시)\n눈이 자주 건조하셔서 00 안약을 넣어 주시면 좋습니다";

const categoryData = [
    {
        title:"필수 : 상대방이 반드시 알아야 할 내용",
        color:"#ED3B3B",
    },
    {
        title:"중요: 당사자에게 매우 중요한 내용",
        color:"#FE8C49",
    },
    {
        title:"선호: 나의 선호에 관한 내용",
        color:"#AAD462",
    },
];

function HealthInfoAddPage(){
    // const desciptionInputRef = useRef(null);

    const setHealthInfoDataContext = useSetHealthInfoDataContext();
    const healthInfoDataContext = useHealthInfoDataContext();

    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();

    const healthInfoDataListContext = useHealthInfoDataListContext();
    const pagingDataContext = usePagingDataContext();

    useEffect(() => {
        setHealthInfoDataContext({...initHealthInfoData});
        const backAction = () => {
            // 뒤로 갈때 이전 페이지 정보 갱신
            setHealthInfoDataContext({...healthInfoDataListContext[pagingDataContext.PHOTO_MAIN]});
            setScreenDisplayStateContext({screen:"HEALTH_INFO_MAIN",stage:1});
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isCategoryNum, setIsCategoryNum] = useState(0);
    holderTxt.replace(/\n/g, '<br/>');
    return(
        <>
            <Header text="건강정보 | 추가하기"/>
            <Whole>
                <ScrollView>
                    <TopSectionInfo totalCount={2} type="ADD" text="등록 하기" screen = "HEALTH_INFO_MODIFY"/>

                    <PhotoLayout text="복용하는 약물 사진을 넣어주세요." src="" defaultTypes="pill" screen = "HEALTH_INFO_MODIFY"/>
                    
                    <CategoryLayout >
                        <CategoryTitle>구분</CategoryTitle>
                        <CategoryList>
                            <SelectedCategoryItem onPress={()=>{setIsCategoryOpen(!isCategoryOpen);}}>
                                <SelectedBox style={{backgroundColor:categoryData[isCategoryNum].color}}>
                                    <CategoryItemTxt>{categoryData[isCategoryNum].title}</CategoryItemTxt>
                                    
                                    <BelowBtnBox>
                                        <BelowBtn source={require("../img/belowBtn.png")}/>
                                    </BelowBtnBox>
                                </SelectedBox>
                            </SelectedCategoryItem>

                            {isCategoryOpen && <SelectBtnBoxList >
                                {isCategoryNum !== 0 && <SelectBtnBox style={{ backgroundColor: '#ED3B3B', borderWidth: 1, borderColor: '#9D9A9A'}} onPress={ ()=>{setHealthInfoDataContext({...healthInfoDataContext, importance:0}); setIsCategoryNum(0); setIsCategoryOpen(false);} } >
                                    <CategoryItemTxt>필수 : 상대방이 반드시 알아야 할 내용</CategoryItemTxt>
                                </SelectBtnBox>}
                                {isCategoryNum !== 1 && <SelectBtnBox style={{ backgroundColor: '#FE8C49', borderWidth: 1, borderColor: '#9D9A9A'}} onPress={ ()=>{setHealthInfoDataContext({...healthInfoDataContext, importance:1}); setIsCategoryNum(1); setIsCategoryOpen(false);} }>
                                    <CategoryItemTxt>중요: 당사자에게 매우 중요한 내용</CategoryItemTxt>
                                </SelectBtnBox>}
                                {isCategoryNum !== 2 && <SelectBtnBox style={{ backgroundColor: '#AAD462', borderWidth: 1, borderColor: '#9D9A9A'}} onPress={ ()=>{setHealthInfoDataContext({...healthInfoDataContext, importance:2}); setIsCategoryNum(2); setIsCategoryOpen(false);} }>
                                    <CategoryItemTxt>선호: 나의 선호에 관한 내용</CategoryItemTxt>
                                </SelectBtnBox>}
                            </SelectBtnBoxList>}
                        </CategoryList>
                        
                    </CategoryLayout>

                    <InputBox style={{marginTop:15, elevation:1}}>
                        <InputLabel>제목</InputLabel>
                        <Input maxLength={20} onChangeText={text=>setHealthInfoDataContext({...healthInfoDataContext, title:text})} value={healthInfoDataContext.title} style={{height:40}}/>
                    </InputBox>

                    <InputBox style={{marginTop:15}}>
                        <InputLabel >내용</InputLabel>
                        <BigInput 
                        maxLength={150}
                        multiline
                        onChangeText={text=>setHealthInfoDataContext({...healthInfoDataContext, description:text})} 
                        value={healthInfoDataContext.description} 
                        placeholder={holderTxt} 
                        placeholderTextColor="rgba(34, 34, 34, 0.5);" 
                        style={{height:204, fontSize:10, marginBottom:31, paddingRight:20}}/>
                    </InputBox>  

                </ScrollView>
            </Whole>
        </>
    );
}



export default HealthInfoAddPage;