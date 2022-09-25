import React from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import { useAuthContext } from '../providers/AuthProvider/AuthProvider'

const DrawerContent = (props) => {
	const { doLogout } = useAuthContext()
	return (
		<RcContainer>
			<RcText
				content={'Drawer'}
				fontSize={20}
			/>
			<RcButton title={'Close Drawer'} onPress={ ()=> {props.navigation.closeDrawer()}}/>
			<RcButton title={'Logout'} onPress={()=>doLogout()}/>
		</RcContainer>
	)
}

export default DrawerContent
