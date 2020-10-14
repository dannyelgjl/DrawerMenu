import React from 'react'
//import { Block, Text, Button } from 'expo-ui-kit'
import { Image, View, Text, TouchableOpacity, Linking } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import DashBoard from './screens/DashBoard'
import Contact from './screens/Contact'
import Messages from './screens/Messages'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation }) => {
    return (
	<Stack.Navigator screenOptions={{
		headerTransparent: true,
		headerTitle: null,
		headerLeft: () => (
			<TouchableOpacity  onPress={() => navigation.openDrawer()} style={{
					backgroundColor: "red", 
					width: 50, 
					height: 35,
					borderRadius: 5,
					alignItems: "center",
					justifyContent: "center",
					marginHorizontal: 10
					
					}}>
				<Text style={{ color: "#fff" }}>MENU</Text>
			</TouchableOpacity>
		)
	}}>
        <Stack.Screen  name="DashBoard" component={DashBoard} /> 
    	<Stack.Screen  name="Messages" component={Messages} /> 
    	<Stack.Screen  name="Contact" component={Contact} /> 
    </Stack.Navigator>
	)
}

const DrawerContent = (props) => {

	return(
		<DrawerContentScrollView {...props}>
		<DrawerItem 
			label="DashBoard"
			onPress={() => props.navigation.navigate("DashBoard")}
		/>

		<DrawerItem 
			label="Messages"
			onPress={() => props.navigation.navigate("Messages")}
		/>

		<DrawerItem 
			label="Contact"
			onPress={() => props.navigation.navigate("Contact")}
		/>
		</DrawerContentScrollView>
	)	
}

export default () => {
  return (
	<Drawer.Navigator 
			initialRouteName="DashBoard" 
			drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen  name="Screens" component={Screens} /> 
      
    </Drawer.Navigator>
  ) 
}

