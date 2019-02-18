import React from 'react'
import { View, Text } from 'react-native'
import { PRIMARY_COLOR } from '../../Global';

export const DividerWithHeading = (props) => {

  const backgroundStyles = {
    height: props.height || 70,
    backgroundColor: '#F0F0F0',
    alignItems: 'flex-end',
    width: '100%',
    paddingLeft: 20,
    paddingBottom: 10,
    flexDirection: 'row'
  }

  const textStyle = {
    fontFamily: 'Cairo-Bold',
    fontSize: 24,
    color: PRIMARY_COLOR,
  }

  const subtextStyle = {
    fontFamily: 'Cairo-SemiBold',
    fontSize: 12,
    color: PRIMARY_COLOR,
    paddingBottom: 5,
    paddingLeft: 10
  }

  return (
    <View style={backgroundStyles}>
        <Text style={textStyle}>{ props.label }</Text>
        <Text style={subtextStyle}>{ props.sublabel }</Text>
    </View>
  )
}
