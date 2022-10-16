/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState, useRef, createContext, PropsWithChildren, useContext} from "react"
import { View } from "react-native"
import Svg, { Defs, Mask, Rect, Circle} from "react-native-svg"
import styled from "styled-components/native"

const TourContext = createContext({
	updateTourAreaInfo : (tourID, stepNum, location, toolTip)=>{return},
	tourAreaInfo : {},
	startTour: (id)=> {return},
	moveForward :()=>{return},
	moveBackward :()=>{return},
	stopTour :()=>{return},
	TourArea :(obj)=>{return <></>}
})

const TourProvider = (props : PropsWithChildren)=>{
	const [tourID, setTourID] = useState('')
	const [tourAreaInfo, setTourAreaInfo] = useState({})
	const [isTourInProgress, setIsTourInProgress] = useState(false)
	const [isTransitioning, SetIsTransitioning] = useState(false)
	const [stepNumber, setStepNumber] = useState(1)
	const [toolTips, setToolTips] = useState({})
	const [screensDetected, setScreenDetected] = useState<string[]>([])

	useEffect(()=>{
		if(tourID && stepNumber){
			// console.log(tourTipConfig)
		}
		// console.log("Screens Detected......", screensDetected)

	},[tourID])

	const updateTourAreaInfo = (tourID, stepNum, obj, toolTip)=>{
		// console.log('Area info ', areaInfo)
		const areaInfo = tourAreaInfo
		areaInfo[tourID] = {...areaInfo[tourID]}
		areaInfo[tourID][stepNum] = obj
		setTourAreaInfo({...areaInfo})

		const toolTipsTemp = toolTips
		toolTipsTemp[tourID] = {...toolTipsTemp[tourID]}
		toolTipsTemp[tourID][stepNum] = toolTip
		setToolTips(toolTipsTemp)

		setTourID(tourID)
		const screens = screensDetected
		if(!screens.includes(tourID)){
			screens.push(tourID)
		}
		setScreenDetected(screens)
	}

	const startTour =(tourID)=>{
		if(screensDetected.includes(tourID)){
			setTourID(tourID)
			setIsTourInProgress(true)
		}
	}
	const moveForward =()=>{
		if(stepNumber < Object.keys(tourAreaInfo[tourID]).length ){
			setStepNumber(prev=> prev + 1)
		}else{
			stopTour()
		}
	}
	const moveBackward =()=>{
		if(stepNumber > 1){
			setStepNumber(prev => prev -1)
		}else{
			stopTour()
		}
	}
	const stopTour =()=>{
		setIsTourInProgress(false)
		setStepNumber(1)
	}

	useEffect(()=>{
		/* */
	},[tourAreaInfo])

	return(
		<TourContext.Provider value={{updateTourAreaInfo, tourAreaInfo, startTour, moveForward, moveBackward, stopTour, TourArea}}>
			{props.children}
			{ (isTourInProgress) && renderTourOverlay({isTransitioning : isTransitioning,location : tourAreaInfo[tourID][stepNumber], toolTip : toolTips[tourID][stepNumber]})}
		</TourContext.Provider>
	)
}

const useAppTour = () => useContext(TourContext)

const calculateFocus =(x,y,w,h)=>{
	const r = Math.sqrt(w*w + h*h)/2
	const mx1 = (2*x + w)/2
	const mx2 = (2*y + h)/2
	return {r, mx1, mx2}
}
const renderHighlighter =({x,y,w,h})=>{
	// const {r, mx1, mx2} = calculateFocus(x,y,w,h)
	// console.log("Highlighter",x,y,w,h)
	return(
		<Svg width = "100%" height = "100%">
			<Defs>
				<Mask id="mask" x="0" y="0" width = "100%" height = "100%">
					<Rect width = "100%" height = "100%" fill="#fff"/>
					<Rect x={x} y={y} width={w} height={h} rx={3} fill= "black"/>
					{/* <Circle cx={mx1} cy={mx2} r={r} stroke-width="4" fill="black" /> */}
				</Mask>
			</Defs>
			<Rect width = "100%" height = "100%" fill= "rgba(0, 0, 0, 0.8)" mask="url(#mask)"/>
		</Svg>
	)
}

const renderTourOverlay = ({isTransitioning, location, toolTip})=>{
	// console.log(isTransitioning, location, toolTip)
	return(
		<TourOverlay style = {(isTransitioning) ?{backgroundColor : 'rgba(0,0,0,0.8)'}:{}}>
			{(!isTransitioning) && renderHighlighter(location)}
			{(!isTransitioning) && <TipHolder>{toolTip}</TipHolder>}
		</TourOverlay>
	)
}

const TourOverlay = styled.View`
	position : absolute;
	height : 100%;
	width : 100%;
`
const TipHolder = styled.View`
	position : absolute;
	height : 100%;
	width : 100%;
`
interface ITourArea{
	tourID : string
	stepNumber : number
	toolTip : any
	children : JSX.Element
}

const TourArea = (props : ITourArea) => {
	const { tourID, children, stepNumber, toolTip} = props
	const [location, pullLocation] = useState({x :0, y : 0, w : 0, h: 0})
	const { updateTourAreaInfo } = useAppTour()
	const ViewRef = useRef<View>()

	useEffect(()=>{
		if( JSON.stringify(location) !== JSON.stringify({x :0, y : 0, w : 0, h: 0})){
			updateTourAreaInfo(tourID, stepNumber, {...location}, toolTip)
			// console.log(tourID+' : ', stepNumber,location)
		}

	},[location])

	return(
		<TourAreaRoot ref={ViewRef}
			onLayout={({nativeEvent}) => {
				ViewRef.current.measure( (x, y, width, height, pageX, pageY) => {
					pullLocation({x : pageX -1, y : pageY-1, w : width+2, h :height+2})
					// console.log("Screen Name ....", tourID, {x : pageX, y : pageY, w : width, h :height} )
					// updateTourAreaInfo(tourID, stepNumber, {x : pageX, y : pageY, w : width, h :height})
				})
			}}
		>
			{children}
		</TourAreaRoot>
	)
}

const TourAreaRoot = styled.View``

const SampleToolTip = (props : {val : number})=>{
	const { moveForward, moveBackward, stopTour } = useAppTour()
	return(
		<SampleToolTipView>
			<SampleToolTipText>{`Its me Area ${props.val}. I'm being displayed`}</SampleToolTipText>
			<BtnHolder>
				<SampleToolTipBtn onPress ={()=> moveBackward()}>
					<SampleToolTipText style ={{color : 'black', fontWeight : 'bold'}}>{'< Previous'}</SampleToolTipText>
				</SampleToolTipBtn>
				<SampleToolTipBtn onPress ={()=> stopTour()}>
					<SampleToolTipText style ={{color : 'black', fontWeight : 'bold'}}>{'Skip'}</SampleToolTipText>
				</SampleToolTipBtn>
				<SampleToolTipBtn onPress ={()=> moveForward()}>
					<SampleToolTipText style ={{color : 'black', fontWeight : 'bold'}}>{'Next >'}</SampleToolTipText>
				</SampleToolTipBtn>
			</BtnHolder>
		</SampleToolTipView>
	)
}
const SampleToolTipView = styled.View`
	flex : 1;
	justify-content : space-around;
`
const SampleToolTipText = styled.Text`
	color : white;
`
const SampleToolTipBtn= styled.TouchableOpacity`
	padding : 16px;
 	border-radius : 8px;
 	background-color: yellow;
	align-items : center;
	justify-content : center;
`
const BtnHolder = styled.View`
	flex-direction : row;
	justify-content : space-around;
`
const tourTipConfig = {
	"Home" : {
		1 : <SampleToolTip val ={1}/>,
		2 : <SampleToolTip val ={2}/>,
		3 : <SampleToolTip val ={3}/>,
	},
	"Search" : {
		1 : <SampleToolTip val ={5}/>,
		2 : <SampleToolTip val ={6}/>
	},
	"Reminder" : {
		1 : <SampleToolTip val = {7}/>
	}

}

export { useAppTour, TourProvider, tourTipConfig}
