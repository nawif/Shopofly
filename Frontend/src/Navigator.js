import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Login from './screens/Login'
import Register from './screens/Register'
import Item from './screens/Item'
import Scan from './screens/Scan'
import { Icon } from 'react-native-elements'
import { Entypo, Octicons, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


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
        <MaterialCommunityIcons
          name={focused ? "qrcode-scan" : "qrcode-scan"}
          size={24}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Profile: {
    screen: scanNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Octicons
          name={focused ? "person" : "person"}
          size={24}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Wishlist: {
    screen: scanNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (   
        <FontAwesome
          name={focused ? 'heart' : 'heart'}
          size={24}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Cart: {
    screen: scanNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Entypo
          name={focused ? 'shopping-cart' : 'shopping-cart'}
          size={24}
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
