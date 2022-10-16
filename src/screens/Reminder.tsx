import React from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import RcAppBar from '../components/RcAppBar'
import { TourArea, useTourContext, tourTipConfig} from '../providers/TourProvider/TourProvider'

const ReminderScreen = (props) => {
	const { startTour} = useTourContext()

	return (
		<RcContainer>
			<RcAppBar
				title= {'Reminders'}
				onLeftIconClick={props.navigation.goBack}
			/>
			<TourArea
				tourID={'Reminder'}
				stepNumber = {1}
				toolTip={tourTipConfig['Reminder'][1]}
			>
				<RcText
					content={'Reminders'}
					fontSize={20}
				/>
			</TourArea>
			<RcButton title={'Reminder'} onPress={ ()=> {startTour('Reminder')}}/>
		</RcContainer>
	)
}

export default ReminderScreen
