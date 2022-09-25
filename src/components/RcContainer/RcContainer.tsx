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
	background-color : white;
	justify-content : space-between;
`
export default RcContainer
