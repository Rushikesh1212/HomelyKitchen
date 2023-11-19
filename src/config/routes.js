import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from "@react-navigation/drawer"
import { SideMenu } from '../ScreenComponents/SideMenu/SideMenu';
import Dashboard from '../Screens/DashBoard/Dashboard';
import OutletList from '../Screens/OutletList/OutletList';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack =  createNativeStackNavigator();

function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="OutletList" component={OutletList}/>
      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default Routes;