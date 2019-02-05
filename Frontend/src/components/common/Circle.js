import React from 'react'
import { View, Text, Image } from 'react-native'

const defaultSize = 45

export const Circle = (props) => {
  const { textStyle, circleStyle } = styles

  if(props.size) {
    const newSize = props.size
    circleStyle.height = newSize
    circleStyle.width = newSize
    circleStyle.borderRadius = newSize/2
  }

  return (
    <View style={circleStyle}>
      {
      props.text ? (
                      <Text stlye={textStyle}>{props.text}</Text>
                    ) : (
                      props.children
                    )
      }
    </View>
  )
}

const styles = {
  circleStyle: {
    height: defaultSize,
    width: defaultSize,
    borderRadius: defaultSize/2,
    borderColor: '#14BAAB',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 16,
    fontFamily: 'Cairo-Bold',
  }
}
