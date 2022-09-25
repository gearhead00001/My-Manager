/**
 * My Manager app
 */

import React from 'react'
import { SafeAreaView } from 'react-native'
import RootStack from './src/navigation/RootStack'
import { AuthProvider } from './src/providers/AuthProvider/AuthProvider'
import 'react-native-gesture-handler';

const App = () => {
	return (
		<SafeAreaView style={{flex:1}}>
			<AuthProvider>
				<RootStack/>
			</AuthProvider>
		</SafeAreaView>
	)
}

export default App
