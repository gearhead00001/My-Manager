import React from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import { useAuthContext } from '../providers/AuthProvider/AuthProvider'

const LoginScreen = () => {
	const { doLogin } = useAuthContext()

	return (
		<RcContainer>
			<RcText
				content={'Login'}
				fontSize={20}
			/>
			<RcButton title={'Login'} onPress={ ()=> {
				doLogin()}}/>
		</RcContainer>
	)
}

export default LoginScreen
