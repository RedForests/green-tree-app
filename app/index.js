// react import
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';

// lib import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

// local import
import Splash from './page/Splash.js';
import Main from './page/Main.js';
import SignIn from './page/SignIn.js';
import SignUp from './page/SignUp.js';


const Stack = createStackNavigator();
// react HTML (jsx)
const Page = () => {

    // Variables
    const [isLoading, setIsLoading] = useState(true);

    // Loading
    useEffect(() => {
        setTimeout(() =>  setIsLoading(false) , 2000);
        // return () => clearTimeout(timeout)
    },[]);
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={(Platform.OS === 'ios')? "padding" : null} enabled>
            <SafeAreaView style={{background: "#ffffff"}}/>
            {
                isLoading ?
                <Splash /> 
            :
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Main">
                        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
                        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
                        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            }
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </KeyboardAvoidingView>
    );  
}

export default Page;
// react CSS (styled)