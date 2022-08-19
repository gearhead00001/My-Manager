import React from 'react'
import styled from 'styled-components/native'
import { IRcTextProps, IRcTextStyProps } from './types'

const RcText = (props : IRcTextProps) => {
	const {
		content,
		fontSize = 14,
		fontColor = '#000',
		fontFamily = 'NotoSans-Regular',
		fontWeight = 700,
		textAlign = 'center'
	} = props

	return (
		<Text
			fontSize = {fontSize}
			fontColor = {fontColor}
			fontFamily = {fontFamily}
			fontWeight = {fontWeight}
			textAlign = {textAlign}
		>
			{content}
		</Text>
	)
}

const Text = styled.Text<IRcTextStyProps>`
	font-size : ${p => p.fontSize}px;
	color :${p => p.fontColor};
	font-family : ${p => p.fontFamily};
	font-weight: ${p => p.fontWeight};
	text-align: ${p => p.textAlign}

`

export default RcText
