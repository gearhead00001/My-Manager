import React from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import RcAppBar from '../components/RcAppBar'

const ReminderScreen = (props) => {

	return (
		<RcContainer>
			<RcAppBar
				title= {'Reminders'}
				onLeftIconClick={props.navigation.goBack}
			/>
			<RcText
				content={'Reminders'}
				fontSize={20}
			/>
			<RcButton title={'Reminder'} onPress={ ()=> {/* */}}/>
		</RcContainer>
	)
}

export default ReminderScreen
