import React from 'react'
import styled from 'styled-components/native'
import RcText from '../components/RcText/RcText'

const HomeScreen = () => {
	return (
		<Container>
			<RcText content={'Home'} />
		</Container>
	)
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export default HomeScreen
