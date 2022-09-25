import React from "react"
import styled from 'styled-components/native'
import RcText from "../RcText"
import { IRcAppBarProps } from "./types"

const RcAppBar = (props : IRcAppBarProps )=>{
	return(
		<HeaderContainer >
			<SvgSub onPress={()=>{props.onLeftIconClick()}} />
			<RcText
				content={props.title}
				fontSize={20}
				fontWeight={700}
				textAlign={'left'}
			/>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.View`
	padding-vertical: 16px;
	border : 1px solid #777777;
	flex-direction : row;
`
const SvgSub = styled.TouchableOpacity`
	padding : 15px;
	margin-horizontal : 20px;
	background-color : red;
`
export default RcAppBar

