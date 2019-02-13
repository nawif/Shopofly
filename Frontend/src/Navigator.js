import React from 'react'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
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

/* Main Tab Navigator */
let tabNavigator = createBottomTabNavigator(
  /* Screens */ 
  {
    Scan: scanNavigator,
  },

  /* Configuration */
  /* Warning: DO NOT PANIC */
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state
          let icon;

          switch (routeName) {
              case 'Scan': 
                icon = 'ios-home'
                break;
          }

          return <Ionicons name={icon} size={30} />
      },
    }),
    
    tabBarOptions: {
      showLabel: false,
      style: { 
        height: 70,
        borderTopWidth: 3,
        borderTopColor: '#eee'
        // paddingBottom: 15
      }
    }
  }
)

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

export default Navigator = createAppContainer(MyApp)