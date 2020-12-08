import React from 'react';
import styled from 'styled-components/native';

// 사진 선택하기, 전화번호 내용
const Whole = styled.View``;

const MainLayout = styled.View`
    height: 176px;
    /* height: 50%; */
    background: #FFFFFF;
    /* border: 1px solid #9D9A9A; */
    border-radius: 3px;
`;

interface Props{
    children?: JSX.Element | Array<JSX.Element>;
};

function MainFunctionLayout({children}:Props){
    return(
        <Whole>      
            <MainLayout>
                {children}
            </MainLayout>

        </Whole>
    );
}

export default MainFunctionLayout;