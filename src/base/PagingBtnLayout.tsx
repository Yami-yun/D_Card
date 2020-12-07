import React from 'react';
import styled from 'styled-components/native';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';


const Whole = styled.View`

    height: 40px;
    flex-direction: row;
    justify-content:flex-end;
    align-items:center;
    /* border: 1px; */

`;

const IconBox = styled.View`

    width : 32px;
    height: 32px;

    justify-content:center;
    align-items:center;
    background: #8EB9E1;
    border-radius: 8px;
    margin : 0 5px;
`;






function PagingBtnLayout(){

    return(
        <Whole>
            <IconBox>
                <FontAwesomeIcon icon={faChevronLeft} size={22} color={'#ffffff'} />
            </IconBox>
            <IconBox>
                <FontAwesomeIcon icon={faChevronRight} size={22} color={'#ffffff'} />
            </IconBox>
            
        </Whole>
    );
}

export default PagingBtnLayout;