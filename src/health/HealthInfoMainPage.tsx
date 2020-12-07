import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';

import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import TitleLayout from '../base/titleLayout';
import MainFunctionLayout from '../base/MainFunctionLayout';
import MainDescriptionLayout from '../base/MainDescriptionLayout';
import PhotoLayout from '../base/PhotoLayout';
import {View} from 'react-native';


const Whole = styled.View`
    flex-grow:1;
    padding: 7% 6%;
    justify-content: space-around;
`;

function HealthInfoMainPage(){
    
    return(
        <>
            <Header text="건강 정보"/>
            <Whole>
                <TopSectionInfo totalCount={2} type="INFO" text="추가 하기" />
                {/* 여기부터 */}
                <View style={{borderWidth:1}}>  
                    <TitleLayout title='1. 약물 복용 관련' color="#ED3B3B"/ >
                    <MainFunctionLayout>
                        <PhotoLayout src= "../img/pillIcon.png" text="복용하는 약물 사진을 넣어주세요." />
                    </MainFunctionLayout>
                </View>
                <MainDescriptionLayout/>
                <PagingBtnLayout/>
            </Whole>
        </>
    );
}


export default HealthInfoMainPage;