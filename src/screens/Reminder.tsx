import React from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import RcAppBar from '../components/RcAppBar'
import styled from 'styled-components/native'
import {useAppTour, tourTipConfig} from '../providers/TourProvider/TourProvider'

const ReminderScreen = (props) => {
	const { startTour, TourArea} = useAppTour()

	return (
		<RcContainer>
			<RcAppBar
				title= {'Reminders'}
				onLeftIconClick={props.navigation.goBack}
			/>
			<TextHolder>
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
			</TextHolder>
			<RcButton title={'Reminder'} onPress={ ()=> {startTour('Reminder')}}/>
		</RcContainer>
	)
}

export default ReminderScreen

const TextHolder = styled.View`
	justify-content : center;
	align-items : center;

`
