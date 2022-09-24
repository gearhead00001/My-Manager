import React from "react"
import styled from 'styled-components/native'
import { IRcContainerProps } from "./types"

const RcContainer = (props : IRcContainerProps )=>{
	return(
		<Container>
			{props.children}
		</Container>
	)
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`
export default RcContainer
