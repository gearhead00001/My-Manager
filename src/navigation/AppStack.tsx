import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/Home'
import SearchScreen from "../screens/Search"
import ReminderScreen from "../screens/Reminder"
import DrawerContent from "../screens/Drawer"

const Drawer = createDrawerNavigator()
const Tabs = createBottomTabNavigator()

const BottomTabs = () => {

	return (
		<Tabs.Navigator initialRouteName={"Home"} screenOptions={{headerShown : false}}>
			<Tabs.Screen name="Home" component={HomeScreen} />
			<Tabs.Screen name="Search" component={SearchScreen} />
			<Tabs.Screen name="Reminder" component={ReminderScreen} />
		</Tabs.Navigator>
	)
}

const AppStack = () => {

	return (
		<Drawer.Navigator drawerContent={DrawerContent} screenOptions={{headerShown : false}}>
			<Drawer.Screen name="BottomTabs" component={BottomTabs} />
		</Drawer.Navigator>
	)
}
// screenOptions={{headerShown : false}}

export default AppStack
