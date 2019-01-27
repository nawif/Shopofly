import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Login from './screens/Login'
import Register from './screens/Register'
import Item from './screens/Item'
import Scan from './screens/Scan'
import Ionicons from 'react-native-vector-icons/Ionicons'


const scanNavigator = createStackNavigator({
  Scan: {
    screen: Scan,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Item,
    navigationOptions: {
      header: null
    }
  },
  Wishlist: {
    screen: Item,
    navigationOptions: {
      header: null
    }
  },
  Cart: {
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
          name={focused ? "ios-qr-scanner" :  "ios-qr-scanner-outline"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Profile: {
    screen: scanNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? "ios-person" : "ios-person-outline"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Wishlist: {
    screen: scanNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? "ios-heart" : "ios-heart-outline"}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Cart: {
    screen: scanNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-cart' : 'ios-cart-outline'}
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
