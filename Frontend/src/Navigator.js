import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Login, Register, Item, Scan, Profile } from './screens'
import images from '../assets/images'
import { TabBarIcon } from './components'

const scanNavigator = createStackNavigator({
  Scan: {
    screen: Scan,
    navigationOptions: {
      headerTitle: (
          <Image style={{ height: 40, resizeMode: 'contain' }} source={require('../assets/headerLogo.png')}/>
      ),
      headerStyle: {
        height: 60,
      }
    }
  },
  Item: {
    screen: Item,
  },
})

/* Main Tab Navigator */
let tabNavigator = createBottomTabNavigator(
  /* Screens */
  {
    Scan: scanNavigator,
    Profile: Profile,
    Starred: Profile,
    Cart: Profile
  },

  /* Configuration */
  /* Warning: DO NOT PANIC */
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state
          let image;

          switch (routeName) {
              case 'Scan':
                image = focused ? images.qrActive : images.qr
                break;
              case 'Profile':
                image = focused ? images.profileActive : images.profile
                break;
              case 'Starred':
                image = focused ? images.starredActive : images.starred
                break;
              case 'Cart':
                image = focused ? images.cartActive : images.cart
                break;
          }

          return <TabBarIcon source={image} size={30} />
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
