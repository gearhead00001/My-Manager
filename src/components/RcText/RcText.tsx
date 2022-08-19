import React from "react";
import styled from "styled-components/native";
import { IRcTextProps } from "./types";

const RcText = (props: IRcTextProps) =>{
    return(
        <Text>
            {props.content}
        </Text>
    )
}

const Text = styled.Text`
`

export default RcText