import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';
import Header from '../base/Header';
import CategorySelectorLayout from '../base/CategorySelectorLayout';
import {InputBox, Input, BigInput, InputLabel, InputList, InputSideTxt, NumInput} from '../base/input';
import { ScrollView, BackHandler } from 'react-native';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';
import {
    useEmergencyCallDataContext, 
    useSetEmergencyCallDataContext, 
    usePagingDataContext, 
    useEmergencyCallDataListContext,
    useSetScreenDisplayStateContext,
} from '../base/context';

// Emenrgecy Call Book Modeify Screen
const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
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

const holderTxt = "긴급연락처에 대한 자세한 내용을 적어주세요.\n\n작성 예시)\n기관명\n주소 ( 서울특별시 동대문구 00 도로명 00 아파트 )"

function EmergencyCallAddPage(){
    holderTxt.replace(/\n/g, '<br/>');

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isCategoryNum, setIsCategoryNum] = useState(0);

    const setEmergencyCallDataContext = useSetEmergencyCallDataContext();
    const pagingDataContext = usePagingDataContext();
    const emergencyCallDataListContext = useEmergencyCallDataListContext();

    const setScreenDisplayStateContext = useSetScreenDisplayStateContext();
    const emergencyCallDataContext = useEmergencyCallDataContext();
    

    useEffect(()=>{   
        setIsCategoryNum(emergencyCallDataContext.importance);
        // setEmergencyCallDataContext(emergencyCallDataListContext[pagingDataContext.EMERGENCY_CALL_MAIN]);
        // setIsCategoryNum(emergencyCallDataListContext[pagingDataContext.EMERGENCY_CALL_MAIN].importance);

        const backAction = () => {
            setScreenDisplayStateContext({screen:"EMERGENCY_CALL_MAIN",stage:1});
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    },[])
    

    return(
        <>
            <Header text="긴급연락처 | 수정하기"/>
            <ScrollView>
                <TopSectionInfo type="MODIFY" text="수정 완료" screen="EMERGENCY_CALL_MODIFY" emergencyId={emergencyCallDataContext.id}/>
                <Whole>
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
                                    {isCategoryNum !== 0 && <SelectBtnBox style={{ backgroundColor: '#ED3B3B', borderWidth: 1, borderColor: '#9D9A9A'}} onPress={ ()=>{setEmergencyCallDataContext({...emergencyCallDataContext, importance:0}); setIsCategoryNum(0); setIsCategoryOpen(false);} } >
                                        <CategoryItemTxt>필수 : 상대방이 반드시 알아야 할 내용</CategoryItemTxt>
                                    </SelectBtnBox>}
                                    {isCategoryNum !== 1 && <SelectBtnBox style={{ backgroundColor: '#FE8C49', borderWidth: 1, borderColor: '#9D9A9A'}} onPress={ ()=>{setEmergencyCallDataContext({...emergencyCallDataContext, importance:1}); setIsCategoryNum(1); setIsCategoryOpen(false);} }>
                                        <CategoryItemTxt>중요: 당사자에게 매우 중요한 내용</CategoryItemTxt>
                                    </SelectBtnBox>}
                                    {isCategoryNum !== 2 && <SelectBtnBox style={{ backgroundColor: '#AAD462', borderWidth: 1, borderColor: '#9D9A9A'}} onPress={ ()=>{setEmergencyCallDataContext({...emergencyCallDataContext, importance:2}); setIsCategoryNum(2); setIsCategoryOpen(false);} }>
                                        <CategoryItemTxt>선호: 나의 선호에 관한 내용</CategoryItemTxt>
                                    </SelectBtnBox>}
                                </SelectBtnBoxList>}
                            </CategoryList>
                            
                        </CategoryLayout>

                    <InputBox>
                        <InputLabel>제목</InputLabel>
                        <Input style={{height:40}} 
                        maxLength={20}
                        onChangeText={text=>setEmergencyCallDataContext({...emergencyCallDataContext, title:text})} 
                        value={emergencyCallDataContext.title}
                        />
                    </InputBox>
                    <InputBox>
                        <InputLabel>연락처</InputLabel>
                        <InputList style={{alignItems: 'center'}}>
                            <NumInput style={{flexGrow:9, height:40}}
                            onChangeText={text=>setEmergencyCallDataContext({...emergencyCallDataContext, call:{...emergencyCallDataContext.call, numFront:text}})} 
                            value={emergencyCallDataContext.call.numFront}
                            maxLength={3}
                            />
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <NumInput style={{flexGrow:9, height:40}}
                            onChangeText={text=>setEmergencyCallDataContext({...emergencyCallDataContext, call:{...emergencyCallDataContext.call, numMiddle:text}})} 
                            value={emergencyCallDataContext.call.numMiddle}
                            maxLength={4}
                            />
                            <InputSideTxt style={{marginLeft:10, marginRight:10}}>-</InputSideTxt>
                            <NumInput style={{flexGrow:9, height:40}}
                            onChangeText={text=>setEmergencyCallDataContext({...emergencyCallDataContext, call:{...emergencyCallDataContext.call, numBack:text}})} 
                            value={emergencyCallDataContext.call.numBack}
                            maxLength={4}
                            />
                            
                        </InputList>
                    </InputBox>
                    <InputBox>
                        <InputLabel >내용</InputLabel>
                        <BigInput 
                        maxLength={150}
                        multiline
                        placeholder={holderTxt} 
                        onChangeText={text=>setEmergencyCallDataContext({...emergencyCallDataContext, description:text})} 
                        value={emergencyCallDataContext.description} 
                        placeholderTextColor="rgba(34, 34, 34, 0.5);" 
                        style={{height:194, fontSize:10, paddingRight:20}}
                        />
                    </InputBox>       
                </Whole>
            </ScrollView>
        </>

    );
}

export default EmergencyCallAddPage;