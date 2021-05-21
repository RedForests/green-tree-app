// react import
import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

// lib import
import styled from 'styled-components/native';

// local import
import IconLogin from '../../asset/icon/icon_login.png';
import IconOrder from '../../asset/icon/icon_order.png';
import IconSearch from '../../asset/icon/icon_search.png';
import Text from '../atom/Text'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Footer = ({navigation = "", title = ""}) => {
    const [token, setToken] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const goLink = link => {
        navigation.navigate(link);
    };
    
    useEffect(()=> {
        initFunction = async () => {
            setToken(await AsyncStorage.getItem('token'));
            setIsLoading(true);
        }
        initFunction();
    })
    const logout = async () => {
        await AsyncStorage.setItem('token', '');
        setToken(await AsyncStorage.getItem('token'));
        Alert.alert("로그아웃", "로그아웃이 정상적으로 처리되었습니다.")
        return token;
    }
    const menuList = [
        {
            icon: IconSearch,
            name: '검색',
            link: 'ProductList',
            auth: false
        },
        {
            icon: IconOrder,
            name: '주문목록',
            link: 'OrderList',
            auth: true
        },
    ];

    return (
        <MenuWrapper>
            {isLoading && 
            <>
                <Menu onPress={() => token != null && token != '' ? logout() : goLink('SignIn')}>
                    <MenuIcon source={IconLogin} />
                    <MenuText>{token != null && token != '' ? '로그아웃' : '로그인'}</MenuText>
                </Menu>  
                {menuList.map((item, index) => {
                    return (
                        item.auth == true && (token == null || token == '') ?
                        <View key={index}></View>
                        :
                        <Menu key={index} onPress={() => goLink(item.link)}>
                            <MenuIcon source={item.icon} />
                            <MenuText type="button">{item.name}</MenuText>
                        </Menu>
                    );
                })}
            </>
            }
        </MenuWrapper>
    );
};
export default Footer;
const MenuWrapper = styled.View`
    flex-direction: row;
    background-color: #ffffff;
    border-top-width: 1px;
    border-top-color: #E7E7E7;
    height: 54px;
`;
const Menu = styled(TouchableOpacity)`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const MenuIcon = styled.Image`
    width: 28px;
    height: 28px;
    resize-mode: contain;
`;
const MenuText = styled(Text)`
    font-weight: 700;
    font-size: 12px;
`;