import React, { useState } from 'react'
//import { Block, Text, Button } from 'expo-ui-kit'
import { Image, View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';

import { Feather, AntDesign } from '@expo/vector-icons'

import DashBoard from './screens/DashBoard'
import Contact from './screens/Contact'
import Messages from './screens/Messages'
import Animated from 'react-native-reanimated'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
 return (
	<Animated.View style={[styles.stack, style]}>
		<Stack.Navigator screenOptions={{
			headerTransparent: true,
			headerTitle: null,
			headerLeft: () => (
				<TouchableOpacity  onPress={() => navigation.openDrawer()} 
				style={{
						width: 50, 
						height: 35,
						borderRadius: 5,
						alignItems: "center",
						justifyContent: "center",
						marginHorizontal: 10,
						}}>
					<Feather name="menu" size={18} />
				</TouchableOpacity>
			)
		}}>
					<Stack.Screen  name="DashBoard" component={DashBoard} /> 
				<Stack.Screen  name="Messages" component={Messages} /> 
				<Stack.Screen  name="Contact" component={Contact} /> 
			</Stack.Navigator>
	</Animated.View>	
	);
}


const DrawerContent = (props) => {
	return (
		<DrawerContentScrollView {...props}>
			<View>
				{/** add avantar */}
				<View style={{ margin: 20 }}>
					<Image 
						style={{borderRadius: 90}}
						resizeMode="center"
						source={{ height: 60, width: 60, 
						uri: "https://avatars2.githubusercontent.com/u/54491980?s=460&u=16764239edddf8be331bc238fef74b30ec8d4597&v=4" }}/>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Study Animation
					</Text>
					<Text style={{ fontSize: 9 }}>
							Daniel Gomes Jerônimo Leite.
					</Text>
				</View>
					{/** add icons to items */}
				<DrawerItem 
					label="DashBoard"
					labelStyle={{ marginLeft: -16 }}
					onPress={() => props.navigation.navigate("DashBoard")}
					icon={() => <AntDesign name="dashboard" color="black" size={16} />}
				/>

				<DrawerItem 
					label="Messages"
					labelStyle={{ marginLeft: -16 }}
					onPress={() => props.navigation.navigate("Messages")}
					icon={() => <AntDesign name="message1" color="black" size={16} />}
				/>

				<DrawerItem 
					label="Contact"
					labelStyle={{ marginLeft: -16 }}
					onPress={() => props.navigation.navigate("Contact")}
					icon={() => <AntDesign name="phone" color="black" size={16} />}
				/>
			</View>
		</DrawerContentScrollView>
	)	
}

export default () => {
	const [progress, setProgress] = useState(new Animated.Value(0));
	// create animation for screen scale

	const scale = Animated.interpolate(progress, {
		inputRange: [0, 1],
		outputRange: [1, 0.8],

	});

	const screensStyles = { transform: [{ scale }] }

  return (
	<Drawer.Navigator 
		initialRouteName="DashBoard"
		drawerType="slide"
		overlayColor="transparent"
		drawerContentOptions={{
			activeBackgroundColor: "transparent",
			activeTintColor: "green",
			inactiveTintColor: "green"
		}}

		sceneContainerStyle={{ backgroundColor: "transparent" }}
		
		drawerContent={(props) => {
			setProgress(props.progress);
			return <DrawerContent {...props} />;
		}}
	>
      <Drawer.Screen  name="Screens">
				{props => <Screens {...props} style={screensStyles} />}
			</Drawer.Screen> 
    </Drawer.Navigator>
  ) 
}

const styles = StyleSheet.create({
	stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    }
	}
});