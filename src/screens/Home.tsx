import React, { useState } from 'react'
import RcText from '../components/RcText'
import RcContainer from '../components/RcContainer'
import RcButton from '../components/RcButton'
import { useAuthContext } from '../providers/AuthProvider/AuthProvider'
import RcAppBar from '../components/RcAppBar'
import { TourArea, useTourContext, tourTipConfig} from '../providers/TourProvider/TourProvider'
import { View } from 'react-native'

const HomeScreen = (props) => {
	const { doLogout } = useAuthContext()
	const [isTourAreaVisible, setIsTourAreaVisible] = useState(false)
	const { tourAreaInfo, startTour } = useTourContext()

	return (
		<RcContainer>
			<TourArea
				tourID={'Home'}
				stepNumber={2}
				toolTip={tourTipConfig['Home'][2]}
			>
				<RcAppBar
					title= {'All Notes'}
					onLeftIconClick={props.navigation.openDrawer}
				/>
			</TourArea>

			<TourArea
				tourID={'Home'}
				stepNumber={1}
				toolTip={tourTipConfig['Home'][1]}
			>
				<RcText
					content={'Home'}
					fontSize={20}
				/>
			</TourArea>

			<TourArea
				tourID={'Home'}
				stepNumber={3}
				toolTip={tourTipConfig['Home'][3]}
			>
				<RcButton title={'SampleBtn'} onPress={()=>{/**/ startTour('Home')}}/>
			</TourArea>

			{
				isTourAreaVisible &&
				Object.entries(tourAreaInfo).map(([key, value])=>
					<View key = {key} style={{position:'absolute', top:value.y, left:value.x, width:value.w, height: value.h, backgroundColor:'rgba(0,0,0,0.5)'}}/>
				)
			}


		</RcContainer>
	)
}

export default HomeScreen

