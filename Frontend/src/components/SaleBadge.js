import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import { LinearGradient } from 'expo'
import * as Global from '../Global'

const SaleBadge = ({ percentage, marginLeft }) => {
  const { container, badgeStyle, offerStyle } = styles

  container.marginLeft = marginLeft || null

  return (
    <LinearGradient
      colors={[Global.FIRST_COLOR, Global.SECOND_COLOR]}
      start={[1.0, 0]}
      end={[0.0, 0]}
      style={container}
    >
      <View style={badgeStyle}>
        <Image
          source={require('../../assets/percentage.png')}
        />
        <Text style={offerStyle}>{percentage}% OFF</Text>
      </View>
    </LinearGradient>
  )
}

const styles = {
  container: {
    borderRadius:40,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 2,
    paddingBottom: 2,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  offerStyle: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Roboto-Medium',
    marginLeft: 3
  },
  badgeStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { SaleBadge }
