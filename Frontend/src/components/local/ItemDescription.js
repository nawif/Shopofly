import React from 'react'
import { View, Text } from 'react-native'

export const ItemDescription = (props) => {
  const { container, titleStyle, bodyStyle } = styles

  return (
    <View style={container}>
      <Text style={titleStyle}>Description</Text>

      <Text style={bodyStyle}>{props.description}</Text>
    </View>
  )
}

const styles = {
  container:{
    width: '90%',
    alignSelf: 'center',
  },
  titleStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#2B2B2B',
    paddingTop: 10,
    paddingBottom: 10,
  },
  bodyStyle: {
    fontFamily: 'Cairo-SemiBold',
    fontSize: 12,
    color: '#A1A1A1',
    paddingBottom: 10,
  }
}
