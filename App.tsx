/**
 * My Manager app
 */

import React from 'react'
import { SafeAreaView } from 'react-native'
import RootStack from './src/navigation/RootStack'
import { AuthProvider } from './src/providers/AuthProvider/AuthProvider'
import 'react-native-gesture-handler';
import { TourProvider } from './src/providers/TourProvider/TourProvider'

const App = () => {
	return (
		<SafeAreaView style={{flex:1}}>
			<AuthProvider>
				<TourProvider>
					<RootStack/>
				</TourProvider>
			</AuthProvider>
		</SafeAreaView>
	)
}

export default App
