import React from 'react';
import styled from 'styled-components/native';

// Paging Btn Layout
const Whole = styled.View`
    height: 40px;
    /* height: 5%; */

    flex-direction: row;
    justify-content:flex-end;
    align-items:center;
`;

const IconBox = styled.Image`
    width : 36px;
    height: 36px;
    margin : 0 2%;

    justify-content:center;
    align-items:center;
`;

function PagingBtnLayout(){

    return(
        <Whole>
            <IconBox source={require("../img/pagingLeft.png")}/>
            <IconBox source={require("../img/pagingRight.png")}/>
        </Whole>
    );
}

export default PagingBtnLayout;