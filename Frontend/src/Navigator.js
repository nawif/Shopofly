import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Login from './screens/Login'
import Register from './screens/Register'
import Item from './screens/Item'

import Ionicons from 'react-native-vector-icons/Ionicons'


const scanNavigator = createStackNavigator({
  Item: {
    screen: Item,
    navigationOptions: {
      header: null
    }
  }
})

const tabNavigator = createBottomTabNavigator({
  Scan: {
    screen: scanNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  }
})

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
  },
  App: {
    screen: tabNavigator,
    navigationOptions: {
      header: null
    }
  }
})

export default MyApp
