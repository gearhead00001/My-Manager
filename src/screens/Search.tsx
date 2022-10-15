import React from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import RcAppBar from '../components/RcAppBar'
import { TourArea} from '../providers/TourProvider/TourProvider'

const SearchScreen = (props) => {

	return (
		<RcContainer>
			<RcAppBar
				title={'Search Notes'}
				onLeftIconClick={props.navigation.goBack}
			/>
			<TourArea
				tourID={'Search'}
				stepNumber={1}
			>
				<RcText
					content={'Search'}
					fontSize={20}
				/>
			</TourArea>
			<RcButton title={'Search'} onPress={ ()=> {/* */}}/>
		</RcContainer>
	)
}

export default SearchScreen
