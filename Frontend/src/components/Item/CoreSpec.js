import React from 'react'
import {
  View,
  Text,
} from 'react-native'

export const CoreSpec = ({ specKey, specValue, alignSelf }) => {
  const { container, keyStyle, valueStyle } = styles

  return (
    <View style={container}>
      <Text style={keyStyle}>{specKey}</Text>
      <Text style={valueStyle}>{specValue}</Text>
    </View>
  )
}

const styles = {
  container: {
    borderRadius:40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 7,
    paddingBottom: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    marginTop: '3%',
    width: '45%',
  },
  keyStyle: {
    color: '#2B2B2B',
    fontFamily: 'Cairo-Regular'
  },
  valueStyle: {
    color: '#2B2B2B',
    fontFamily: 'Cairo-Bold'
  }
}
