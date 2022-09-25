import React from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import RcAppBar from '../components/RcAppBar'

const SearchScreen = (props) => {

	return (
		<RcContainer>
			<RcAppBar
				title={'Search Notes'}
				onLeftIconClick={props.navigation.goBack}
			/>
			<RcText
				content={'Search'}
				fontSize={20}
			/>
			<RcButton title={'Search'} onPress={ ()=> {/* */}}/>
		</RcContainer>
	)
}

export default SearchScreen
