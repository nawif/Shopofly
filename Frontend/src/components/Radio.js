import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native'

import { LinearGradient } from 'expo'

import * as Global from '../Global'
import { defaultTextContainer } from '../Styles'

const defaultSize = 20

export const Radio = ({ label, isSelected }) => {
  const { container, radio, checkStyle } = styles

  return (
    <View style={[defaultTextContainer, container]}>
      <View style={radio}>
        {
          isSelected ? (
            <LinearGradient
              colors={[Global.FIRST_COLOR, Global.SECOND_COLOR]}
              start={[1.0, 0]}
              end={[0.0, 0]}
              style={checkStyle}
            >
              <Image source={require('../../assets/checked.png')} />
            </LinearGradient>
          ) : null
        }
      </View>
      <Text>Pay With Credit Card</Text>
    </View>
  )
}

const styles = {
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  radio: {
    height: defaultSize,
    width: defaultSize,
    borderRadius: defaultSize/2,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginRight: '2%',
    overflow: 'hidden',
  },
  checkStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: defaultSize,
    height: defaultSize,
    overflow: 'hidden',
  }
}
