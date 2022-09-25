import React from "react"
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import AppStack from "./AppStack"
import { useAuthContext } from "../providers/AuthProvider/AuthProvider"
import AuthStack from "./AuthStack"

export const navigationRef = createNavigationContainerRef()

const RootStack = () => {
	const { isLoggedIn } = useAuthContext()

	return (
		<NavigationContainer ref={navigationRef}>
			{(isLoggedIn)?
				<AppStack />
				:
				<AuthStack/>
			}
		</NavigationContainer>
	)
}

export default RootStack
