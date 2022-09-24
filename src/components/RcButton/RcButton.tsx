import React from "react"
import styled from 'styled-components/native'
import RcText from "../RcText/RcText"
import { IRcButtonProps } from "./types"

const RcButton = (props : IRcButtonProps )=>{
	const { title, onPress } = props
	return(
		<BtnContainer onPress={onPress}>
			<RcText
				content={title}
				fontSize={14}
				fontWeight={700}
				fontColor={"white"}
			/>
		</BtnContainer>
	)
}

const BtnContainer = styled.TouchableOpacity`
	padding: 16px;
	background-color : #0078D6;
	border-radius : 4px;
`
export default RcButton
