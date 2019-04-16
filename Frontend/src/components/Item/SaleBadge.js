import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import { LinearGradient } from 'expo'
import * as Global from '../../Global'

export const SaleBadge = ({ percentage, marginLeft }) => {
  const { badgeStyle, offerStyle, imageStyle } = styles

  const container = {
    borderRadius:20,
    marginLeft: marginLeft || null,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 1,
    paddingBottom: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }

  return (
    <LinearGradient
      colors={[Global.FIRST_COLOR, Global.SECOND_COLOR]}
      start={[1.0, 0]}
      end={[0.0, 0]}
      style={container}
    >
      <Image
        source={require('../../../assets/percentage.png')}
        style={imageStyle}
      />
      <Text style={offerStyle}>{percentage}% OFF</Text>
    </LinearGradient>
  )
}

const styles = {
  offerStyle: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Cairo-SemiBold',
    marginLeft: 3,
    alignSelf: 'center'
  },
  imageStyle: {
    height: 12,
    width: 12
  }
}
