import React from 'react';
import Text from '../atom/Text';
import Button from '../atom/Button';
import styled from 'styled-components/native'
import {COLOR_BACK} from '../config'
import BackIcon from '../../asset/icon/icon_back_alt2.png'
// import LogoIcon from '../../asset/icon/icon_green_tree.png'

export default ({navigation, isMain, title}) => {
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <HeaderBackground>
            {!isMain && 
                <BackButton onPress={goBack}>
                    <Icon source={BackIcon}/>
                </BackButton>
            }
            
            <LogoWrapper fontSize="18px" type="button">
                {title}
            </LogoWrapper>
            {!isMain && 
                <BackButton/>
            }           
        </HeaderBackground>
    )
    
}
const Icon = styled.Image`
    height: 16px;
    width: 16px;
    padding-top: 1px;
    resizeMode: contain;
`
const BackButton = styled(Button)`
    border: 0px;
    width: 60px;
`
const LogoWrapper = styled(Button)`
    flex: 1;
    border: 0px;
`
const HeaderBackground = styled.View`
    height: 54px;
    background-color: #ffffff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #E7E7E7;
`