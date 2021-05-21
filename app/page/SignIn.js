// react import
import React, {useEffect, useState} from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// lib import
import styled from 'styled-components/native';
import Toast from 'react-native-toast-message';

// local import
import {screenWidth} from '../util/dimension.js';
import Input from '../component/atom/Input';
import ButtonWithText from '../component/atom/Button';
import {COLOR_BACK} from '../component/config';
// local API
// import login from '../api/auth/login';

// react HTML
const Login = ({route, navigation}) => {
  // variables
  const [email, setEmail] = useState('');
  const [emailFormat, setEmailFormat] = useState('');
  
  const [password, setPassword] = useState('');
  
  // functions
  const onLogin = async () => {
    if (!emailFormat || password.length < 8) return;
    // const authData = await login(email, password);
    const authData = {status: "success", data: {user: {name: "이준호", email: "example@ac.kr"}, token: "AAA"}}

    if (authData.status == 'success') {
        const {user, token} = authData.data;
        
        AsyncStorage.setItem('token', token);
        Toast.show({
          text2: 'Green Tree에 오신 것을 환영합니다.',
          text1: `${user.name}님 환영합니다.`
        })
          navigation.navigate('Main', {
            userEmail: user.email, // authData.data.user
            authToken: token, // authData.data.token
          });
    } 
    else 
      Alert.alert('로그인 실패', authData.message)
  };
  const onEmailChange = (email) => {   
    // format check
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;    
    if (regExp.test(email))
        setEmailFormat(true);
    else
        setEmailFormat(false);

    setEmail(email);
  }
  return (
    <Container>
      <LogoWrapper onPress={() =>  navigation.navigate('Main')}>
        <LogoText>GreenTree</LogoText>
        <LogoSmallText>생활속의 환경지킴이</LogoSmallText>
      </LogoWrapper>
      <LoginWrapper>
        <LoginForm>
          <LoginInput
            placeholder={'이메일'}
            value={email}
            onChangeText={onEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <LoginInput
            placeholder={'비밀번호'}
            secureTextEntry
            value={password}
            textContentType={'oneTimeCode'}
            onChangeText={setPassword}
          />
          <LoginButton
            buttonColor={password.length > 7 && emailFormat ? COLOR_BACK: "#E7E7E7"} // login condition
            textColor="#ffffff"
            onPress={onLogin}>
            {'로그인'}
          </LoginButton>
          <FindButton
            textColor="#979797"
            fontSize="12px"
            textDecoration="underline"
            onPress={() => {}}>
            {'로그인 정보를 잊으셨나요?'}
          </FindButton>
          <JoinButton textColor="#979797" fontSize="12px" onPress={() => navigation.navigate('SignUp')}>
            {'새로운 계정 만들기'}
          </JoinButton>
        </LoginForm>
      </LoginWrapper>
    </Container>
  );
};

export default Login;

// react CSS
const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;
const LogoWrapper = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const LogoText = styled.Text`
  margin-top: 5px;
  font-size: 45px;
  color: ${COLOR_BACK};
  font-weight: 800;
`;
const LogoSmallText = styled.Text`
  font-size: 19.5px;
  color: #000000;
  font-weight: 500;
`;
const LoginWrapper = styled.View`
  flex: 1.618;
  width: 100%;
  background-color: #ffffff;
`;
const LoginForm = styled.View`
  flex: 1.618;
  justify-content: flex-start;
  align-items: center;
  width: ${screenWidth * 0.8}px;
  margin: 0 auto;
  padding-top: 40px;
  border-top-width: 1px;
  border-top-color: #979797;
`;
const LoginInput = styled(Input)`
  margin-bottom: 15px;
  font-size: 16px;
  width: 100%;
`;
const LoginButton = styled(ButtonWithText)`
  margin-top: 5px;
  width: 100%;
  border: 0px;
`;
const FindButton = styled(ButtonWithText)`
  margin-top: 20px;
  padding: 10px 5px;
  border: 0px;
`;
const JoinButton = styled(ButtonWithText)`
  margin-top: 15px;
  padding: 10px 20px;
  border: 1px solid #979797;
  border-radius: 40px;
`;