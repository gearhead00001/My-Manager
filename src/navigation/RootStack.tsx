import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import AppStack from "./AppStack"
import { useAuthContext } from "../providers/AuthProvider/AuthProvider"
import AuthStack from "./AuthStack"

const RootStack = () => {
	const { isLoggedIn } = useAuthContext()

	return (
		<NavigationContainer>
			{(isLoggedIn)?
				<AppStack />
				:
				<AuthStack/>
			}
		</NavigationContainer>
	)
}

export default RootStack
