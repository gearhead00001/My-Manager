/* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useCallback, useEffect, useState } from "react"
// import { View } from "react-native"
// import styled from "styled-components/native"
// const useComponentSize = () => {
// 	const [size, setSize] = useState(null)
// 	const onLayout = useCallback(event => {
// 		const { width, height } = event.nativeEvent.layout
// 		console.log("onLayout Fired........")
// 		setSize({ ...event.nativeEvent.layout})
// 	}, [])
// 	return [size, onLayout]
// }

import React, { useEffect, useState, useRef, createContext, PropsWithChildren, useContext} from "react"
import { View } from "react-native"
import styled from "styled-components/native"

const TourContext = createContext({updateTourAreaInfo : (tourID, stepNum, location)=>{/**/},tourAreaInfo : {}})

const TourProvider = (props : PropsWithChildren)=>{
	const [tourID, setTourID] = useState('')
	const [tourAreaInfo, setTourAreaInfo] = useState({})

	const updateTourAreaInfo = (tourID, stepNum, obj)=>{
		const areaInfo = tourAreaInfo
		areaInfo[stepNum] = obj
		setTourAreaInfo({...areaInfo})
		setTourID(tourID)
	}
	useEffect(()=>{
		// console.log(tourAreaInfo)
	},[tourAreaInfo])

	return(
		<TourContext.Provider value={{updateTourAreaInfo, tourAreaInfo}}>
			{props.children}
		</TourContext.Provider>
	)
}

const useTourContext = () => useContext(TourContext)

interface ITourArea{
	tourID : string
	stepNumber : number
	children ?: any
}

const TourArea = (props : ITourArea) => {
	const { tourID, children, stepNumber} = props
	const [location, pullLocation] = useState({x :0, y : 0, w : 0, h: 0})
	const { updateTourAreaInfo } = useTourContext()
	const ViewRef = useRef<View>()

	useEffect(()=>{
		if( JSON.stringify(location) !== JSON.stringify({x :0, y : 0, w : 0, h: 0})){
			updateTourAreaInfo(tourID, stepNumber, {...location})
		}
		// console.log(tourID+' : ',location)
	},[location])

	return(
		<TourAreaRoot ref={ViewRef}
			onLayout={({nativeEvent}) => {
				ViewRef.current.measure( (x, y, width, height, pageX, pageY) => {
					pullLocation({x : pageX, y : pageY, w : width, h :height})
				})
			}}
		>
			{children}
		</TourAreaRoot>
	)
}

const TourAreaRoot = styled.View``

export { TourArea, useTourContext, TourProvider}
