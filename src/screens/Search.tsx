import React from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import RcAppBar from '../components/RcAppBar'
import { TourArea, useTourContext, tourTipConfig} from '../providers/TourProvider/TourProvider'

const SearchScreen = (props) => {
	const { startTour} = useTourContext()
	return (
		<RcContainer>
			<RcAppBar
				title={'Search Notes'}
				onLeftIconClick={props.navigation.goBack}
			/>

			<TourArea
				tourID={'Search'}
				stepNumber={2}
				toolTip={tourTipConfig['Search'][2]}
			>
				<RcText
					content={'Search'}
					fontSize={20}
				/>
			</TourArea>

			<TourArea
				tourID={'Search'}
				stepNumber={1}
				toolTip={tourTipConfig['Search'][1]}
			>
				<RcButton title={'Search'} onPress={ ()=> {startTour('Search')}}/>
			</TourArea>
		</RcContainer>
	)
}

export default SearchScreen
