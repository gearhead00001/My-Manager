import React from "react";
import {View, Text} from 'react-native'
import styled from "styled-components/native";

const HomeScreen =()=>{
    return (
      <Container>
        <Text>Home Screen</Text>
      </Container>
    );
}

const Container = styled.View`
    flex : 1;
    align-items : center;
    justify-content : center;
`

export default HomeScreen