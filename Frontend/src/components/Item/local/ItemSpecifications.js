import React from 'react'
import { View, Text } from 'react-native'

export const ItemSpecifications = ({ specifications }) => {
  const { container, titleStyle, specStyle } = styles
  console.log('IN ITEM SPECIFICATIONS!!!')
  return (
    <View style={container}>
      <Text style={titleStyle}>Specifications</Text>

      <View style={specStyle}>
        {getSpecifications(specifications)}
      </View>
    </View>
  )
}

const getSpecifications = (specs) => {
  const { rowStyle, keyStyle, valueStyle } = styles

  return specs.map((element, index) => {
    return (
      <View style={rowStyle} key={index}>
        <Text style={keyStyle}>{element.key}</Text>
        <Text style={valueStyle}>{element.value}</Text>
      </View>
    )
  })
}

const styles = {
  container: {
    width: '90%',
    alignSelf: 'center'
  },
  titleStyle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 14,
    color: '#2B2B2B',
    paddingTop: 10,
    paddingBottom: 10,
  },
  specStyle: {
    paddingBottom: 10,
  },
  rowStyle: {
    flexDirection: 'row'
  },
  keyStyle: {
    fontFamily: 'Cairo-SemiBold',
    fontSize: 12,
    color: '#A1A1A1',
    width: '16%',
  },
  valueStyle: {
    fontFamily: 'Cairo-SemiBold',
    fontSize: 12,
    color: '#2B2B2B',
  }
}
