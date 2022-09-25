import React from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import { useAuthContext } from '../providers/AuthProvider/AuthProvider'
import RcAppBar from '../components/RcAppBar'

const HomeScreen = (props) => {
	const { doLogout } = useAuthContext()

	return (
		<RcContainer>
			<RcAppBar
				title= {'All Notes'}
				onLeftIconClick={props.navigation.openDrawer}
			/>
			<RcText
				content={'Home'}
				fontSize={20}
			/>
			<RcButton title={'SampleBtn'} onPress={()=>{/**/}}/>
		</RcContainer>
	)
}

export default HomeScreen

