import React, { useState } from 'react'
//import { Block, Text, Button } from 'expo-ui-kit'
import { Image, View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';

import { Feather, AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import DashBoard from './screens/DashBoard'
import Contact from './screens/Contact'
import Messages from './screens/Messages'
import Animated from 'react-native-reanimated'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
 return (
	<Animated.View style={[styles.stack, { overflow: 'hidden' }, style]}>
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
					<Feather name="menu" size={18} color="white"/>
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
		<DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }} >
			<View >
				{/** add avantar */}
				<View style={{ margin: 20 }}>
					<Image 
						style={{borderRadius: 90}}
						resizeMode="center"
						source={{ height: 60, width: 60, 
						uri: "https://avatars2.githubusercontent.com/u/54491980?s=460&u=16764239edddf8be331bc238fef74b30ec8d4597&v=4" }}/>
					<Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 5, color: "#fff" }}>
							Daniel Gomes
					</Text>
					<Text style={{ fontSize: 9, marginTop: 8, fontWeight: "bold", color: "#fff" }}>
							https://github.com/dannyelgjl
					</Text>
				</View>
					{/** add icons to items */}
					<View> 	
						<DrawerItem 
							label="DashBoard"
							labelStyle={{ color: "#fff" ,marginLeft: -16 }}
							onPress={() => props.navigation.navigate("DashBoard")}
							icon={() => <AntDesign name="dashboard" color="#fff" size={16} />}
						/>

						<DrawerItem 
							label="Messages"
							labelStyle={{ color: "#fff" ,marginLeft: -16 }}
							onPress={() => props.navigation.navigate("Messages")}
							icon={() => <AntDesign name="message1" color="#fff" size={16} />}
						/>

						<DrawerItem 
							label="Contact"
							labelStyle={{ color: "#fff" ,marginLeft: -16 }}
							onPress={() => props.navigation.navigate("Contact")}
							icon={() => <AntDesign name="phone" color="#fff" size={16} />}
						/>

						<DrawerItem 
							label="Logout"
							labelStyle={{ color: "#fff" ,marginLeft: -16 }}
							onPress={() => alert("Tem certeza que quer sair?")}
							icon={() => <AntDesign name="logout" color="#fff" size={16} />}
						/>
					</View>
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

	const borderRadius = Animated.interpolate(progress, {
		inputRange: [0, 1],
		outputRange: [0, 10]
	});

	const screensStyles = { borderRadius, transform: [{ scale }] }

  return (
			<LinearGradient style={{ flex: 1 }} colors={[ "#20797C", "#2BA2A6" ]}>		
				<Drawer.Navigator 
					initialRouteName="DashBoard"
					drawerType="slide"
					overlayColor="transparent"
					drawerStyle={{ width: "50%", backgroundColor: "transparent"  }}
					contentContainerStyle={{ flex: 1 }}
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
			</LinearGradient>		
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