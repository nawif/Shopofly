import React from 'react'
import { createTabNavigator, createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './screens/Login'
import Register from './screens/Register'
import Ionicons from 'react-native-vector-icons/Ionicons'


/*
* This is the main Navigator,
* If the user is logged in
* The user will be navigated to "App" through Login screen
* If not, the user will land on Login screen.
*/
const MyApp = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  }
})

export default MyApp
