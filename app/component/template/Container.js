/* 
    Content 부분의 Margin 및 Padding을 똑같이 설정하기 위해 사용하는 Component 입니다.
*/
import React from 'react';
import styled from 'styled-components/native';

export default Container = ({style, children}) => {
    return (
        <Wrapper style={style}>
            {children}   
        </Wrapper>
    )
}
const Wrapper = styled.View`
    flex: 1;
    padding: 20px;
    background: #ffffff;
`