import React, { useEffect, useState } from 'react';
import Text from '../component/atom/Text';
import styled from 'styled-components/native'
import Header from '../component/organism/Header';
import Container from '../component/template/Container';
import Footer from '../component/organism/Footer';

export default ({navigation}) => {
    return (
        <>
            <Header title="Green Tree" isMain={true}/>
            <Container>
                
            </Container>
            <Footer navigation={navigation}/>
        </>
    )
}





