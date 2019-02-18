import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import { defaultTextContainer } from '../../Styles'

export const Headline = ({ text }) => {
  const { container, textStyle } = styles

  return (
    <View style={container}>
      <View style={defaultTextContainer}>
        <Text style={textStyle}>{ text }</Text>
      </View>
    </View>
  )
}

const styles = {
  container: {
    height: 60,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#F0F0F0',
  },
  textStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontFamily: 'Cairo-Bold',
  },
}
