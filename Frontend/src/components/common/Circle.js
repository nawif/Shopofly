import React from 'react'
import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo'
import * as Global from '../../Global'

const defaultSize = 45

export const Circle = (props) => {
  const { textStyle, circleStyle, innerCircleStyle } = styles

  if(props.size) {
    const newSize = props.size
    circleStyle.height = newSize
    circleStyle.width = newSize
    circleStyle.borderRadius = newSize/2
  }

  return (
    <LinearGradient
      colors={[Global.SECOND_COLOR, Global.FIRST_COLOR]}
      start={[1.0, 0]}
      end={[0.0, 0]}
      style={circleStyle}
    >
      <View style={innerCircleStyle}>
        <Text style={textStyle}>{props.text}</Text>
      </View>
    </LinearGradient>
  )
}

const styles = {
  circleStyle: {
    height: defaultSize,
    width: defaultSize,
    borderRadius: defaultSize/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerCircleStyle: {
    height: defaultSize-5,
    width: defaultSize-5,
    borderRadius: (defaultSize-5)/2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 16,
    fontFamily: 'Cairo-Bold',
  }
}
