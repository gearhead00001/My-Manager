import React from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import { useAuthContext } from '../providers/AuthProvider/AuthProvider'

const HomeScreen = () => {
	const { doLogout } = useAuthContext()

	return (
		<RcContainer>
			<RcText
				content={'Home'}
				fontSize={20}
			/>
			<RcButton title={'Logout'} onPress={()=>doLogout()}/>
		</RcContainer>
	)
}

export default HomeScreen
