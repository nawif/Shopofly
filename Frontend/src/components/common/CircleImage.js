import React from 'react'
import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo'
import * as Global from '../../Global'

const defaultSize = 45

export const CircleImage = (props) => {
  const { textStyle, circleStyle, innerCircleStyle } = styles

  if(props.size) {
    const newSize = props.size
    circleStyle.height = newSize
    circleStyle.width = newSize
    circleStyle.borderRadius = newSize/2
  }

  return (
    <View style={circleStyle}>
      <Image source={ props.image } />
    </View>
  )
}

const styles = {
  circleStyle: {
    height: defaultSize,
    width: defaultSize,
    borderRadius: defaultSize/2,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
