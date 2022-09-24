/**
 * My Manager app
 */

import React, {type PropsWithChildren} from 'react'
import { SafeAreaView } from 'react-native'
import AppStack from './src/navigation/AppStack'

const App = () => {
	return (
		<SafeAreaView style={{flex:1}}>
			<AppStack/>
		</SafeAreaView>
	)
}

export default App
