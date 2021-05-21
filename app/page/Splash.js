import React from 'react';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native'
import Text from '../component/atom/Text'
import { COLOR_BACK } from '../component/config'
import Logo from '../asset/icon/icon_green_tree.png'
import { } from 'react-native';

export default  App = () => {
  return (
    <Container>
        {/* <LogoImage source={Logo}/> */}
        <LogoTitle>GREEN TREE</LogoTitle>
        <LogoText>생활속의 환경지킴이</LogoText>
        
        <StatusBar hidden={false} backgroundColor={COLOR_BACK}/>    
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR_BACK};
`;
const LogoImage = styled.Image`
  resizeMode: cover;
`
const LogoTitle = styled(Text)`
  font-size: 44px;
  color: #ffffff;
  font-weight: 800;
`
const LogoText = styled(Text)`
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  padding-bottom: 60px;
`