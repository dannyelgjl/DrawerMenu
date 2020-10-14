import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DashBoard from './screens/DashBoard'
import Contact from './screens/Contact'
import Messages from './screens/Messages'

const Drawer = createDrawerNavigator()

const Drawer = () => {
  return(
    <Drawer.Navigator initialRouteName="DashBoard">
      <Drawer.Screen  name="DashBoard" component={DashBoard} /> 
      <Drawer.Screen  name="Messages" component={Messages} /> 
      <Drawer.Screen  name="Contact" component={Contact} /> 
    </Drawer.Navigator>
  ) 
}

export default Drawer
