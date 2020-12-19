import React from 'react';
import styled from 'styled-components/native';

// Photo, Health Main Layout ok
const Whole = styled.View``;

const MainLayout = styled.View`
    height: 176px;
    background: #FFFFFF;
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