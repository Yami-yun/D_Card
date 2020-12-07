import React from 'react';
import styled from 'styled-components/native';



const Whole = styled.View`
    /* padding: 0 18px; */

    /* border : 1px; */
    /* margin-bottom: 11px; */
`;

const MainLayout = styled.View`
    height: 176px;

    background: #FFFFFF;
    border: 1px solid #9D9A9A;
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