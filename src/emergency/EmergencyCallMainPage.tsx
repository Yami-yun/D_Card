import React from 'react';
import styled from 'styled-components/native';
import TopSectionInfo from '../base/TopSectionInfo';

import PagingBtnLayout from '../base/PagingBtnLayout';
import Header from '../base/Header';
import EmergencyCallLayout from './EmergencyCallLayout';
import {getDeviceWidth, getDeviceHeightNoInfo} from '../base/Tool';
import { useEmergencyCallDataListContext} from '../base/context';

const Whole = styled.View`
    width: ${getDeviceWidth()}px;
    height: ${getDeviceHeightNoInfo()}px;
    /* border: 3px red; */
    flex-grow:1;
    padding: 0 4%;
    padding-bottom: 5%;
    justify-content: space-between;
`;

function EmergencyCallMainPage(){
    const emergencyCallDataListContext = useEmergencyCallDataListContext();

    const defaultDescription = "긴급연락처에 대한 자세한 내용을 적어주세요.\n\n작성 예시)\n이름 또는 기관명\n주소 (서울특별시 동대문구 00 도로명 00 아파트 )";
    console.log(emergencyCallDataListContext);
    return(
        <>
            <Header text="긴급 연락처"/>
            <TopSectionInfo totalCount={emergencyCallDataListContext.length} type="INFO" text="추가 하기" screen="EMERGENCY_CALL_MAIN"/>
            <Whole>
                {emergencyCallDataListContext.length === 0 && <EmergencyCallLayout title="제목을 입력해주세요." importance="0" description={defaultDescription} />}
                <EmergencyCallLayout {...emergencyCallDataListContext[0]} />
                <EmergencyCallLayout {...emergencyCallDataListContext[1]} />
                {/* {
                    emergencyCallDataListContext.map((data)=>(
                        <EmergencyCallLayout {...data} />
                    ))
                } */}
                <PagingBtnLayout screen="EMERGENCY_CALL_MAIN"/>
            
            </Whole>
        </>
    );
}


export default EmergencyCallMainPage;